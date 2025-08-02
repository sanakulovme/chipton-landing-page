import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFound from './NotFound';

// API [server]
import { Auth } from "../server/auth";

import "../assets/css/loader.css";

const Onboarding = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    centerName: '',
    centerPhone: '',
    authorName: '',
    authorPhone: '',
    region: '',
    centerType: ''
  });
  const [errors, setErrors] = useState({});
  const [notFound, setNotFound] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const fetchToken = async () => {
      try {
        const response = await Auth.eduVerify({'token': token});
        console.log(response)
        if (!response.ok) setNotFound(true);
        setFormData({...formData, token: token})
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [token, navigate]);

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^\+998\d{9}$/;

    if (!formData.centerName.trim()) {
      newErrors.centerName = "Markaz nomi kiritilishi shart";
    }
    if (!formData.centerPhone || !phoneRegex.test(formData.centerPhone)) {
      newErrors.centerPhone = "Telefon raqami +998 bilan boshlanib, 12 ta raqamdan iborat bo‘lishi kerak";
    }
    if (!formData.authorName.trim()) {
      newErrors.authorName = "Asoschi ismi kiritilishi shart";
    }
    if (!formData.authorPhone || !phoneRegex.test(formData.authorPhone)) {
      newErrors.authorPhone = "Telefon raqami +998 bilan boshlanib, 12 ta raqamdan iborat bo‘lishi kerak";
    }
    if (!formData.region) {
      newErrors.region = "Viloyatni tanlash shart";
    }
    if (!formData.centerType) {
      newErrors.centerType = "Markaz turini tanlash shart";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Formani yuborish logikasi
      console.log("Form ma'lumotlari:", formData);
      setLoading(true);
      try {
        const response = await Auth.eduComplate(formData);
        console.log(response);
        if (response.ok) {
          setLoading(true);
          window.location.href = 'https://app.chipton.uz/login';
        } else {
          alert(response.error);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Har bir o'zgarishda xatoni yangilash
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <>
      {loading ? (
        <div className='loader-container'><div className="loader"></div></div>
      ) : (
        (
          notFound ? 
          <NotFound />
          :
          <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form onSubmit={handleSubmit}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="centerName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Markaz nomi
                    </label>
                    <input
                      type="text"
                      name="centerName"
                      id="centerName"
                      value={formData.centerName}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.centerName ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {errors.centerName && (
                      <p className="mt-1 text-sm text-red-600">{errors.centerName}</p>
                    )}
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="centerPhone"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Markaz telefon raqami
                    </label>
                    <input
                      type="text"
                      name="centerPhone"
                      id="centerPhone"
                      value={formData.centerPhone}
                      onChange={handleChange}
                      placeholder="+998901234567"
                      className={`w-full rounded-md border ${errors.centerPhone ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {errors.centerPhone && (
                      <p className="mt-1 text-sm text-red-600">{errors.centerPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="authorName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Markaz asoschisi
                    </label>
                    <input
                      type="text"
                      name="authorName"
                      id="authorName"
                      value={formData.authorName}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.authorName ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {errors.authorName && (
                      <p className="mt-1 text-sm text-red-600">{errors.authorName}</p>
                    )}
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="authorPhone"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Asoschining raqami
                    </label>
                    <input
                      type="text"
                      name="authorPhone"
                      id="authorPhone"
                      value={formData.authorPhone}
                      onChange={handleChange}
                      placeholder="+998901234567"
                      className={`w-full rounded-md border ${errors.authorPhone ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {errors.authorPhone && (
                      <p className="mt-1 text-sm text-red-600">{errors.authorPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="region"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Viloyat
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-gray-700 bg-white border ${errors.region ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    >
                      <option value="" disabled>--Viloyat--</option>
                      <option value="andijon">Andijon</option>
                      <option value="buxoro">Buxoro</option>
                      <option value="fargona">Farg‘ona</option>
                      <option value="jizzax">Jizzax</option>
                      <option value="xorazm">Xorazm</option>
                      <option value="namangan">Namangan</option>
                      <option value="navoiy">Navoiy</option>
                      <option value="qashqadaryo">Qashqadaryo</option>
                      <option value="samarqand">Samarqand</option>
                      <option value="sirdaryo">Sirdaryo</option>
                      <option value="surxondaryo">Surxondaryo</option>
                      <option value="toshkent">Toshkent</option>
                      <option value="qoraqalpogiston">Qoraqalpog‘iston Respublikasi</option>
                    </select>
                    {errors.region && (
                      <p className="mt-1 text-sm text-red-600">{errors.region}</p>
                    )}
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="centerType"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Markaz turi
                    </label>
                    <select
                      name="centerType"
                      id="centerType"
                      value={formData.centerType}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-gray-700 bg-white border ${errors.centerType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    >
                      <option value="" disabled>--Markaz turi--</option>
                      <option value="Xususiy">Xususiy</option>
                      <option value="Davlat tashkiloti">Davlat tashkiloti</option>
                    </select>
                    {errors.centerType && (
                      <p className="mt-1 text-sm text-red-600">{errors.centerType}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Kirish
                </button>
              </div>
            </form>
          </div>
        </div>
        )
      )}
    </>
  );
};

export default Onboarding;