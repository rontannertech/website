import { About } from "@/components/layout/About";
import { Cta } from "@/components/layout/Cta";
import { FAQ } from "@/components/layout/FAQ";
import { Features } from "@/components/layout/Features";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { HowItWorks } from "@/components/layout/HowItWorks";
import { Navbar } from "@/components/layout/Navbar";
import { Newsletter } from "@/components/layout/Newsletter";
import { Pricing } from "@/components/layout/Pricing";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Services } from "@/components/layout/Services";
import { Sponsors } from "@/components/layout/Sponsors";
import { Team } from "@/components/layout/Team";
import { Testimonials } from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}
