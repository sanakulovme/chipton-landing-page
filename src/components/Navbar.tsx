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
      ? "/images/logo/favicon.png"
      : "/images/logo/favicon.png";

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
              <a href="/" className="navbar-logo block w-full py-5">
                <img style={{width: '50px'}} src={logoSrc} alt="logo" className="header-logo w-full" />
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
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6 ${
                    isNavOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="block lg:flex 2xl:ml-20">
                    {navBars.map((item) => (
                      <li key={item.href} className="group relative">
                        <a
                          href={item.href}
                          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                          onClick={closeNavbar}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
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
