import type { Metadata } from "next";

import PromoLanding from "./PromoLanding";

export const metadata: Metadata = {
  title: "IQ 200 Promo",
  description: "Премиальный лендинг IQ 200 для аудита сайта, SEO и рекламы.",
};

export default function PromoPage() {
  return <PromoLanding />;
}
