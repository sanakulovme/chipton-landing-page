import React from 'react';
import { partners } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Trusted By</h2>
          <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
            Leading Educational Institutions
          </p>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner, index) => (
              <div key={index} className="col-span-1 flex justify-center items-center bg-gray-700 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-600">
                <img
                  className="h-12 filter brightness-0 invert"
                  src={partner.logoUrl}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-base text-gray-300">
            Join over 200+ educational institutions that trust our platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;