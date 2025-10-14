import React from 'react';

const Interface = () => {
  const interfaceItems = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDim_R4A9TbSxqDqblCF4C1XZcWguxhMCojOgPw0KNNNJmx6c0rWhecsQlkhOzF0_uZ07o96NkTVblLgMM47UBJ4YmtuRvPviAILOT1L5AjDyutE6vhp-RDXuN8oeis4KyXGkQPKMbEA9J4A0Qnrq9cBnXU8mXCXMbhegjwKrDD7ls_U6DkaEBVshp18lO9mpfw3JnXNCqacVdmlXuMncHv-qOVos86zs4MxBoNzxHhASKK6msYwJmTIK_kslnNOJX26k8Q7zPEaEgL",
      title: "Boshqaruv paneli",
      description: "Boshqaruv paneli orqali barcha muhim ma'lumotlarni bir joyda ko'ring. Talabalar soni, darslar jadvali, to'lovlar va boshqa ko'rsatkichlarni kuzatib boring."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPU9x1oj8hLZjQmg5e6ysnFPyn19u6et0gxKEw3APCrfhj5QoTh6jiYC-DdJe3YkUBQ8VCYa3GNx4ix-VSfFQoM0UHBZYdgJpo7Mxlr_wMLV_NA61SfgakqmQV58CSOXwZ5Cad33nPNbr-l7cOI73d5X6sFn7QMvpdSUZze9_Sr1ncjWNHM12ev6Rgu6jxoG2bepgDsUOKEGiqmNfBQ14jS3d3KRcbOAJ-O4wRpQCWcWgogts343-CUQFXM76BIpwE-RgdsJGyK5ET",
      title: "Dars jadvali",
      description: "Dars jadvali funksiyasi orqali darslarni rejalashtiring, o'qituvchilarni tayinlang va talabalarning darslarga qatnashishini nazorat qiling."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhHhqKcaG-Nwdo-CINPPbUY5-aggtuO_G0Glg-TGeboINnDvcvyWkShCuUziKelf5hYoizHSNmJ0eXDgIKkO9su9AXG29Y9w5klxKfCw5-e4zCgkBd3m2tkw0XUcQHdSTaHpwu5HrGn6Mj5uys1XQpAuaBeno_U3mYxNx6lRS29bABKjQxglOayH3lVEFuTTYQbxL8Fv1Z838Ja-0tntLERvdAs2IvxY9Wo2g6E7AHDkMp3GIRDP0MjcspCehKiFpFoVagMAiRZZFm",
      title: "Muloqot",
      description: "Muloqot funksiyasi orqali talabalar, o'qituvchilar va ota-onalar bilan oson muloqot qiling. Xabarlar yuboring, eslatmalar tayinlang va guruhlar yarating."
    }
  ];

  return (
  <section className="py-16 sm:py-24 bg-white">  {/* Faqat white theme: bg-white qo'shdim, kontrast uchun */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-exextrabold tracking-tight text-black">Qulay interfeys va foydalanish osonligi</h2>
      <p className="mt-4 text-lg text-gray-700">Ta'lim CRM tizimi intuitiv interfeysga ega bo'lib, foydalanish oson. Tizimni o'rganish uchun ko'p vaqt sarflashingizga hojat yo'q. Barcha kerakli funksiyalar bir joyda jamlangan.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {interfaceItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="w-full aspect-video bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${item.image})`}}></div>
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-black">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>  {/* text-black/60 ni text-gray-700 ga (o'qiladigan, opacity yo'q) */}
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

export default Interface;