import { useState } from "react";
import { Check } from "lucide-react";
import { submitLead } from "../lib/lead";
import { formatPhoneInput, isValidRussianMobilePhone, phonePattern, phoneTitle } from "../lib/phone";

interface AuditBenefitsProps {
  onOpenLeadForm: () => void;
}

export function AuditBenefits({ onOpenLeadForm }: AuditBenefitsProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const benefits = [
    { text: "Краткий разбор сайта с точки зрения B2B-продаж", icon: "/iq200/group-6196-10.png" },
    { text: "Оценка структуры под SEO и коммерческие запросы", icon: "/iq200/group-6196-19.png" },
    { text: "Оценка текущей рекламы, если она уже есть", icon: "/iq200/group-6196-25.png" },
    { text: "3–5 точек роста", icon: "/iq200/group-6197-3-2.png" },
    { text: "Рекомендации, с чего начать в первую очередь", icon: "/iq200/gtxb-ujhsysx.png" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");
    if (!isValidRussianMobilePhone(formData.phone)) {
      setSubmitError(phoneTitle);
      return;
    }
    setIsSubmitting(true);
    try {
      await submitLead({ ...formData, source: "audit-benefits" });
      setSubmitSuccess("Заявка отправлена. Мы подготовим первичный аудит и свяжемся с вами.");
      setFormData({ name: "", phone: "" });
      setIsPolicyAccepted(false);
    } catch (error) {
      console.error(error);
      setSubmitError("Не удалось отправить заявку. Попробуйте ещё раз или откройте форму звонка.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit" className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(180deg,#f1e8dc_0%,#f6f0e8_58%,#fffdf8_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 opacity-70 bg-[linear-gradient(180deg,rgba(241,232,220,0.96),rgba(241,232,220,0))]" />
      <div className="absolute left-[-8%] top-10 h-80 w-80 rounded-full opacity-70 bg-[radial-gradient(circle,rgba(183,137,70,0.12),transparent_64%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[var(--brand-title)] md:text-4xl lg:text-5xl">Что входит в первичный аудит</h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--brand-text)]">
            Вместо общих слов мы проведём конкретный анализ вашего сайта и рекламы
          </p>
        </div>

        <div className="rounded-[2rem] border p-6 backdrop-blur-sm md:p-8 lg:p-10" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.74)" }}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-accent)]">Бесплатный аудит</p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--brand-title)] md:text-3xl">Что мы посмотрим в первую очередь</h3>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 rounded-[1.35rem] border bg-[rgba(255,255,255,0.56)] px-4 py-4" style={{ borderColor: "var(--brand-border)" }}>
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(183,137,70,0.12)] text-[var(--brand-accent)]">
                      <Check className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-base leading-7 text-[var(--brand-text)] md:text-[1.05rem]">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border bg-[rgba(255,255,255,0.68)] p-6" style={{ borderColor: "var(--brand-border)" }}>
              <h3 className="text-2xl font-semibold text-[var(--brand-title)]">Получить аудит бесплатно</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-text)]">
                Оставьте имя и телефон. Покажем точки роста и предложим, с чего стоит начать.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="audit-name" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">Имя <span className="text-[var(--brand-accent)]">*</span></label>
                  <input id="audit-name" type="text" required disabled={isSubmitting} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-xl border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none" style={{ borderColor: "var(--brand-border)" }} placeholder="Иван" />
                </div>
                <div>
                  <label htmlFor="audit-phone" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">Телефон <span className="text-[var(--brand-accent)]">*</span></label>
                  <input id="audit-phone" type="tel" required inputMode="tel" pattern={phonePattern} title={phoneTitle} disabled={isSubmitting} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })} className="w-full rounded-xl border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none" style={{ borderColor: "var(--brand-border)" }} placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              {submitError ? <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">{submitError}</p> : null}
              {submitSuccess ? <p className="mt-4 rounded-2xl border px-4 py-3 text-sm text-[var(--brand-title)]" style={{ borderColor: "rgba(183,137,70,0.24)", background: "rgba(183,137,70,0.1)" }}>{submitSuccess}</p> : null}

              <label className="mt-4 flex items-start gap-3 rounded-[1.15rem] border px-4 py-3 text-sm leading-6 text-[var(--brand-text)]" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.58)" }}>
                <input type="checkbox" required checked={isPolicyAccepted} disabled={isSubmitting} onChange={(e) => setIsPolicyAccepted(e.target.checked)} className="mt-1 h-4 w-4 rounded border accent-[var(--brand-accent)]" />
                <span>Я соглашаюсь с <a href="/privacy" className="text-[var(--brand-title)] underline decoration-[rgba(95,71,43,0.3)] underline-offset-4 transition-colors hover:text-[var(--brand-accent-hover)]">политикой конфиденциальности</a> и обработкой персональных данных</span>
              </label>

              <button type="submit" disabled={isSubmitting} className="relative mt-6 block w-full group disabled:pointer-events-none disabled:opacity-80">
                <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)] blur-lg opacity-25 transition-opacity group-hover:opacity-40" />
                <div className="relative rounded-full bg-[var(--brand-accent)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white">
                  {isSubmitting ? "Отправляем..." : "Получить аудит бесплатно"}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
