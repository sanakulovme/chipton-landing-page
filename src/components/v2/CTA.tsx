// components/CTA.js
import React from 'react';

const CTA = () => {
  return (
  <section className="py-16 sm:py-24 text-center bg-white">  {/* Faqat white theme: bg-white qo'shdim, kontrast uchun */}
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">Ta'lim CRM tizimini hoziroq sinab ko'ring!</h2>
      <p className="mt-4 text-lg text-gray-700">Bepul sinov davri orqali tizimimizning barcha imkoniyatlarini o'rganing va muassasangiz uchun qanday foyda keltirishini ko'ring.</p>  {/* text-black/60 ni text-gray-700 ga (ko'rinadigan, opacity yo'q) */}
      <button className="mt-8 flex min-w-[84px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-600 text-white text-base font-bold tracking-wide transition-colors hover:bg-blue-700">  {/* bg-primary ni bg-blue-600 ga (default Tailwind rangi), hover moslashtirdim */}
        <span className="truncate">Ro'yxatdan o'tish</span>
      </button>
    </div>
  </section>
);
};

export default CTA;