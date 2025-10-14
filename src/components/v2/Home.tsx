import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Interface from './Interface';
import Benefits from './Benefits';
import CTA from './CTA';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';

function Home() {
  return (
    <div className="font-sans bg-white text-black">  {/* Faqat white theme: bg-white, text-black */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <Header />
          <main className="flex flex-1 justify-center px-4 sm:px-10 py-5">
            <div className="flex max-w-6xl flex-1 flex-col">
              <Hero />
              <Features />
              <Interface />
              <Benefits />
              <CTA />
              <Pricing />
              <Testimonials />
              <FAQ />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;