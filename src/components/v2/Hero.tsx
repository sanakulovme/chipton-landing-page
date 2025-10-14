import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative min-h-[500px] flex flex-col items-start justify-end rounded-xl bg-cover bg-center p-8 md:p-12"
           style={{backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoHNzbcdc0_-P7IZy3Vc2HdZefuL-lH_XjzMYvUdZd1vNO-Pe_fNvs8vgV2euG_HGvwyfQDSjALgdUqpwHH3RvSn1xGQVKfTr0ySKu0GoqLIQReKT3_0yX2N-EXbwFd4J1kYfKGNlut_9NDe0HAfzOea1VxVeGazy4XtSgwiE7FNtTNmgDDcvvNXU_Z_tmabwE1yk-o04W81ROBPXES0bNt9NFcQM7SFyxElk7ptxhArWPLrZZsGiJEGX2fNAFReTVVfmC3zwps04S")'}}>
        <div className="max-w-3xl space-y-4 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ta'lim CRM: Ta'lim muassasalari uchun innovatsion yechim</h1>
          <p className="text-base md:text-lg">Ta'lim CRM tizimi orqali o'quv jarayonlarini optimallashtiring, talabalar bilan munosabatlarni mustahkamlang va muassasangizning samaradorligini oshiring.</p>
        </div>
        <button className="mt-6 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide transition-colors hover:bg-primary/90">
          <span className="truncate">Batafsil ma'lumot</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;