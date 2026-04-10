import { useState } from "react";
import { PhoneCall, Send } from "lucide-react";
import { MaxIcon } from "./icons/MaxIcon";
import { submitLead } from "../lib/lead";
import { formatPhoneInput, isValidRussianMobilePhone, phonePattern, phoneTitle } from "../lib/phone";
const telegramHref = "https://t.me/MylenkovaLV";
const maxHref = "https://max.ru/";

interface FinalCTAProps {
  onOpenLeadForm: () => void;
}

export function FinalCTA({ onOpenLeadForm }: FinalCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
  });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

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
        source: "final-cta",
      });
      setSubmitSuccess("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", company: "", phone: "" });
      setIsPolicyAccepted(false);
    } catch (error) {
      console.error(error);
      setSubmitError("Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами напрямую.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-5 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Покажем, где ваш сайт и реклама могут давать{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] via-[var(--brand-gradient-mid)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              больше запросов от клиентов
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Оставьте заявку — проведём первичный аудит и предложим, с чего лучше начать именно в вашей ситуации
          </p>
        </div>

        <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Ваше имя <span className="text-[var(--brand-accent)]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--brand-surface-strong)] border border-[var(--brand-border)] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  disabled={isSubmitting}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--brand-surface-strong)] border border-[var(--brand-border)] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
                  placeholder="ООО «Компания»"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                Телефон <span className="text-[var(--brand-accent)]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                inputMode="tel"
                pattern={phonePattern}
                title={phoneTitle}
                disabled={isSubmitting}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })}
                className="w-full px-4 py-3 bg-[var(--brand-surface-strong)] border border-[var(--brand-border)] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            {submitError ? (
              <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {submitError}
              </p>
            ) : null}

            {submitSuccess ? (
              <p className="rounded-2xl border border-[var(--brand-accent)]/30 bg-[color:rgba(151,195,44,0.12)] px-4 py-3 text-sm text-white">
                {submitSuccess}
              </p>
            ) : null}

            <label className="flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm leading-6 text-white/72">
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

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group w-full sm:w-auto disabled:pointer-events-none disabled:opacity-80"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative px-10 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full text-[var(--brand-bg)] font-bold text-base uppercase tracking-wide">
                  {isSubmitting ? "Отправляем..." : "Получить разбор"}
                </div>
              </button>

              <div className="flex items-center gap-4 text-white/70">
                <span className="text-sm">или свяжитесь с нами:</span>
                <div className="flex gap-3">
                  <a
                    href="tel:+79877510556"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)]"
                    aria-label="Позвонить"
                  >
                    <PhoneCall className="h-4 w-4" strokeWidth={1.9} />
                  </a>
                  <a
                    href={telegramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                    aria-label="Telegram"
                  >
                    <Send className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <a
                    href={maxHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                    aria-label="MAX"
                  >
                    <MaxIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
