import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
      <div className="absolute inset-0">
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-blue-400" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
        </svg>
      </div>
      
      <div className="relative z-10 pt-28 pb-32 sm:pb-40">
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">🎓 O'quv markazingiz uchun to'liq avtomatlashtirilgan </span>
              <span className="block text-blue-200">CRM tizimi</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Talabalarni ro'yxatga olishdan tortib, dars jadvaligacha, to'lov nazoratidan sertifikatgacha — barchasi bitta platformada.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                >
                  Hozir boshlang
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="absolute bottom-[-100px] left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;