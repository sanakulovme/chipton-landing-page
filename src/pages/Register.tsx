import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import Loader from "../icons/Loader";
import Banner from "../components/Banner";
import { Auth } from "../server/auth";


// Define TypeScript interface for formData
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ success?: string; error?: string }>({});
  const [pathLoad, setPathLoad] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname == '/signup'){
      import ("../assets/css/loader.css");
      import ("../index.css");
      const timer = setTimeout(() => {
        setPathLoad(false);
      }, 2000);

      return () => clearTimeout(timer);
    }else{
      setPathLoad(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setModal({});

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      setModal({ error: "Passwords do not match" });
      setLoading(false);
      return;
    }

    try {
      const response = await Auth.signUp(formData);
      if (response.ok) {
        setModal({ success: response.message });
        setFormData({ email: "", password: "", confirmPassword: "" });
      } else {
        setModal({ error: response.error });
      }
    } catch (err) {
      setModal({ error: "An unexpected error occurred. Please try again." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {pathLoad ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 flex">
          {/* Left Section - Form */}
          <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Akkaunt yarating
                </h1>
                <p className="text-gray-600">
                  Barcha qulayliklardan bugunoq foydalanishni boshlang!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {modal.success && (
                  <div
                    className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-300"
                    role="alert"
                  >
                    <span className="font-medium">Tayyor!</span> {modal.success}
                  </div>
                )}
                {modal.error && (
                  <div
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-300"
                    role="alert"
                  >
                    <span className="font-medium">Xatolik!</span> {modal.error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="outline-none w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Parol
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="outline-none w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Qayta kiriting
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="outline-none w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center group ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Yaratish
                  {loading ? (
                    <div className="ml-2">
                      <Loader />
                    </div>
                  ) : (
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Akkauntingiz bormi?{" "}
                  <a
                    href="https://app.chipton.uz/login"
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Kirish
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Banner */}
          <div className="hidden lg:block flex-1">
            <Banner />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;