import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import { Auth } from '../API/Auth';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Elektron pochta kerak';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Iltimos, to\'g\'ri e-pochta manzilini kiriting';
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Parol talab qilinadi';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Parol kamida 8 ta belgidan iborat bo\'lishi kerak';
      isValid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parollar mos kelmaydi';
      isValid = false;
    }

    // Validate terms agreement
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Siz shartlarga rozi bo\'lishingiz kerak';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {

      // Here you would normally send the data to your API
      const response = await Auth.sign_up(formData);

      if (!response.ok) {
        setFormError(response.error);
      }else{
        setIsSuccess(true);

        // Reset form after successful submission
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          agreeTerms: false
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle API errors here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md border border-gray-700 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">Roʻyxatdan oʻtish muvaffaqiyatli!</h2>
            <p className="text-gray-400 text-center">
              Pochta manzilingizga tastiqlash uchun link yubordik. Diqqat ushbu link 10 daqiqa amal qiladi
            </p>
            <a href="/"
              className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center"
            >
              Orqaga qaytish
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md border border-gray-700 shadow-xl">
        <div className="mb-6 text-center">
          <a href='/' className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
            Chipton
          </a>
          <p className="text-gray-400 mt-2">Buguniq biz bilan ishlashni boshlashingiz mumkin</p>
        </div>

        {
          formError !== false ?
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Xatolik!</span> {formError}
          </div>
          : null
        }

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email manzil
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Parol
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                placeholder="Parol yarating"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            <p className="mt-1 text-xs text-gray-400">Parol kamida 8 ta belgidan iborat bo'lishi kerak</p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Parolni tasdiqlang
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                placeholder="Parolni tasdiqlang"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 text-purple-600"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeTerms" className="text-gray-300">
                Men <a href="#" className="text-purple-400 hover:text-purple-300">Sayt shartlari</a> va <a href="#" className="text-purple-400 hover:text-purple-300">Maxfiylik qonunlariga</a> roziman
              </label>
              {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Yuklanmoqda...
              </div>
            ) : (
              <div className="flex items-center">
                Hisob yaratish <ArrowRight className="ml-2" size={18} />
              </div>
            )}
          </button>

          <div className="text-center mt-4">
            <p className="text-gray-400">
              Hisobingiz bormi? <a href="https://app.agron.uz/login" className="text-purple-400 hover:text-purple-300">Kirish</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;