import { useState } from "react";
import { PhoneCall, Send } from "lucide-react";
import { MaxIcon } from "./icons/MaxIcon";
import { submitLead } from "../lib/lead";
import { formatPhoneInput, isValidRussianMobilePhone, phonePattern, phoneTitle } from "../lib/phone";

const telegramHref = "https://t.me/MylenkovaLV";
const maxHref = "https://max.ru/u/f9LHodD0cOI2EiTS-n3EaE6xy4n1YnMwwxElSutbsqF435B0P6658RpTL5w";

interface FinalCTAProps {
  onOpenLeadForm: () => void;
}

export function FinalCTA({ onOpenLeadForm }: FinalCTAProps) {
  const [formData, setFormData] = useState({ name: "", company: "", phone: "" });
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
      await submitLead({ ...formData, source: "final-cta" });
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
    <section id="contact" className="relative px-5 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[var(--brand-title)] md:text-4xl lg:text-5xl">
            Покажем, где ваш сайт и реклама могут давать{" "}
            <span className="text-[var(--brand-accent-hover)]">
              больше запросов от клиентов
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--brand-text)]">
            Оставьте заявку — проведём первичный аудит и предложим, с чего лучше начать именно в вашей ситуации
          </p>
        </div>

        <div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.74)" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">
                  Ваше имя <span className="text-[var(--brand-accent)]">*</span>
                </label>
                <input type="text" id="name" required disabled={isSubmitting} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none transition-colors" style={{ borderColor: "var(--brand-border)" }} placeholder="Иван Иванов" />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">Компания</label>
                <input type="text" id="company" disabled={isSubmitting} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full rounded-lg border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none transition-colors" style={{ borderColor: "var(--brand-border)" }} placeholder="ООО «Компания»" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">
                Телефон <span className="text-[var(--brand-accent)]">*</span>
              </label>
              <input type="tel" id="phone" required inputMode="tel" pattern={phonePattern} title={phoneTitle} disabled={isSubmitting} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })} className="w-full rounded-lg border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none transition-colors" style={{ borderColor: "var(--brand-border)" }} placeholder="+7 (999) 123-45-67" />
            </div>

            {submitError ? <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">{submitError}</p> : null}
            {submitSuccess ? <p className="rounded-2xl border px-4 py-3 text-sm text-[var(--brand-title)]" style={{ borderColor: "rgba(183,137,70,0.24)", background: "rgba(183,137,70,0.1)" }}>{submitSuccess}</p> : null}

            <label className="flex items-start gap-3 rounded-[1.15rem] border px-4 py-3 text-sm leading-6 text-[var(--brand-text)]" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.58)" }}>
              <input type="checkbox" required checked={isPolicyAccepted} disabled={isSubmitting} onChange={(e) => setIsPolicyAccepted(e.target.checked)} className="mt-1 h-4 w-4 rounded border accent-[var(--brand-accent)]" />
              <span>
                Я соглашаюсь с{" "}
                <a href="/privacy" className="text-[var(--brand-title)] underline decoration-[rgba(95,71,43,0.3)] underline-offset-4 transition-colors hover:text-[var(--brand-accent-hover)]">
                  политикой конфиденциальности
                </a>{" "}
                и обработкой персональных данных
              </span>
            </label>

            <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row">
              <button type="submit" disabled={isSubmitting} className="relative group w-full sm:w-auto disabled:pointer-events-none disabled:opacity-80">
                <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)] blur-lg opacity-25 transition-opacity group-hover:opacity-40" />
                <div className="relative rounded-full bg-[var(--brand-accent)] px-10 py-4 text-base font-bold uppercase tracking-wide text-white">
                  {isSubmitting ? "Отправляем..." : "Получить разбор"}
                </div>
              </button>

              <div className="flex items-center gap-4 text-[var(--brand-text)]">
                <span className="text-sm">или свяжитесь с нами:</span>
                <div className="flex gap-3">
                  <a href="tel:+79877510556" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="Позвонить"><PhoneCall className="h-4 w-4" strokeWidth={1.9} /></a>
                  <a href={telegramHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="Telegram"><Send className="h-4 w-4" strokeWidth={2} /></a>
                  <a href={maxHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="MAX"><MaxIcon className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
