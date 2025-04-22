import { Feature, NavigationItem, Partner, Testimonial } from "../types";

export const navigation: NavigationItem[] = [
  { name: "Imkoniyatlar", href: "#features" },
  { name: "Qanday ishlaydi", href: "#how-it-works" },
  { name: "Mijozlar", href: "#testimonials" },
  { name: "Narxlar", href: "#pricing" },
];

export const features: Feature[] = [
  {
    title: "Vaqtni tejang",
    description: "Sertifikat yaratish vaqtini 90% ga qisqartiring. Ma'lumotlarni kiritishdan tortib tarqatishgacha bo'lgan jarayonni avtomatlashtiring.",
    icon: "Clock",
  },
  {
    title: "Onlayn tekshirish",
    description: "Har bir sertifikat noyob QR kod va tekshirish URL manzili bilan ta'minlanadi.",
    icon: "ShieldCheck",
  },
  {
    title: "Xavfsiz saqlash",
    description: "Barcha sertifikatlar yuqori darajadagi shifrlash va muntazam zaxiralash bilan bulutda saqlanadi.",
    icon: "Lock",
  },
  {
    title: "Ommaviy yaratish",
    description: "Yuzlab shaxsiylashtirilgan sertifikatlarni bir necha daqiqada yarating.",
    icon: "Layers",
  },
];

export const testimonials: Testimonial[] = [
  {
    content: "Bu platforma bizning bitiruvchilar sertifikatlarini boshqarish tizimini butunlay o'zgartirdi. Ilgari haftalar davom etadigan jarayon endi bir necha daqiqada amalga oshiriladi.",
    author: "Aziza Karimova",
    role: "O'quv ishlari bo'yicha prorektor",
    institution: "Toshkent Davlat Universiteti",
    imageUrl: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    content: "Xavfsizlik xususiyatlari va foydalanish qulayligi bu tizimni bizning sertifikatlash jarayonimiz uchun juda muhim qildi.",
    author: "Jamshid Rahimov",
    role: "Ta'lim markazi direktori",
    institution: "Progress Ta'lim Markazi",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    content: "Bizning muassasamiz yiliga 5000 dan ortiq sertifikat beradi. Bu platforma nafaqat ish jarayonimizni optimallashtirib qolmay, bitiruvchilarimizga ham yaxshi tajriba berdi.",
    author: "Nilufar Saidova",
    role: "Sertifikatlashtirish bo'limi boshlig'i",
    institution: "IT Park Academy",
    imageUrl: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const partners: Partner[] = [
  { name: "IT Park", logoUrl: "https://images.pexels.com/photos/15213228/pexels-photo-15213228/free-photo-of-logo-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Digital City", logoUrl: "https://images.pexels.com/photos/15213226/pexels-photo-15213226/free-photo-of-logo-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Astrum IT Academy", logoUrl: "https://images.pexels.com/photos/15213229/pexels-photo-15213229/free-photo-of-logo-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "PDP Academy", logoUrl: "https://images.pexels.com/photos/15213227/pexels-photo-15213227/free-photo-of-logo-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=800" },
];