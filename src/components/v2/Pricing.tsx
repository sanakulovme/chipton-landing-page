import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Boshlang'ich",
      price: "$29",
      period: "/oy",
      buttonVariant: "outline",
      features: [
        "100 talabagacha",
        "Asosiy funksiyalar",
        "Elektron pochta orqali qo'llab-quvvatlash"
      ]
    },
    {
      name: "Standart",
      price: "$59",
      period: "/oy",
      buttonVariant: "primary",
      features: [
        "500 talabagacha",
        "Barcha asosiy funksiyalar",
        "Dars jadvali va hisobotlar",
        "Telefon orqali qo'llab-quvvatlash"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      period: "/oy",
      buttonVariant: "outline",
      features: [
        "Cheksiz talabalar",
        "Barcha funksiyalar",
        "Maxsus qo'llab-quvvatlash",
        "Integratsiyalar"
      ]
    }
  ];

  const CheckIcon = () => (
    <svg className="text-primary" fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  );

  return (
    <section className="py-16 sm:py-24 bg-white">  {/* Faqat white theme: bg-white qo'shdim, kontrast uchun */}
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">Narxlar</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {plans.map((plan, index) => (
      <div
        key={index}
        className={`flex flex-col gap-6 rounded-xl border p-8 ${
          plan.buttonVariant === "primary"
            ? "border-2 border-blue-600 bg-white"  // Highlighted: blue border, white bg (ko'rinadi)
            : "border border-gray-200 bg-white"  // Oddiy: gray border, white bg
        }`}
      >
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-black">{plan.name}</h3>
          <p className="flex items-baseline gap-1">
            <span className="text-4xl font-black tracking-tighter text-black">{plan.price}</span>
            <span className="text-base font-bold text-black">{plan.period}</span>
          </p>
        </div>
        <button
          className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold tracking-wide transition-colors ${
            plan.buttonVariant === "primary"
              ? "bg-blue-600 text-white hover:bg-blue-700"  // Primary button: ko'k bg, oq text
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"  // Secondary: och ko'k bg, ko'k text
          }`}
        >
          <span className="truncate">Tanlang</span>
        </button>
        <ul className="space-y-3 text-sm text-left text-gray-700">  {/* Features matni: gray-700 (o'qiladigan) */}
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
  );
};

export default Pricing;