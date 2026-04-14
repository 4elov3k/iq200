import { PhoneCall, Send } from "lucide-react";
import { MaxIcon } from "./icons/MaxIcon";

const logoSrc = "/iq200/logo.webp";
const telegramHref = "https://t.me/MylenkovaLV";
const maxHref = "https://max.ru/";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 px-5 md:px-20 bg-[var(--brand-surface-strong)] border-t border-[var(--brand-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                <img
                  src={logoSrc}
                  alt="IQ 200"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-white font-semibold text-xl">IQ 200</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">Digital-агентство</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Digital-агентство полного цикла, специализирующееся на привлечении B2B-заявок для производственных компаний и поставщиков промышленного оборудования.
            </p>
            <div className="text-white/60 text-sm">
              <p>14 лет на рынке</p>
              <p>250+ производственных клиентов</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">
                  Разработка сайтов
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">
                  SEO-продвижение
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">
                  Яндекс.Директ
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">
                  Интеграции и доработки
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">
                  Комплексный подход
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+79877510556" className="hover:text-[var(--brand-accent)] transition-colors">
                  +7 (987) 751-05-56
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:mail@iq-200.ru" className="hover:text-[var(--brand-accent)] transition-colors">
                  mail@iq-200.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Пн-Пт: 8:00 — 20:00</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--brand-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© {currentYear} IQ 200. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
