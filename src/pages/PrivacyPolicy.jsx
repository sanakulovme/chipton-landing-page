import { Shield, Lock } from "lucide-react";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Loader from "../icons/Loader";

export default function PrivacyPolicy() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();


  useEffect(() => {
    if(pathname == '/privacy-policy'){
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
      {loading ?(
        <div className="loader-container">
          <div className="loader"></div>
        </div>
        ) : (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-blue-600 w-8 h-8" />
              <h1 className="text-3xl font-bold text-gray-800">Maxfiylik siyosati</h1>
            </div>

            <p className="text-gray-600 mb-6">
              Ushbu maxfiylik siyosati bizning xizmatlarimizdan foydalanganda
              ma’lumotlaringiz qanday yig‘ilishi, saqlanishi va ishlatilishini
              tushuntiradi.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-700">1. Ma’lumot yig‘ish</h2>
                <p className="text-gray-600">
                  Biz foydalanuvchilardan ro‘yxatdan o‘tishda ism, telefon raqami,
                  elektron pochta manzili kabi ma’lumotlarni yig‘amiz. Shuningdek,
                  tizimdan foydalanish tarixi va faoliyatingiz qayd qilinadi.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-700">2. Ma’lumotdan foydalanish</h2>
                <p className="text-gray-600">
                  Sizning ma’lumotlaringiz xizmatlarni taqdim etish, tizimni
                  yaxshilash va yangiliklar yuborish maqsadida ishlatiladi.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-700">3. Ma’lumotni himoyalash</h2>
                <p className="text-gray-600">
                  Biz ma’lumotlaringizni xavfsiz saqlash uchun zamonaviy xavfsizlik
                  texnologiyalaridan foydalanamiz va uchinchi tomonlarga ruxsatsiz
                  berilmaydi.
                </p>
              </section>
            </div>

            <div className="mt-10 flex items-center text-sm text-gray-500">
              <Lock className="w-5 h-5 mr-2" />
              Oxirgi yangilanish: 2025-yil Avgust
            </div>
          </div>
        </div>
        )}
    </>
  );
}
