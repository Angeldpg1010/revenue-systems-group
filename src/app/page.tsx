import ArchitectureSolution from "@/components/landing/ArchitectureSolution";
import BusinessModel from "@/components/landing/BusinessModel";
import Credibility from "@/components/landing/Credibility";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Method from "@/components/landing/Method";
import Problem from "@/components/landing/Problem";
import ProjectTypes from "@/components/landing/ProjectTypes";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <ArchitectureSolution />
        <ProjectTypes />
        <Method />
        <BusinessModel />
        <Credibility />
        <FinalCta />
      </main>
      <Footer />

      <a
        href="#contacto"
        aria-label="Reservar llamada (15 min)"
        className="fixed right-4 bottom-4 left-4 z-50 rounded-lg bg-[#13C4A3] px-5 py-3 text-center text-sm font-semibold text-[#0E2A47] shadow-lg transition hover:bg-[#0FB193] focus:ring-2 focus:ring-[#0E2A47] focus:outline-none md:hidden"
      >
        Reservar llamada (15 min)
      </a>
    </>
  );
}
