import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Ta'lim CRM tizimi nima?",
      answer: "Ta'lim CRM tizimi ta'lim muassasalari uchun maxsus ishlab chiqilgan bo'lib, talabalar bilan munosabatlarni boshqarish, o'quv jarayonlarini optimallashtirish va muassasa samaradorligini oshirishga yordam beradi."
    },
    {
      question: "Tizim qanday ishlaydi?",
      answer: "Tizimimiz talabalar bazasini yuritish, dars jadvallarini tuzish, avtomatlashtirilgan eslatmalar yuborish va hisobotlarni yaratish kabi ko'plab funksiyalarni taklif etadi. Uning barcha imkoniyatlarini veb-brauzer orqali boshqarish mumkin."
    },
    {
      question: "Narxlar qanday?",
      answer: "Biz turli ehtiyojlar va byudjetlar uchun mos keladigan bir nechta tarif rejalarini taklif qilamiz. Batafsil ma'lumotni \"Narxlar\" bo'limida topishingiz mumkin."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const ChevronIcon = () => (
    <svg
      fill="currentColor"
      height="20px"
      viewBox="0 0 256 256"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tez-tez beriladigan savollar</h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background-light/50 dark:bg-background-dark/50"
          >
            <button
              className="flex w-full cursor-pointer items-center justify-between gap-6"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-base font-medium text-left">{faq.question}</p>
              <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <ChevronIcon />
              </div>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-sm text-black/60 dark:text-white/60">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;