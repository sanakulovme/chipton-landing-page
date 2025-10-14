// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nodira Karimova",
      date: "2023-10-26",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD988pLJ-ceBKV4FUZ1cNfUU8XqFkF8dZUAuQq_NEWjOC9EaQCRB3-SlqIc21qioFdfJHH8Es_8p8-hzuxnzsTC0qUaPpimcsvsGbHZvOk3xbmCgCUkDGkS7L90na3cR06RErwuKPb23DHwta2nxSDMqCCI2XPsxwDAfiGpwzzsGNOnZZirNZ8P1784SLvyr-apxq5iKMcDWw8uJXpO9QHL8vVCtKoYqh9i26a6a5BKr1JHVJxd3V1TKr6JiO7pAPIIALG5kDcnWSBP",
      rating: 5,
      comment: "\"Ta'lim CRM tizimi bizning ta'lim markazimiz uchun haqiqiy topilma bo'ldi. Talabalar bilan munosabatlarni yaxshilash, dars jadvalini optimallashtirish va hisobotlarni avtomatlashtirish orqali bizning samaradorligimiz sezilarli darajada oshdi.\""
    },
    {
      name: "Akmal Xolmatov",
      date: "2023-11-15",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-PtLBVWcWnCA9-al4IzU-4jhQ8nNDP8Ke6PayNDMHpWq9buthnL8qx-cgKorhGt94I9XjJ5Q0DQcDe35otjcGFVBsub56tZYA0mr8ySY_G5GkVYiLaj-daE9Go4LNO8eQjn-LZYokNDMD3R_tGb68CH62NkDX5jT9F3LPCgUf55Epz_Dxci5tM-D4aJ1Cvfjqw_zx0fpouUAAFoBOTuf6z5SbObeJYXvZZq55cZR5FPRjDEuSuZ_MJs7vv8jEpMgrhg2lY4S4nHw4",
      rating: 4,
      comment: "\"Bizning universitetimizda Ta'lim CRM tizimini joriy etish orqali talabalar bilan munosabatlarimiz yangi bosqichga ko'tarildi. Bu talabalarning xabardorligini oshirishga yordam beradi.\""
    },
    {
      name: "Dilshod Qodirov",
      date: "2023-12-01",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF0a4CMAZNLljFmIG-QLJ2jWKZf2uqNZ7nJ5ShIoPOhSZeX61N0pqhNlZCSnev4DYMvJetrqF-_enDXMts1sSjOOUF6mZmRORVTNcpsf7TGgr8xUpg7pLwpf57sLpKxVBPGtbeRefV9nBjVjDIiACh3e__GKctoBKwycX_k6_BnQRQ7YijKeBhtseGn-1_yF5TaSVjlhQco1Kjr4O6wpAOjqKbz5SrE20rHnX1XKFjMvsUp07X2WR1fL0IvwkeZg7oxARIWEDQwul_",
      rating: 5,
      comment: "\"Ta'lim CRM tizimi bizning maktabimiz uchun eng yaxshi yechim bo'ldi. Tizimning xavfsizligi va maxfiyligi bizni juda xursand qildi.\""
    }
  ];

  const StarIcon = ({ filled = true }) => (
    <svg
      fill="currentColor"
      height="20px"
      viewBox="0 0 256 256"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      className={filled ? "text-yellow-400" : "text-black/20 dark:text-white/20"}
    >
      {filled ? (
        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
      ) : (
        <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
      )}
    </svg>
  );

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Mijozlarimiz fikrlari</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-4 rounded-xl border border-black/10 dark:border-white/10 p-6 bg-background-light/50 dark:bg-background-dark/50">
            <div className="flex items-center gap-3">
              <div
                className="size-12 rounded-full bg-cover bg-center"
                style={{backgroundImage: `url(${testimonial.avatar})`}}
              ></div>
              <div className="flex-1">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-black/60 dark:text-white/60">{testimonial.date}</p>
              </div>
            </div>
            <RatingStars rating={testimonial.rating} />
            <p className="text-sm text-black/80 dark:text-white/80">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;