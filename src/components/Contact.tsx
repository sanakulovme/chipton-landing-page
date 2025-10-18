import { Auth } from "../server/auth";
import { useState } from "react";

type FormData = {
  name?: string;
  phone?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setError(null);
    setSuccess(false);
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlevalidate = () => {
    if(!formData.name || !formData.phone || !formData.message) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return false;
    }
    return true;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!handlevalidate()) return;

    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await Auth.newLead(formData);
      setFormData({ name: "", phone: "", message: "" });
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError("Xabar yuborishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      {/* ====== Contact Start ====== */}
      <section id="contact" className="relative py-20 md:py-[120px]">
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark" />
        <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2" />
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="mb-6 block text-base font-medium text-dark">
                    BOG‘LANISH
                  </span>
                  <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark">
                    Muammolaringiz haqida suhbatlashamiz.
                  </h2>
                </div>
                <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      {/* joylashuv ikonkasi */}
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark">
                        Bizning manzil
                      </h5>
                      <p className="text-base text-body-color">
                        O'zbekiston, Samarqand tumani, Husayn Boyqoro ko'chasi 95-uy (Seliskiy)
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      {/* email ikonkasi */}
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark">
                        Qanday yordam bera olamiz?
                      </h5>
                      <p className="text-base text-body-color">
                        <a href="tel:+998770801563">+998 77 080 15 63</a>
                      </p>
                      <p className="mt-1 text-base text-body-color">
                        <a href="https://t.me/sanakulovme">@sanakulovme</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div
                className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
                data-wow-delay=".2s"
              >
                <h3 className="mb-8 text-2xl font-semibold text-dark md:text-[28px] md:leading-[1.42]">
                  Xabar yuboring
                </h3>

                {success && (
                  <div className="mb-5 rounded-xl bg-green-100 p-4 text-base text-green-700">
                    Xabaringiz muvaffaqiyatli yuborildi!
                  </div>
                )}
                {error && (
                  <div className="mb-5 rounded-xl bg-red-100 p-4 text-base text-red-700">
                    {error || "Xabar yuborishda xatolik yuz berdi."}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-[22px]">
                    <label
                      htmlFor="fullName"
                      className="mb-4 block text-sm text-body-color"
                    >
                      To‘liq ismingiz*
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Masalan: Aziz Eshonov"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3"
                    />
                  </div>
                  <div className="mb-[22px]">
                    <label
                      htmlFor="phone"
                      className="mb-4 block text-sm text-body-color"
                    >
                      Telefon raqam*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3"
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="message"
                      className="mb-4 block text-sm text-body-color"
                    >
                      Xabaringiz*
                    </label>
                    <textarea
                      name="message"
                      rows={1}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Xabaringizni shu yerga yozing..."
                      className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-0">
                    <button
                      disabled={loading}
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                    >
                      Yuborish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Contact End ====== */}
    </>
  );
};
