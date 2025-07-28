
export const Pricing = () => {
  return (
    <>
      {/* ====== Pricing Section Start */}
      <section id="pricing" className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Tarif rejalari
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  O‘quv markazlari uchun qulay tariflar
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Biz sizning ta’lim tizimingiz uchun moslashuvchan va foydali narx rejalarini taklif qilamiz. Har bir tarif o‘quv jarayonlarini avtomatlashtirishga yordam beradi.
                </p>
              </div>
            </div>
          </div>

          {/* Tarif kartalari */}
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Starter */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
                  Boshlang‘ich
                </span>
                <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                  <span className="-ml-1 -tracking-[2px]">99.000</span>
                  <span className="text-xl font-medium">so'm</span>
                  <span className="text-base font-normal text-body-color dark:text-dark-6">
                    / oyiga
                  </span>
                </h2>
                <div className="mb-[50px]">
                  <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                    Imkoniyatlar
                  </h5>
                  <div className="flex flex-col gap-[14px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      1 ta foydalanuvchigacha
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Barcha interfeys komponentlari
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Umrbod foydalanish
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Bepul yangilanishlar
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                >
                  Xarid qilish
                </a>
              </div>
            </div>

            {/* Basic */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                <p style={{top: '0', right: '0'}} className="absolute inline-block -rotate-180 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                  Tavsiya etiladi
                </p>
                <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
                  Asosiy
                </span>
                <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                  <span className="-ml-1 -tracking-[2px]">299.000</span>
                  <span className="text-xl font-medium">so'm</span>
                  <span className="text-base font-normal text-body-color dark:text-dark-6">
                    / oyiga
                  </span>
                </h2>
                <div className="mb-[50px]">
                  <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                    Imkoniyatlar
                  </h5>
                  <div className="flex flex-col gap-[14px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      1 ta foydalanuvchigacha
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Barcha interfeys komponentlari
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Umrbod foydalanish
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Bepul yangilanishlar
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                >
                  Xarid qilish
                </a>
              </div>
            </div>

            {/* Premium */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
                  Premium
                </span>
                <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                  <span className="-ml-1 -tracking-[2px]">499.000</span>
                  <span className="text-xl font-medium">so'm</span>
                  <span className="text-base font-normal text-body-color dark:text-dark-6">
                    / oyiga
                  </span>
                </h2>
                <div className="mb-[50px]">
                  <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                    Imkoniyatlar
                  </h5>
                  <div className="flex flex-col gap-[14px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      1 ta foydalanuvchigacha
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Barcha interfeys komponentlari
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Umrbod foydalanish
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Bepul yangilanishlar
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                >
                  Xarid qilish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Pricing Section End */}
    </>

  );
};
