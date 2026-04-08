import { useState } from "react";
import { Hero } from "./components/Hero";
import { TargetAudience } from "./components/TargetAudience";
import { Problems } from "./components/Problems";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { Process } from "./components/Process";
import { AuditBenefits } from "./components/AuditBenefits";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-[var(--brand-bg)] min-h-screen w-full overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[20%] top-[10%] w-[500px] h-[500px] bg-gradient-to-b from-[rgba(151,195,44,0.28)] to-[rgba(225,239,191,0.12)] rounded-full blur-[150px] rotate-[-52deg]" />
        <div className="absolute right-[-10%] top-[5%] w-[500px] h-[500px] bg-gradient-to-b from-[rgba(136,85,243,0.22)] to-[rgba(238,142,209,0.12)] rounded-full blur-[150px] rotate-45" />
        <div className="absolute left-[10%] bottom-[20%] w-[400px] h-[400px] bg-gradient-to-b from-[rgba(151,195,44,0.24)] to-[rgba(104,129,26,0.1)] rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero onMenuToggle={() => setMenuOpen(true)} />
        <TargetAudience />
        <Problems />
        <Services />
        <Cases />
        <Process />
        <AuditBenefits />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
