import { useState } from "react";
import { Check } from "lucide-react";
import { submitLead } from "../lib/lead";
import { formatPhoneInput, isValidRussianMobilePhone, phonePattern, phoneTitle } from "../lib/phone";

interface AuditBenefitsProps {
  onOpenLeadForm: () => void;
}

export function AuditBenefits({ onOpenLeadForm }: AuditBenefitsProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const benefits = [
    {
      text: "Краткий разбор сайта с точки зрения B2B-продаж",
      icon: "/iq200/group-6196-10.png",
    },
    {
      text: "Оценка структуры под SEO и коммерческие запросы",
      icon: "/iq200/group-6196-19.png",
    },
    {
      text: "Оценка текущей рекламы, если она уже есть",
      icon: "/iq200/group-6196-25.png",
    },
    {
      text: "3–5 точек роста",
      icon: "/iq200/group-6197-3-2.png",
    },
    {
      text: "Рекомендации, с чего начать в первую очередь",
      icon: "/iq200/gtxb-ujhsysx.png",
    },
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
      await submitLead({
        ...formData,
        source: "audit-benefits",
      });
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1e251f_0%,#171717_58%,#141414_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(30,37,31,0.96),rgba(30,37,31,0))]" />
      <div className="absolute left-[-8%] top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(151,195,44,0.12),transparent_64%)]" />
      <div className="absolute right-[-10%] bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(136,85,243,0.1),transparent_64%)]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Что входит в первичный аудит
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Вместо общих слов мы проведём конкретный анализ вашего сайта и рекламы
          </p>
        </div>

        <div className="rounded-[2rem] border border-[color:rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                Бесплатный аудит
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Что мы посмотрим в первую очередь
              </h3>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 rounded-[1.35rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-4"
                  >
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(151,195,44,0.14)] text-[var(--brand-accent)]">
                      <Check className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-base leading-7 text-white/84 md:text-[1.05rem]">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/10 bg-[rgba(10,10,10,0.18)] p-6">
              <h3 className="text-2xl font-semibold text-white">
                Получить аудит бесплатно
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Оставьте имя и телефон. Покажем точки роста и предложим, с чего стоит начать.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="audit-name" className="mb-2 block text-sm font-medium text-white">
                    Имя <span className="text-[var(--brand-accent)]">*</span>
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[var(--brand-border)] bg-[var(--brand-surface-strong)] px-4 py-3 text-white placeholder-white/35 focus:border-[var(--brand-accent)] focus:outline-none"
                    placeholder="Иван"
                  />
                </div>
                <div>
                  <label htmlFor="audit-phone" className="mb-2 block text-sm font-medium text-white">
                    Телефон <span className="text-[var(--brand-accent)]">*</span>
                  </label>
                  <input
                    id="audit-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    pattern={phonePattern}
                    title={phoneTitle}
                    disabled={isSubmitting}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })}
                    className="w-full rounded-xl border border-[var(--brand-border)] bg-[var(--brand-surface-strong)] px-4 py-3 text-white placeholder-white/35 focus:border-[var(--brand-accent)] focus:outline-none"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              {submitError ? (
                <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  {submitError}
                </p>
              ) : null}

              {submitSuccess ? (
                <p className="mt-4 rounded-2xl border border-[var(--brand-accent)]/30 bg-[color:rgba(151,195,44,0.12)] px-4 py-3 text-sm text-white">
                  {submitSuccess}
                </p>
              ) : null}

              <label className="mt-4 flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm leading-6 text-white/72">
                <input
                  type="checkbox"
                  required
                  checked={isPolicyAccepted}
                  disabled={isSubmitting}
                  onChange={(e) => setIsPolicyAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border border-white/25 bg-transparent accent-[var(--brand-accent)]"
                />
                <span>
                  Я соглашаюсь с{" "}
                  <a href="/privacy" className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-[var(--brand-accent)]">
                    политикой конфиденциальности
                  </a>{" "}
                  и обработкой персональных данных
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative mt-6 block w-full group disabled:pointer-events-none disabled:opacity-80"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] blur-lg opacity-45 transition-opacity group-hover:opacity-75" />
                <div className="relative rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--brand-bg)]">
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
