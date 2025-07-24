import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  // Handle sticky header and logo change
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Toggle navbar for mobile
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close navbar on link click
  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  // Toggle submenu
  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  // Handle theme toggle
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  // Determine logo source
  const logoSrc =
    !isDarkMode && isSticky
      ? "../assets/images/logo/logo.svg"
      : "../assets/images/logo/logo-white.svg";

  const navBars = [
    { href: "#about", label: "Tizim" },
    { href: "#features", label: "Qulayliklar" },
    { href: "#pricing", label: "Narx" },
    { href: "#faq", label: "Savollar" },
    { href: "#contact", label: "Bog'lanish" },
  ];

  const dropDownBars = [
    { href: "about.html", label: "About Page" },
    { href: "pricing.html", label: "Pricing Page" },
    { href: "contact.html", label: "Contact Page" },
    { href: "blog-grids.html", label: "Blog Grid Page" },
    {
      href: "blog-details.html",
      label: "Blog Details Page",
    },
    { href: "signup.html", label: "Sign Up Page" },
    { href: "signin.html", label: "Sign In Page" },
    { href: "404.html", label: "404 Page" },
  ];
  return (
    <>
      {/* ====== Navbar Section Start */}
      <div
        className={`ud-header absolute left-0 top-0 z-40 flex w-full items-center ${
          isSticky ? "sticky bg-white dark:bg-dark-2" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="index.html" className="navbar-logo block w-full py-5">
                <img src={logoSrc} alt="logo" className="header-logo w-full" />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  onClick={toggleNavbar}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 ${
                    isNavOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="block lg:flex 2xl:ml-20">
                    {navBars.map((item) => (
                      <li key={item.href} className="group relative">
                        <a
                          href={item.href}
                          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                          onClick={closeNavbar}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                    {/* <li className="submenu-item group relative">
                      <a
                        href="#"
                        className="relative mx-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        onClick={toggleSubmenu}
                      >
                        Pages
                        <svg
                          className="ml-2 fill-current"
                          width={16}
                          height={20}
                          viewBox="0 0 16 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                        </svg>
                      </a>
                      <div
                        className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                          openSubmenu ? "block" : "hidden lg:opacity-0"
                        }`}
                      >
                        {dropDownBars.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                            onClick={closeNavbar}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <label
                  htmlFor="themeSwitcher"
                  className="inline-flex cursor-pointer items-center"
                  aria-label="themeSwitcher"
                >
                  <input
                    type="checkbox"
                    name="themeSwitcher"
                    id="themeSwitcher"
                    className="sr-only"
                    onChange={toggleTheme}
                    checked={isDarkMode}
                  />
                  <span className="block text-white dark:hidden">
                    <Moon />
                  </span>
                  <span className="hidden text-white dark:block">
                    <Sun />
                  </span>
                </label>
                <div className="hidden sm:flex">
                  <a
                    href="https://app.chipton.uz/login"
                    className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                    onClick={closeNavbar}
                  >
                    Kirish
                  </a>
                  <a
                    href="/signup"
                    target="_blank"
                    className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                    onClick={closeNavbar}
                  >
                    Ro'yxatdan o'tish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====== Navbar Section End */}
    </>
  );
};
