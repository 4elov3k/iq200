import { useState } from "react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", company: "", phone: "" });
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
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[var(--brand-surface-strong)] border border-[var(--brand-border)] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button
                type="submit"
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative px-10 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full text-[var(--brand-bg)] font-bold text-base uppercase tracking-wide">
                  Получить разбор
                </div>
              </button>

              <div className="flex items-center gap-4 text-white/70">
                <span className="text-sm">или свяжитесь с нами:</span>
                <div className="flex gap-3">
                  <a
                    href="tel:+79090891889"
                    className="w-10 h-10 rounded-full bg-[var(--brand-surface-strong)] border border-[var(--brand-border)] hover:border-[var(--brand-accent)] flex items-center justify-center transition-colors"
                    aria-label="Позвонить"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/yourtelegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--brand-surface-strong)] border border-[var(--brand-border)] hover:border-[var(--brand-accent)] flex items-center justify-center transition-colors"
                    aria-label="Telegram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-xs text-center pt-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
