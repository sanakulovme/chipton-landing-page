import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { navigation } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <GraduationCap className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>CertifyEdu</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className={`text-sm font-medium mr-4 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
            >
              Log in
            </a>
            <a
              href="#"
              className="block px-3 py-2 mt-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;