import { About } from "../components/About";
import { Cta } from "../components/Cta";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { BackToTop } from "../components/BackToTop";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Brands } from "../components/Brands";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/*<Brands />*/}
      <About />
      <Cta />
      <Pricing />
      {/*<Testimonials />*/}
      <FAQ />
      {/*<Team />*/}
      <Contact />
      {/* <BackToTop /> */}
    </>
  );
}

export default Home;
