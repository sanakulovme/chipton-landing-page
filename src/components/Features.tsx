import React from 'react';
import { Clock, ShieldCheck, Lock, Layers } from 'lucide-react';
import { features } from '../constants';

const iconComponents = {
  Clock,
  ShieldCheck,
  Lock,
  Layers,
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage certificates
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform streamlines every aspect of certificate management from creation to verification.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
              return (
                <div key={index} className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="ml-16 text-lg font-medium text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-base text-gray-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;