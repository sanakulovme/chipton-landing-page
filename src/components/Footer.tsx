import Telegram from "../icons/Telegram";
import Shape1 from "../icons/Shape1";
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <>
      {/* ====== Footer Section Start */}
      <footer className="wow relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="w-full mb-10">
                <a href="#" className="mb-6 flex justify-center items-center gap-3 max-w-[160px]">
                  <img
                    src="/images/logo/favicon.png"
                    width='35px'
                    alt="logo"
                    className="max-w-full"
                  />
                  <span className='text-xl text-white'>chipton.uz</span>
                </a>
                <p className="mb-8 max-w-[270px] text-base text-gray-7">
                  O‘quv markazlari uchun avtomatlashtirilgan CRM tizimi.
                </p>
                <div className="flex items-center -mx-3">
                  <a href="#" className="px-3 text-gray-7 hover:text-white">
                    <Telegram />
                  </a>
                  <a href="#" className="px-3 text-gray-7 hover:text-white">
                    <Instagram />
                  </a>
                  <a href="#" className="px-3 text-gray-7 hover:text-white">
                    <Facebook />
                  </a>
                  <a href="#" className="px-3 text-gray-7 hover:text-white">
                    <Youtube />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold text-white mb-9">Sahifalar</h4>
                <ul>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Bosh sahifa
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Qulayliklar
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Savollar
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Narxlar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold text-white mb-9">Xizmatlar</h4>
                <ul>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Raqamli davomat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Tartibli boshqaruv
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Online sertifikatlash
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Moliyaviy aniqlik
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold text-white mb-9">Mahsulotlarimiz</h4>
                <ul>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      LineIcons
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      Ecommerce HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      TailAdmin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block mb-3 text-base text-gray-7 hover:text-primary">
                      PlainAdmin
                    </a>
                  </li>
                </ul>
              </div>
            </div>*/}
            <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold text-white mb-9">So‘nggi maqolalar</h4>
                <div className="flex flex-col gap-8">
                  <a href="blog-details.html" className="group flex items-center gap-[22px]">
                    <div className="overflow-hidden rounded">
                      <img src="/images/blog/blog-footer-01.jpg" alt="blog" />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      Dizayn qilishda e’tiborli bo‘lish muhim...
                    </span>
                  </a>
                  <a href="blog-details.html" className="group flex items-center gap-[22px]">
                    <div className="overflow-hidden rounded">
                      <img src="/images/blog/blog-footer-02.jpg" alt="blog" />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      Zaruratni anglash – bu birinchi qadam...
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <div className="my-1">
                  <div className="flex items-center justify-center -mx-3 md:justify-start">
                    <a href="#" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                      Maxfiylik siyosati
                    </a>
                    <a href="#" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                      Yuridik ma’lumot
                    </a>
                    <a href="#" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                      Foydalanish shartlari
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                <div className="flex justify-center my-1 md:justify-end">
                  <p className="text-base text-gray-7">
                    &copy; chipton.uz {new Date().getFullYear()} | Barcha huquqlar himoyalangan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <img src="/images/footer/shape-1.svg" alt="" />
          </span>
          <span className="absolute bottom-0 right-0 z-[-1]">
            <img src="/images/footer/shape-3.svg" alt="" />
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

export default Footer;
