const logoSrc = "/iq200/logo.webp";

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
              href="tel:+79090891889"
              className="text-white font-bold text-xl hover:text-[var(--brand-accent)] transition-colors"
            >
              +7 (909) 089 18 89
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
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--brand-surface)] border border-[var(--brand-border)] hover:border-[var(--brand-accent)] flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
              </svg>
            </a>
            <a
              href="https://vk.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--brand-surface)] border border-[var(--brand-border)] hover:border-[var(--brand-accent)] flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="VK"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.168.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.744-.576.744z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/79090891889"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--brand-surface)] border border-[var(--brand-border)] hover:border-[var(--brand-accent)] flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
