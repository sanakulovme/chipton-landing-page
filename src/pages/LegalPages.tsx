import React from "react";

export default function LegalPages() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Maxfiylik siyosati */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Maxfiylik Siyosati
          </h1>
          <p className="text-gray-600 mb-4">
            Ushbu Maxfiylik siyosati sizning shaxsiy ma’lumotlaringizni qanday
            yig‘ishimiz, saqlashimiz va foydalanishimiz haqida ma’lumot beradi.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Ma’lumot yig‘ish
          </h2>
          <p className="text-gray-600">
            Biz siz ro‘yxatdan o‘tganda, xizmatlardan foydalanganda yoki
            to‘lovlarni amalga oshirganda ma’lumot yig‘amiz (ism, telefon raqam,
            email va to‘lov ma’lumotlari).
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Ma’lumotdan foydalanish
          </h2>
          <p className="text-gray-600">
            Ma’lumotlaringiz faqat xizmatlarni taqdim etish, hisobni
            boshqarish va qonuniy majburiyatlarni bajarish uchun ishlatiladi.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Ma’lumotni himoya qilish
          </h2>
          <p className="text-gray-600">
            Biz ma’lumotlaringizni xavfsiz saqlash uchun zamonaviy texnologiyalar va
            xavfsizlik choralaridan foydalanamiz.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Agar savollaringiz bo‘lsa, biz bilan{" "}
            <a href="mailto:contact@company.com" className="text-blue-600">
              contact@company.com
            </a>{" "}
            orqali bog‘laning.
          </p>
        </section>

        {/* Foydalanish shartlari */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Foydalanish Shartlari
          </h1>
          <p className="text-gray-600 mb-4">
            Ushbu sahifa bizning xizmatlarimizdan foydalanish bo‘yicha shartlar
            va qoidalarni belgilaydi. Xizmatdan foydalangan holda siz ushbu
            shartlarga rozi bo‘lasiz.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Hisob yaratish
          </h2>
          <p className="text-gray-600">
            Foydalanuvchilar hisob yaratishda to‘g‘ri va yangilangan
            ma’lumotlarni taqdim etishlari kerak. Har bir foydalanuvchi o‘z
            login ma’lumotlari uchun javobgardir.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            To‘lov va tariflar
          </h2>
          <p className="text-gray-600">
            Pullik tariflardan foydalanish uchun foydalanuvchi belgilangan
            to‘lovni amalga oshirishi lozim. To‘lov qaytarilmaydi, faqat
            qonunchilikda belgilangan hollarda istisno qilinadi.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Foydalanuvchining majburiyatlari
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Xizmatdan noqonuniy maqsadlarda foydalanmaslik</li>
            <li>Boshqa foydalanuvchilar huquqlarini hurmat qilish</li>
            <li>Sistemaga zarar yetkazadigan harakatlardan tiyilish</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Shartlarga o‘zgartirishlar
          </h2>
          <p className="text-gray-600">
            Biz ushbu shartlarni vaqti-vaqti bilan yangilashimiz mumkin.
            Yangilangan shartlar saytimizda e’lon qilingan paytdan kuchga kiradi.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Agar savollaringiz bo‘lsa, biz bilan{" "}
            <a href="mailto:contact@company.com" className="text-blue-600">
              contact@company.com
            </a>{" "}
            orqali bog‘laning.
          </p>
        </section>
      </div>
    </div>
  );
}
