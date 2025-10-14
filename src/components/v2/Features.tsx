// components/Features.js
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
        </svg>
      ),
      title: "Talabalar bazasi",
      description: "Talabalar haqidagi barcha ma'lumotlarni bir joyda saqlang va ularni boshqaring. Talabalar bilan munosabatlarni yaxshilang va ularning muvaffaqiyatiga erishing."
    },
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
        </svg>
      ),
      title: "Dars jadvali va hisobotlar",
      description: "Dars jadvalini tuzing, o'qituvchilarning ish yuklamasini nazorat qiling va hisobotlarni avtomatik ravishda yarating. Vaqtni tejang va resurslardan oqilona foydalaning."
    },
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
        </svg>
      ),
      title: "Avtomatlashtirilgan eslatmalar",
      description: "Talabalarga darslar, imtihonlar va to'lovlar haqida avtomatik eslatmalar yuboring. Muloqotni osonlashtiring va talabalarning xabardorligini oshiring."
    },
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
        </svg>
      ),
      title: "Xavfsizlik va maxfiylik",
      description: "Ma'lumotlaringizning xavfsizligini ta'minlang. Bizning tizimimiz maxfiylik standartlariga to'liq mos keladi va ma'lumotlaringizni himoya qiladi."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">  {/* Faqat white bg */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">Ta'lim CRMning asosiy xususiyatlari</h2>
        <p className="mt-4 text-lg text-gray-700">Bizning tizimimiz ta'lim muassasalari uchun maxsus ishlab chiqilgan bo'lib, quyidagi asosiy xususiyatlarni o'z ichiga oladi:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-6">  {/* bg-white, kontrastli border */}
            <div className="text-blue-600 size-7">  {/* Icon rangi: blue-600 (ko'rinadi) */}
              {feature.icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-black">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>  {/* text-gray-700: o'qiladigan kulrang */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;