import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
        </svg>
      ),
      title: "Xarajatlarni kamaytirish",
      description: "Avtomatlashtirish va optimallashtirish orqali xarajatlarni kamaytiring. Qog'ozbozlikdan voz keching va resurslardan oqilona foydalaning."
    },
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
        </svg>
      ),
      title: "Talabalar bilan munosabatlarni yaxshilash",
      description: "Talabalar bilan shaxsiy munosabatlarni o'rnating va ularning ehtiyojlariga mos yechimlar taklif qiling. Talabalarning muvaffaqiyatiga erishing va ularni muassasangizga sodiq qiling."
    },
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
        </svg>
      ),
      title: "Samaradorlikni oshirish",
      description: "O'quv jarayonlarini avtomatlashtiring, dars jadvalini optimallashtiring va hisobotlarni avtomatik ravishda yarating. Vaqtni tejang va resurslardan oqilona foydalaning."
    },
    {
      icon: (
        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z"></path>
        </svg>
      ),
      title: "Qo'llab-quvvatlash",
      description: "Bizning qo'llab-quvvatlash jamoamiz har doim sizga yordam berishga tayyor. Savollaringizga javob bering va muammolarni tezda hal qiling."
    }
  ];

  return (
  <section className="py-16 sm:py-24 bg-white">  {/* Faqat white theme: bg-white qo'shdim, kontrast uchun */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">Ta'lim CRMning afzalliklari</h2>
      <p className="mt-4 text-lg text-gray-700">Ta'lim CRM tizimidan foydalanish orqali siz quyidagi afzalliklarga ega bo'lasiz:</p>  {/* text-black/60 ni text-gray-700 ga (ko'rinadigan, opacity yo'q) */}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6">  {/* Custom border va bg ni defaultga: gray-200 border (ko'rinadi), bg-white */}
          <div className="text-blue-600 size-7">{benefit.icon}</div>  {/* text-primary ni text-blue-600 ga (default Tailwind rangi, ko'rinadi) */}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-black">{benefit.title}</h3>
            <p className="text-sm text-gray-700">{benefit.description}</p>  {/* text-black/60 ni text-gray-700 ga */}
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

export default Benefits;