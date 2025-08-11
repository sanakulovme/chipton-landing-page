import React from 'react';
import { Star, UserPlus, DollarSign, Zap } from 'lucide-react';

const Banner = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: "Moliyaviy aniqlik",
      description: "Har oyda moliyaviy hisobotlarni tahlil qilish va boshqarish."
    },
    {
      icon: <UserPlus className="w-6 h-6 text-purple-400" />,
      title: "Raqamli davomat",
      description: "Talabalaringizning kunlik davomatini boshqarish va tahlil qilish."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Vaqtni tejang",
      description: "Sertifikat yaratish vaqtini 90% ga qisqartiring."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "This platform has transformed how we work. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Developer",
      content: "Intuitive design and powerful features. Love using it daily.",
      rating: 5
    }
  ];

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center p-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            Hey! chipton ga
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Xush kelibsiz
            </span>
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
          Ish jarayonini soddalashtirish va samaradorlikni oshirish uchun platformamizga ishonadigan minglab mutaxassislarga qo'shiling.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="flex-shrink-0 p-2 bg-white bg-opacity-20 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/*<div className="space-y-4">
          <h3 className="text-white font-semibold text-lg mb-4">What our users say</h3>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20"
            >
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 text-sm mb-3 italic">"{testimonial.content}"</p>
              <div>
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-blue-200 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>*/}

        {/* Stats */}
        {/*<div className="mt-12 grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-blue-200 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-blue-200 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-blue-200 text-sm">Support</div>
          </div>
        </div>*/}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400 bg-opacity-20 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full blur-lg" />
    </div>
  );
};

export default Banner;