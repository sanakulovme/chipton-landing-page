// Icons
import { Clock, DollarSign, UserPlus } from 'lucide-react';
import Apps from "../icons/Apps";

export const Features = () => {
  return (
    <>
      {/* ====== Features Section Start */}
      <section id="features" className="pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <h2 className="mb-3 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Asosiy afzalliklar
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Ko‘plab CRM tizimlari mavjud, ammo bizning yechimimiz aynan o‘quv markazlari ehtiyojlari asosida ishlab chiqilgan — sodda, samarali va ishonchli.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div style={{ flexDirection: 'column' }} className="flex items-center text-center text-center wow fadeInUp group mb-12" data-wow-delay=".1s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                  <Clock className='text-white' size='37' />
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark">
                  Vaqtni tejang
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  Sertifikat yaratish vaqtini 90% ga qisqartiring. Ma'lumotlar bilan ishlash juda tez
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div style={{ flexDirection: 'column' }} className="flex items-center text-center wow fadeInUp group mb-12" data-wow-delay=".15s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                  <UserPlus size="35" color="#fff" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark">
                  Raqamli davomat
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  Talabalaringizning kunlik davomatini boshqarish, tahlil qilish va aniq haftalik, oylik statistika.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div style={{ flexDirection: 'column' }} className="flex items-center text-center wow fadeInUp group mb-12" data-wow-delay=".2s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                  <DollarSign size="37" color='#fff' />
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark">
                  Moliyaviy aniqlik
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  Har oyda moliyaviy hisobotlarni tahlil qilish va boshqarish. Foydaning kurslar miqyosida taqsimlash.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div style={{ flexDirection: 'column' }} className="flex items-center text-center wow fadeInUp group mb-12" data-wow-delay=".25s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                  <Apps />
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark">
                  Tartibli boshqaruv
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  Darslarni rejalashtirish, o'qituvchilar va talabalar haqidagi ma'lumotlarni oson boshqarish
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center">
              <button className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-90">
                Bepul Boshlash
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Features Section End */}

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-3 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">Sertifikatlarni Avtomatik Yaratish</h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Ta'lim CRM tizimi orqali kurslaringiz uchun sertifikatlarni avtomatik ravishda yarating. Bu sizga vaqtni tejashga va talabalaringizga sifatli sertifikatlar taqdim etishga yordam beradi.
              </p>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Afzalliklari</h3>  {/* text-black qo'shdim */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">  {/* bg-card-light ni bg-white ga, border-border-light ni border-gray-200 ga */}
                    <div className="flex items-center justify-center size-12 rounded-lg bg-blue-100 text-blue-600 mb-4">  {/* bg-primary/10 text-primary ni bg-blue-100 text-blue-600 ga */}
                      <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-black">Vaqtni tejash</h4>  {/* text-black qo'shdim */}
                    <p className="text-sm text-gray-700">Sertifikatlarni qo'lda yaratishga vaqt sarflamaysiz, tizim buni siz uchun qiladi.</p>  {/* text-muted-light ni text-gray-700 ga */}
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                      <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-black">Individuallik</h4>
                    <p className="text-sm text-gray-700">Har bir talaba uchun ismi va kurs ma'lumotlari bilan individual sertifikat.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                      <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-black">Qulaylik</h4>
                    <p className="text-sm text-gray-700">Sertifikatlar tizimda saqlanadi va istalgan vaqtda yuklab olish mumkin.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Ish jarayoni</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">  {/* bg-card-light ni bg-white ga, hover:border-border-light ni hover:border-gray-200 ga */}
                    <div className="flex items-center justify-center size-10 rounded-full bg-blue-600 text-white shrink-0 font-bold text-lg">1</div>  {/* bg-primary text-white ni bg-blue-600 text-white ga */}
                    <div>
                      <h4 className="font-semibold text-base text-black">Shablonni tanlash</h4>  {/* text-black qo'shdim */}
                      <p className="text-sm text-gray-700">Kursni yaratishda mavjud professional sertifikat shablonlaridan birini tanlaysiz.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                    <div className="flex items-center justify-center size-10 rounded-full bg-blue-600 text-white shrink-0 font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-semibold text-base text-black">Avtomatik yaratish</h4>
                      <p className="text-sm text-gray-700">Talaba kursni muvaffaqiyatli tugatgandan so'ng, sertifikat avtomatik yaratiladi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                    <div className="flex items-center justify-center size-10 rounded-full bg-blue-600 text-white shrink-0 font-bold text-lg">3</div>
                    <div>
                      <h4 className="font-semibold text-base text-black">Yuklab olish va ulashish</h4>
                      <p className="text-sm text-gray-700">Talaba o'z profilidan sertifikatni PDF formatida yuklab olishi yoki ijtimoiy tarmoqlarda ulashishi mumkin.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};