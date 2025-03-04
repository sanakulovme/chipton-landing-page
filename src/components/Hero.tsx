// import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { RocketIcon } from "@radix-ui/react-icons";
import { LightingIcon } from './Icons';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Chipton
            </span>{" "}
            siz
          </h1>{" "}
            uchun{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Raqamli
            </span>{" "}
            texnalogiya
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          🎓 O‘quv markazlari uchun CRM – talabalar, kurslar va to‘lovlarni boshqarish osonroq! 🚀
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="/sign-up"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            <span className='mr-2'>Ro'yxatdan o'ting</span>
            <LightingIcon />
          </a>

          <a
            rel="noreferrer noopener"
            href="https://demo.agron.uz/login"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <span className='mr-2'>Demo foydalanish</span>
            <RocketIcon />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
