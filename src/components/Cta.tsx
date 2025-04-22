import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from '../assets/reflecting-tA1rdXzJ.png';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Ready to modernize your</span>
                <span className="block text-blue-600">certificate process?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Start with a 14-day free trial. No credit card required. 
                See how our platform can transform your certification workflow.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
          <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={Image}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;