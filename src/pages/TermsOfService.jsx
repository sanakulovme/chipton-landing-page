import { FileText, CheckCircle } from "lucide-react";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Loader from "../icons/Loader";

export default function TermsAndConditions() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();


  useEffect(() => {
    if(pathname == '/terms-of-service'){
      import ("../assets/css/loader.css");
      import ("../index.css");
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }else{
      setLoading(false);
    }
  }, []);

  return (
    <>
    {loading ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-green-600 w-8 h-8" />
            <h1 className="text-3xl font-bold text-gray-800">Foydalanish shartlari</h1>
          </div>

          <p className="text-gray-600 mb-6">
            Ushbu shartlar bizning xizmatimizdan qanday foydalanishingizni
            tartibga soladi. Platformadan foydalanish orqali siz ushbu shartlarga
            rozilik bildirasiz.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-700">1. Hisob qaydnomasidan foydalanish</h2>
              <p className="text-gray-600">
                Siz tizimda to‘g‘ri ma’lumot berishingiz va hisobingiz
                xavfsizligini ta’minlashingiz shart. Hisobdan noqonuniy foydalanish
                taqiqlanadi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-700">2. To‘lov va xizmatlar</h2>
              <p className="text-gray-600">
                Pullik tariflarga obuna bo‘lgan foydalanuvchilar belgilangan
                miqdorda to‘lovni amalga oshirishlari kerak. To‘lov qaytarilmaydi,
                faqat maxsus hollarda qo‘llab-quvvatlash jamoasi orqali ko‘rib
                chiqiladi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-700">3. Mas’uliyat cheklovi</h2>
              <p className="text-gray-600">
                Xizmatdan foydalanish davomida yuzaga keladigan texnik muammolar
                yoki zararlar uchun kompaniya cheklangan javobgarlikka ega.
              </p>
            </section>
          </div>

          <div className="mt-10 flex items-center text-sm text-gray-500">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Oxirgi yangilanish: 2025-yil Avgust
          </div>
        </div>
      </div>
    )}
    </>
  );
}
