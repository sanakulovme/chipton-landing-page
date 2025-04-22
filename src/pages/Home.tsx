import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Dashboard from '../components/Dashboard';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Partners />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;