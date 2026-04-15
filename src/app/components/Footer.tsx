import { PhoneCall, Send } from "lucide-react";
import { MaxIcon } from "./icons/MaxIcon";

const telegramHref = "https://t.me/MylenkovaLV";
const maxHref = "https://max.ru/u/f9LHodD0cOI2EiTS-n3EaE6xy4n1YnMwwxElSutbsqF435B0P6658RpTL5w";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t px-5 py-12 md:px-20 md:py-16" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.58)" }}>
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.24em] text-[var(--brand-accent)]" style={{ borderColor: "var(--brand-border)" }}>
                IQ
              </div>
              <div>
                <div className="text-xl font-semibold text-[var(--brand-title)]">IQ 200</div>
                <div className="text-xs uppercase tracking-wider text-[rgba(95,71,43,0.55)]">Digital-агентство</div>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text)]">
              Digital-агентство полного цикла, специализирующееся на привлечении B2B-заявок для производственных компаний и поставщиков промышленного оборудования.
            </p>
            <div className="text-sm text-[rgba(95,71,43,0.55)]">
              <p>14 лет на рынке</p>
              <p>250+ производственных клиентов</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[var(--brand-title)]">Услуги</h3>
            <ul className="space-y-2 text-sm text-[var(--brand-text)]">
              <li><a href="#services" className="transition-colors hover:text-[var(--brand-accent-hover)]">Разработка сайтов</a></li>
              <li><a href="#services" className="transition-colors hover:text-[var(--brand-accent-hover)]">SEO-продвижение</a></li>
              <li><a href="#services" className="transition-colors hover:text-[var(--brand-accent-hover)]">Яндекс.Директ</a></li>
              <li><a href="#services" className="transition-colors hover:text-[var(--brand-accent-hover)]">Интеграции и доработки</a></li>
              <li><a href="#services" className="transition-colors hover:text-[var(--brand-accent-hover)]">Комплексный подход</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[var(--brand-title)]">Контакты</h3>
            <ul className="space-y-3 text-sm text-[var(--brand-text)]">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+79877510556" className="transition-colors hover:text-[var(--brand-accent-hover)]">+7 (987) 751-05-56</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:mail@iq-200.ru" className="transition-colors hover:text-[var(--brand-accent-hover)]">mail@iq-200.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Пн-Пт: 8:00 — 20:00</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="tel:+79877510556" className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.7)] text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="Позвонить"><PhoneCall className="h-4 w-4" strokeWidth={1.9} /></a>
              <a href={telegramHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.7)] text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="Telegram"><Send className="h-4 w-4" strokeWidth={2} /></a>
              <a href={maxHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.7)] text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]" style={{ borderColor: "var(--brand-border)" }} aria-label="MAX"><MaxIcon className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-[rgba(95,71,43,0.55)] md:flex-row" style={{ borderColor: "var(--brand-border)" }}>
          <p>© {currentYear} IQ 200. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-[var(--brand-title)]">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
