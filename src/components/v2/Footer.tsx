import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <a className="text-sm text-black/60 dark:text-white/60 hover:text-primary" href="#">Asosiy</a>
          <a className="text-sm text-black/60 dark:text-white/60 hover:text-primary" href="#">Xususiyatlar</a>
          <a className="text-sm text-black/60 dark:text-white/60 hover:text-primary" href="#">Narxlar</a>
          <a className="text-sm text-black/60 dark:text-white/60 hover:text-primary" href="#">Blog</a>
          <a className="text-sm text-black/60 dark:text-white/60 hover:text-primary" href="#">Aloqa</a>
        </div>
        <p className="text-sm text-black/60 dark:text-white/60">© 2024 Ta'lim CRM. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;