import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Linkedin from "../icons/linkedin";
import Shape1 from "../icons/Shape1";

export const Footer = () => {
  const d = new Date();

  return (
    <>
      {/* ====== Footer Section Start */}
      <footer className="wow relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <a
                  href="#"
                  className="mb-6 inline-block max-w-[160px]"
                >
                  <img
                    src="assets/images/logo/logo-white.svg"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="mb-8 max-w-[270px] text-base text-gray-7">
                  We create digital experiences for brands and companies by using
                  technology.
                </p>
                <div className="-mx-3 flex items-center">
                  <a
                    href="#"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="#"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="#"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Refund policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Our Products
                </h4>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      LineIcons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Ecommerce HTML
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      TailAdmin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      PlainAdmin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Latest blog
                </h4>
                <div className="flex flex-col gap-8">
                  <a
                    href="blog-details.html"
                    className="group flex items-center gap-[22px]"
                  >
                    <div className="overflow-hidden rounded">
                      <img
                        src="./assets/images/blog/blog-footer-01.jpg"
                        alt="blog"
                      />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      I think really important to design with...
                    </span>
                  </a>
                  <a
                    href="blog-details.html"
                    className="group flex items-center gap-[22px]"
                  >
                    <div className="overflow-hidden rounded">
                      <img
                        src="./assets/images/blog/blog-footer-02.jpg"
                        alt="blog"
                      />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      Recognizing the need is the primary...
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <div className="my-1">
                  <div className="-mx-3 flex items-center justify-center md:justify-start">
                    <a
                      href="#"
                      className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                    >
                      Privacy policy
                    </a>
                    <a
                      href="#"
                      className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                    >
                      Legal notice
                    </a>
                    <a
                      href="#"
                      className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                    >
                      Terms of service
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                <div className="my-1 flex justify-center md:justify-end">
                  <p className="text-base text-gray-7">
                    chipton.uz { d.getFullYear() }
                    {" "} | Barcha huquqlar himoyalangan
                    {/* <a
                      href="#"
                      rel="nofollow noopner"
                      target="_blank"
                      className="text-gray-1 hover:underline"
                    >
                      Target link
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <img src="assets/images/footer/shape-1.svg" alt="" />
          </span>
          <span className="absolute bottom-0 right-0 z-[-1]">
            <img src="assets/images/footer/shape-3.svg" alt="" />
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <Shape1 />
          </span>
        </div>
      </footer>
      {/* ====== Footer Section End */}
    </>

  );
};
