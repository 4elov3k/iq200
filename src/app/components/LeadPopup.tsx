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
      <DialogContent className="max-w-xl overflow-hidden rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,#20241d,#171717)] p-0 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6 md:p-8">
          <DialogHeader className="pr-10 text-left">
            <DialogTitle className="text-2xl font-semibold text-white md:text-3xl">
              Опишите свою задачу
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-white/62">
              Оставьте контакты, и мы свяжемся с вами, чтобы обсудить сайт, рекламу, SEO или комплексный разбор.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="lead-popup-name" className="mb-2 block text-sm font-medium text-white">
                Ваше имя <span className="text-[var(--brand-accent)]">*</span>
              </label>
              <input
                id="lead-popup-name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white placeholder-white/35 focus:border-[var(--brand-accent)] focus:outline-none"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label htmlFor="lead-popup-company" className="mb-2 block text-sm font-medium text-white">
                Компания
              </label>
              <input
                id="lead-popup-company"
                type="text"
                disabled={isSubmitting}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white placeholder-white/35 focus:border-[var(--brand-accent)] focus:outline-none"
                placeholder="ООО «Компания»"
              />
            </div>

            <div>
              <label htmlFor="lead-popup-phone" className="mb-2 block text-sm font-medium text-white">
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
                className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white placeholder-white/35 focus:border-[var(--brand-accent)] focus:outline-none"
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

            <button type="submit" disabled={isSubmitting} className="relative block w-full group disabled:pointer-events-none disabled:opacity-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] blur-lg opacity-45 transition-opacity group-hover:opacity-75" />
              <div className="relative rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--brand-bg)]">
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </div>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
