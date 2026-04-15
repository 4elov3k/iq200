"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
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
import { LeadPopup } from "./components/LeadPopup";
import { MobileMenu } from "./components/MobileMenu";

const b2bPromoTheme = {
  "--brand-bg": "#f6f0e8",
  "--brand-surface": "rgba(255,255,255,0.74)",
  "--brand-surface-strong": "#fffaf3",
  "--brand-border": "rgba(165,126,69,0.18)",
  "--brand-title": "#2f2215",
  "--brand-text": "rgba(61,45,26,0.8)",
  "--brand-accent": "#97c32c",
  "--brand-accent-hover": "#63811a",
  "--brand-accent-soft": "#e1efbf",
  "--brand-gradient-start": "#97c32c",
  "--brand-gradient-mid": "#b8d86e",
  "--brand-gradient-end": "#e1efbf",
} as CSSProperties;

function buildWideRibbonPaths({
  count,
  startY,
  step,
  morph,
  tilt = 0,
}: {
  count: number;
  startY: number;
  step: number;
  morph: number;
  tilt?: number;
}) {
  return Array.from({ length: count }, (_, index) => {
    const offset = index * step;

    return `M ${-220 + offset * 0.28} ${startY - index * 5 + morph * 0.42}
      C ${180 + offset * 0.44} ${startY + 116 - index * 8 + morph * 1.04 + tilt},
        ${560 + offset * 0.3} ${startY - 168 + index * 10 - morph * 1.18},
        ${920 + offset * 0.22} ${startY + 26 + index * 4 + morph * 0.82}
      S ${1380 + offset * 0.12} ${startY + 148 - index * 7 + morph * 0.94 - tilt},
        ${1880 + offset * 0.08} ${startY - 42 + index * 3 + morph * 0.54}`;
  });
}

function buildTallRibbonPaths({
  count,
  startX,
  step,
  morph,
}: {
  count: number;
  startX: number;
  step: number;
  morph: number;
}) {
  return Array.from({ length: count }, (_, index) => {
    const offset = index * step;

    return `M ${startX + index * 5 - morph * 0.45} ${-220 + offset}
      C ${startX - 92 - index * 4 + morph * 0.22} ${56 + offset * 0.42 + morph * 0.64},
        ${startX + 118 + index * 3 - morph * 0.74} ${282 + offset * 0.72 - morph * 0.54},
        ${startX - 48 + index * 1.1 + morph * 0.24} ${548 + offset * 0.92 + morph * 0.9}
      S ${startX - 148 - index * 2.2 - morph * 0.32} ${862 + offset * 1.02 + morph * 1.08},
        ${startX + 34 + index * 0.8 + morph * 0.18} ${1168 + offset * 1.08 + morph * 1.22}`;
  });
}

function B2BInteractiveBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizedScroll = Math.min(scrollY / 1200, 1.35);
  const morphA = normalizedScroll * 26;
  const morphB = normalizedScroll * 34;
  const morphC = normalizedScroll * 30;
  const morphD = normalizedScroll * 38;
  const morphE = normalizedScroll * 32;
  const morphF = normalizedScroll * 36;

  const bundleA = buildWideRibbonPaths({ count: 16, startY: 128, step: 20, morph: morphA, tilt: 14 });
  const bundleB = buildWideRibbonPaths({ count: 15, startY: 248, step: 22, morph: morphB, tilt: -10 });
  const bundleC = buildWideRibbonPaths({ count: 14, startY: 364, step: 24, morph: morphC, tilt: 18 });
  const bundleD = buildWideRibbonPaths({ count: 14, startY: 188, step: 21, morph: morphD, tilt: -18 });
  const bundleE = buildTallRibbonPaths({ count: 15, startX: 282, step: 22, morph: morphE });
  const bundleF = buildTallRibbonPaths({ count: 15, startX: 198, step: 21, morph: morphF });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,187,128,0.18),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#f8f2ea_34%,#f3ebdf_72%,#eee3d3_100%)]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,163,98,0.14),transparent_58%)] blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(183,137,70,0.1),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_12%,rgba(225,239,191,0.24),transparent_18%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.76),transparent_18%),radial-gradient(circle_at_50%_68%,rgba(225,239,191,0.18),transparent_24%)]" />

      <svg
        className="absolute left-[-10%] top-[-3%] h-[22rem] w-[124vw] opacity-64 transition-transform duration-500 ease-out animate-[floatPromoA_17s_ease-in-out_infinite]"
        viewBox="0 0 1920 420"
        fill="none"
        style={{ transform: `translate3d(${scrollY * 0.03}px, ${Math.min(scrollY * 0.22, 320)}px, 0)` }}
      >
        {bundleA.map((path, index) => (
          <path key={path} d={path} stroke={index % 2 === 0 ? "rgba(151,195,44,0.28)" : "rgba(255,255,255,0.7)"} strokeWidth="1.05" strokeLinecap="round" />
        ))}
      </svg>

      <svg
        className="absolute left-[-6%] top-[14%] h-[22rem] w-[120vw] opacity-52 transition-transform duration-500 ease-out animate-[floatPromoC_19s_ease-in-out_infinite]"
        viewBox="0 0 1920 440"
        fill="none"
        style={{ transform: `translate3d(${scrollY * -0.018}px, ${Math.min(scrollY * 0.3, 420)}px, 0)` }}
      >
        {bundleB.map((path, index) => (
          <path key={path} d={path} stroke={index % 3 === 0 ? "rgba(151,195,44,0.2)" : "rgba(255,255,255,0.56)"} strokeWidth="1" strokeLinecap="round" />
        ))}
      </svg>

      <svg
        className="absolute right-[-9%] top-[32%] h-[24rem] w-[122vw] opacity-48 transition-transform duration-500 ease-out animate-[floatPromoA_21s_ease-in-out_infinite]"
        viewBox="0 0 1920 460"
        fill="none"
        style={{ transform: `translate3d(${scrollY * 0.024}px, ${Math.min(scrollY * 0.38, 540)}px, 0)` }}
      >
        {bundleC.map((path, index) => (
          <path key={path} d={path} stroke={index % 2 === 0 ? "rgba(151,195,44,0.18)" : "rgba(255,255,255,0.48)"} strokeWidth="0.95" strokeLinecap="round" />
        ))}
      </svg>

      <svg
        className="absolute left-[-8%] top-[56%] h-[24rem] w-[126vw] opacity-46 transition-transform duration-500 ease-out animate-[floatPromoC_23s_ease-in-out_infinite]"
        viewBox="0 0 1920 460"
        fill="none"
        style={{ transform: `translate3d(${scrollY * -0.02}px, ${Math.min(scrollY * 0.44, 620)}px, 0)` }}
      >
        {bundleD.map((path, index) => (
          <path key={path} d={path} stroke={index % 3 === 1 ? "rgba(151,195,44,0.22)" : "rgba(255,255,255,0.44)"} strokeWidth="0.95" strokeLinecap="round" />
        ))}
      </svg>

      <svg
        className="absolute left-[-4%] top-[6%] h-[74rem] w-[28rem] opacity-42 transition-transform duration-500 ease-out animate-[floatPromoB_20s_ease-in-out_infinite]"
        viewBox="0 0 420 1280"
        fill="none"
        style={{ transform: `translate3d(${scrollY * 0.014}px, ${Math.min(scrollY * 0.34, 520)}px, 0)` }}
      >
        {bundleE.map((path, index) => (
          <path key={path} d={path} stroke={index % 2 === 0 ? "rgba(151,195,44,0.18)" : "rgba(255,255,255,0.4)"} strokeWidth="0.95" strokeLinecap="round" />
        ))}
      </svg>

      <svg
        className="absolute right-[-3%] top-[18%] h-[76rem] w-[30rem] opacity-38 transition-transform duration-500 ease-out animate-[floatPromoB_24s_ease-in-out_infinite]"
        viewBox="0 0 420 1280"
        fill="none"
        style={{ transform: `translate3d(${scrollY * -0.016}px, ${Math.min(scrollY * 0.4, 580)}px, 0)` }}
      >
        {bundleF.map((path, index) => (
          <path key={path} d={path} stroke={index % 2 === 0 ? "rgba(151,195,44,0.16)" : "rgba(255,255,255,0.34)"} strokeWidth="0.9" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadPopupOpen, setLeadPopupOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[var(--brand-bg)] text-[var(--brand-text)]" style={b2bPromoTheme}>
      <B2BInteractiveBackground />

      <div className="relative z-10">
        <Hero onMenuToggle={() => setMenuOpen(true)} onOpenLeadForm={() => setLeadPopupOpen(true)} />
        <TargetAudience />
        <Problems onOpenLeadForm={() => setLeadPopupOpen(true)} />
        <Services onOpenLeadForm={() => setLeadPopupOpen(true)} />
        <Cases />
        <Process />
        <AuditBenefits onOpenLeadForm={() => setLeadPopupOpen(true)} />
        <Reviews />
        <FAQ />
        <FinalCTA onOpenLeadForm={() => setLeadPopupOpen(true)} />
        <Footer />
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenLeadForm={() => {
          setMenuOpen(false);
          setLeadPopupOpen(true);
        }}
      />
      <LeadPopup open={leadPopupOpen} onOpenChange={setLeadPopupOpen} />
    </div>
  );
}
