import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Hear from our users
          </p>
          <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
            Discover how our platform is transforming certificate management at institutions worldwide.
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto lg:max-w-4xl relative">
          <div className="relative bg-white p-10 rounded-2xl shadow-xl overflow-hidden">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-blue-100" />
            
            <div className="relative z-10">
              <div className="min-h-[200px] flex flex-col justify-between">
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonials[currentIndex].imageUrl}
                    alt={testimonials[currentIndex].author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonials[currentIndex].author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].institution}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 mb-4 mr-4 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="absolute -z-10 inset-0 transform -translate-x-6 -translate-y-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl"></div>
          </div>
          
          <div className="absolute -z-10 inset-0 transform translate-x-6 translate-y-6">
            <div className="absolute inset-0 bg-gradient-to-l from-purple-50 to-purple-100 rounded-2xl"></div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;