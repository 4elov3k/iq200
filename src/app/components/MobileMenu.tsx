import { PhoneCall, Send } from "lucide-react";
import { MaxIcon } from "./icons/MaxIcon";

const logoSrc = "/iq200/logo.webp";
const phoneHref = "tel:+79877510556";
const telegramHref = "https://t.me/MylenkovaLV";
const maxHref = "https://max.ru/";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadForm: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenLeadForm }: MobileMenuProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-[var(--brand-bg)] shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--brand-border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden flex-shrink-0">
              <img
                src={logoSrc}
                alt="IQ 200"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-white font-semibold text-lg">IQ 200</div>
              <div className="text-white/60 text-xs uppercase">Digital-агентство</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-5 space-y-2">
          <button
            onClick={() => scrollToSection("services")}
            className="w-full text-left px-4 py-3 text-white hover:bg-[var(--brand-surface)] rounded-lg transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="w-full text-left px-4 py-3 text-white hover:bg-[var(--brand-surface)] rounded-lg transition-colors"
          >
            Процесс работы
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="w-full text-left px-4 py-3 text-white hover:bg-[var(--brand-surface)] rounded-lg transition-colors"
          >
            Вопросы и ответы
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-left px-4 py-3 text-white hover:bg-[var(--brand-surface)] rounded-lg transition-colors"
          >
            Контакты
          </button>
        </nav>

        {/* Contact Info */}
        <div className="p-5 border-t border-[var(--brand-border)]">
          <div className="mb-6">
            <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Свяжитесь с нами</div>
            <a
              href={phoneHref}
              className="text-white font-bold text-xl hover:text-[var(--brand-accent)] transition-colors"
            >
              +7 (987) 751-05-56
            </a>
            <p className="text-white/60 text-sm mt-1">Работаем с 8:00 до 20:00</p>
          </div>

          <button
            onClick={onOpenLeadForm}
            className="relative group w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative px-6 py-3 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full text-[var(--brand-bg)] font-bold text-sm uppercase text-center">
              Заказать звонок
            </div>
          </button>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mt-6">
            <a
              href={phoneHref}
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
    </div>
  );
}
