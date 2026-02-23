import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Includes from "@/components/landing/Includes";
import Results from "@/components/landing/Results";
import Process from "@/components/landing/Process";
import Qualification from "@/components/landing/Qualification";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white text-[#0E2A47]">
        <Hero />
        <Problem />
        <Solution />
        <Includes />
        <Results />
        <Process />
        <Qualification />
        <FinalCta />
        <Footer />
      </div>

      <a
        href="#diagnostico"
        aria-label="Reservar diagnostico"
        className="fixed right-4 bottom-4 left-4 z-50 rounded-lg bg-[#00B8F5] px-5 py-3 text-center text-sm font-semibold text-[#0A1B2E] shadow-lg transition hover:bg-[#20C6FC] focus:ring-2 focus:ring-[#0E2A47] focus:outline-none md:hidden"
      >
        Reservar diagnostico
      </a>
    </>
  );
}
