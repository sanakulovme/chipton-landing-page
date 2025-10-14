import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-background-light/10 dark:border-background-dark/10 px-10 py-3">
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold">Ta'lim CRM</h2>
      </div>
      <nav className="hidden md:flex flex-1 justify-center gap-8">
        <a className="text-sm font-medium hover:text-primary" href="#">Asosiy</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Xususiyatlar</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Narxlar</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Blog</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Aloqa</a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide transition-colors hover:bg-primary/90">
          <span className="truncate">Kirish</span>
        </button>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/20 text-primary text-sm font-bold tracking-wide transition-colors hover:bg-primary/30">
          <span className="truncate">Ro'yxatdan o'tish</span>
        </button>
      </div>
    </header>
  );
};

export default Header;