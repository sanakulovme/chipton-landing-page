import React from 'react';
import { Check } from 'lucide-react';
import dashboardImage from '../assets/growth-DZ7EdHJS-removebg-preview.png';

const Dashboard: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:max-w-lg lg:self-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Powerful Dashboard</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              One platform to manage it all
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Our intuitive dashboard gives you complete control over your certificate management process, 
              from template design to recipient tracking.
            </p>
            
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Beautiful Templates</h4>
                  <p className="mt-1 text-gray-500">
                    Choose from dozens of professionally designed templates or create your own.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Bulk Generation</h4>
                  <p className="mt-1 text-gray-500">
                    Import recipient data and generate hundreds of certificates in seconds.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Analytics & Tracking</h4>
                  <p className="mt-1 text-gray-500">
                    Monitor verification rates and recipient engagement with detailed analytics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Features
              </a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative">
            <div className="relative mx-auto w-full rounded-lg  overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full  from-purple-600 to-blue-500 opacity-10"></div>
              </div>
              <img
                className="relative z-10 rounded-lg transform transition-all duration-500 hover:scale-105"
                src={dashboardImage}
                alt="Certificate dashboard interface"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 text-blue-200 transform rotate-45">
              <svg className="w-64 h-64 opacity-20" fill="currentColor" viewBox="0 0 200 200">
                <path d="M44.3,-76.4C58.4,-70.1,71.8,-60.1,79.4,-46.4C87,-32.7,88.8,-15.4,88.4,1.8C88,19,85.5,38,76.3,53.1C67.1,68.3,51.3,79.5,34.4,84.3C17.5,89.1,-0.4,87.5,-17.2,82.6C-34,77.7,-49.5,69.5,-62.3,57.2C-75.1,44.9,-85.1,28.5,-87.7,10.8C-90.3,-6.9,-85.5,-26,-75.9,-41.2C-66.2,-56.4,-51.7,-67.8,-36.5,-73.8C-21.3,-79.8,-5.4,-80.5,8.8,-79.3C22.9,-78.1,30.2,-82.7,44.3,-76.4Z" />
              </svg>
            </div>
            <div className="absolute -bottom-8 -left-8 text-purple-100">
              <svg className="w-48 h-48 opacity-30" fill="currentColor" viewBox="0 0 200 200">
                <path d="M38.5,-65.1C50.9,-57.3,62.5,-47.6,71.8,-34.8C81.1,-22,88.1,-6.1,85.9,8.4C83.7,22.9,72.3,36,60.1,46.5C47.9,56.9,35,64.7,21,69.9C7,75,-8,77.5,-24,75.9C-40,74.2,-57.1,68.5,-67.1,56.5C-77.1,44.6,-80.1,26.5,-81.7,8.2C-83.3,-10.1,-83.5,-28.5,-75.3,-42.8C-67.1,-57.1,-50.4,-67.3,-34.6,-73.1C-18.7,-78.9,-3.7,-80.4,9.2,-75.4C22.1,-70.5,26.1,-73,38.5,-65.1Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;