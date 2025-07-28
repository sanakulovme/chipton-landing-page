import FaqVector1 from "../icons/FaqVector1";
import FaqIcon from "../icons/FaqIcon";
import FaqVector2 from "../icons/FaqVector2";
export const FAQ = () => {
  return (
    <>
      {/* ====== FAQ Section Start */}
      <section id="faq" className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Savollar
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Sizni qiziqtirayotgan savollar bormi?
                </h2>
                <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                  Quyida ta’lim markazingiz uchun CRM tizimimiz bo‘yicha eng ko‘p beriladigan savollarga javoblarni topishingiz mumkin.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <FaqIcon />
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    CRM tizimi hujjatlanganmi?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Ha, bizning CRM tizimimiz to‘liq hujjatlar bilan ta’minlangan. Yordam bo‘limi va video darsliklar orqali barcha funksiyalarni o‘rganishingiz mumkin.
                  </p>
                </div>
              </div>

              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <FaqIcon />
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Dars jadvalini boshqarish imkoni bormi?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Albatta, siz guruhlar, dars vaqtlari, o‘qituvchilarni CRM orqali qulay tarzda boshqarishingiz mumkin.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <FaqIcon />
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Davomatni qanday yuritaman?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    O‘qituvchilar dars davomida CRM orqali davomatni real vaqt rejimida belgilashlari mumkin. Statistikalar avtomatik tarzda shakllantiriladi.
                  </p>
                </div>
              </div>

              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <FaqIcon />
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    CRM tizimda hisobotlar mavjudmi?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Ha, tizim orqali o‘quvchilar, davomat, to‘lovlar va o‘qituvchilar faoliyati bo‘yicha to‘liq hisobotlar olish imkoniyati mavjud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-4 top-4 -z-[1]">
            <FaqVector1 />
          </span>
          <span className="absolute bottom-4 right-4 -z-[1]">
            <FaqVector2 />
          </span>
        </div>
      </section>
      {/* ====== FAQ Section End */}
    </>

  );
};
