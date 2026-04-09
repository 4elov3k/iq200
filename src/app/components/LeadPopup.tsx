import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const phonePattern = "^\\+?[0-9\\s()\\-]{10,20}$";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", company: "", phone: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                title="Введите корректный номер телефона"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white placeholder-white/35 focus:border-[var(--brand-accent)] focus:outline-none"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <button type="submit" className="relative block w-full group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] blur-lg opacity-45 transition-opacity group-hover:opacity-75" />
              <div className="relative rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--brand-bg)]">
                Отправить заявку
              </div>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
