import Vector1 from "../icons/Vector1";
import Vector2 from "../icons/Vector2";
import Vector3 from "../icons/Vector3";


export const About = () => {
  return (
    <>
      {/* ====== About Section Start */}
      <section
        id="about"
        className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
      >
        <div className="container">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                    Zamonaviy ta'lim CRM tizimini yaratish uchun qulay platforma
                  </h2>
                  <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                    Bizning asosiy maqsadimiz — o‘qituvchilar va ta’lim markazlari uchun
                    o‘quv jarayonini raqamli boshqarishni sodda va samarali qilishdir.
                    CRM tizimimiz yordamida siz guruhlar, darslar, o‘quvchilar va to‘lovlarni
                    oson boshqarishingiz mumkin.
                    <br />
                    <br />
                    Interaktiv panel va statistik tahlillar orqali siz
                    ta’lim jarayonini real vaqtda kuzatishingiz, natijalarni tahlil qilishingiz va
                    o‘z markazingizni rivojlantirishingiz mumkin.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                  >
                    Batafsil maʼlumot
                  </a>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                      <img
                        src="/images/about/about-image-01.jpg"
                        alt="tizim haqida rasm"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                      <img
                        src="/images/about/about-image-02.jpg"
                        alt="tizim haqida rasm"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                      <div>
                        <span className="block text-5xl font-extrabold text-white">
                          09
                        </span>
                        <span className="block text-base font-semibold text-white">
                          Yillik tajriba
                        </span>
                        <span className="block text-base font-medium text-white text-opacity-70">
                          Ta’lim texnologiyalarida
                        </span>
                      </div>
                      <div>
                        <span className="absolute left-0 top-0 -z-10">
                          <Vector3 />
                        </span>
                        <span className="absolute right-0 top-0 -z-10">
                          <Vector1 />
                        </span>
                        <span className="absolute bottom-0 right-0 -z-10">
                          <Vector2 />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== About Section End */}
    </>

  );
};
