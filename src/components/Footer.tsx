import React from 'react';
import { GraduationCap, Twitter, Linkedin, Mail, Globe, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">CertifyEdu</span>
            </div>
            <p className="text-gray-400 text-base">
              Automating certificate creation and verification for educational institutions worldwide.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Certificate Creation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Online Verification
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Batch Processing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Digital Signatures
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-blue-300 transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} CertifyEdu, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;