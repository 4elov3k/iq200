import { PhoneCall, Send } from "lucide-react";
import { MaxIcon } from "./icons/MaxIcon";

const phoneHref = "tel:+79877510556";
const telegramHref = "https://t.me/MylenkovaLV";
const maxHref = "https://max.ru/u/f9LHodD0cOI2EiTS-n3EaE6xy4n1YnMwwxElSutbsqF435B0P6658RpTL5w";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadForm: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenLeadForm }: MobileMenuProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-[rgba(73,57,35,0.16)] backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-[var(--brand-bg)] shadow-2xl">
        <div className="flex items-center justify-between border-b p-5" style={{ borderColor: "var(--brand-border)" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.24em] text-[var(--brand-accent)]" style={{ borderColor: "var(--brand-border)" }}>IQ</div>
            <div>
              <div className="text-lg font-semibold text-[var(--brand-title)]">IQ 200</div>
              <div className="text-xs uppercase text-[rgba(95,71,43,0.55)]">Digital-агентство</div>
            </div>
          </div>
          <button onClick={onClose} className="flex h-10 w-10 items-center justify-center text-[var(--brand-text)] transition-colors hover:text-[var(--brand-title)]" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav className="space-y-2 p-5">
          {[
            ["services", "Услуги"],
            ["process", "Процесс работы"],
            ["faq", "Вопросы и ответы"],
            ["contact", "Контакты"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollToSection(id)} className="w-full rounded-lg px-4 py-3 text-left text-[var(--brand-title)] transition-colors hover:bg-[rgba(255,255,255,0.6)]">
              {label}
            </button>
          ))}
        </nav>

        <div className="border-t p-5" style={{ borderColor: "var(--brand-border)" }}>
          <div className="mb-6">
            <div className="mb-2 text-xs uppercase tracking-wider text-[rgba(95,71,43,0.55)]">Свяжитесь с нами</div>
            <a href={phoneHref} className="text-xl font-bold text-[var(--brand-title)] transition-colors hover:text-[var(--brand-accent-hover)]">+7 (987) 751-05-56</a>
            <p className="mt-1 text-sm text-[var(--brand-text)]">Работаем с 8:00 до 20:00</p>
          </div>

          <button onClick={onOpenLeadForm} className="relative group w-full">
            <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)] blur-lg opacity-25 transition-opacity group-hover:opacity-40" />
            <div className="relative rounded-full bg-[var(--brand-accent)] px-6 py-3 text-center text-sm font-bold uppercase text-white">
              Заказать звонок
            </div>
          </button>

          <div className="mt-6 flex justify-center gap-3">
            <a href={phoneHref} className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="Позвонить"><PhoneCall className="h-4 w-4" strokeWidth={1.9} /></a>
            <a href={telegramHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="Telegram"><Send className="h-4 w-4" strokeWidth={2} /></a>
            <a href={maxHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="MAX"><MaxIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
