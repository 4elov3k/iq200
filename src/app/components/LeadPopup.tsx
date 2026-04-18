import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { submitLead } from "../lib/lead";
import { formatPhoneInput, isValidRussianMobilePhone, phonePattern, phoneTitle } from "../lib/phone";

interface LeadPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadPopup({ open, onOpenChange }: LeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
  });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const resetForm = () => {
    setFormData({ name: "", company: "", phone: "" });
    setIsPolicyAccepted(false);
  };

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
        source: "popup",
      });

      setSubmitSuccess("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
      resetForm();
      window.setTimeout(() => {
        onOpenChange(false);
        setSubmitSuccess("");
      }, 1400);
    } catch (error) {
      console.error(error);
      setSubmitError("Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        onOpenChange(nextOpen);
        if (!nextOpen) {
          setSubmitError("");
          setSubmitSuccess("");
          setIsSubmitting(false);
          setIsPolicyAccepted(false);
        }
      }}
    >
      <DialogContent className="max-w-xl overflow-hidden rounded-[2rem] p-0 shadow-[0_30px_120px_rgba(98,74,43,0.16)]" style={{ borderColor: "var(--brand-border)", background: "linear-gradient(180deg,#fffaf3,#f6f0e8)" }}>
        <div className="border p-6 text-[var(--brand-title)] md:p-8" style={{ borderColor: "var(--brand-border)", background: "linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.68))" }}>
          <DialogHeader className="pr-10 text-left">
            <DialogTitle className="text-2xl font-semibold text-[var(--brand-title)] md:text-3xl">
              Опишите свою задачу
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-[var(--brand-text)]">
              Оставьте контакты, и мы свяжемся с вами, чтобы обсудить сайт, рекламу, SEO или комплексный разбор.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="lead-popup-name" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">
                Ваше имя <span className="text-[var(--brand-accent)]">*</span>
              </label>
              <input
                id="lead-popup-name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none"
                style={{ borderColor: "var(--brand-border)" }}
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label htmlFor="lead-popup-company" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">
                Компания
              </label>
              <input
                id="lead-popup-company"
                type="text"
                disabled={isSubmitting}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-lg border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none"
                style={{ borderColor: "var(--brand-border)" }}
                placeholder="ООО «Компания»"
              />
            </div>

            <div>
              <label htmlFor="lead-popup-phone" className="mb-2 block text-sm font-medium text-[var(--brand-title)]">
                Телефон <span className="text-[var(--brand-accent)]">*</span>
              </label>
              <input
                id="lead-popup-phone"
                type="tel"
                required
                inputMode="tel"
                pattern={phonePattern}
                title={phoneTitle}
                disabled={isSubmitting}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })}
                className="w-full rounded-lg border bg-white px-4 py-3 text-[var(--brand-title)] placeholder-[rgba(95,71,43,0.45)] focus:border-[var(--brand-accent)] focus:outline-none"
                style={{ borderColor: "var(--brand-border)" }}
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            {submitError ? (
              <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
                {submitError}
              </p>
            ) : null}

            {submitSuccess ? (
              <p className="rounded-2xl border px-4 py-3 text-sm text-[var(--brand-title)]" style={{ borderColor: "rgba(151,195,44,0.28)", background: "rgba(151,195,44,0.1)" }}>
                {submitSuccess}
              </p>
            ) : null}

            <label className="flex items-start gap-3 rounded-[1.15rem] border px-4 py-3 text-sm leading-6 text-[var(--brand-text)]" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.58)" }}>
              <input
                type="checkbox"
                required
                checked={isPolicyAccepted}
                disabled={isSubmitting}
                onChange={(e) => setIsPolicyAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border accent-[var(--brand-accent)]"
              />
              <span>
                Я соглашаюсь с{" "}
                <a href="/privacy" className="text-[var(--brand-title)] underline decoration-[rgba(95,71,43,0.3)] underline-offset-4 transition-colors hover:text-[var(--brand-accent-hover)]">
                  политикой конфиденциальности
                </a>{" "}
                и обработкой персональных данных
              </span>
            </label>

            <button type="submit" disabled={isSubmitting} className="relative block w-full group disabled:pointer-events-none disabled:opacity-80">
              <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)] blur-lg opacity-25 transition-opacity group-hover:opacity-40" />
              <div className="relative rounded-full bg-[var(--brand-accent)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white">
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </div>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
