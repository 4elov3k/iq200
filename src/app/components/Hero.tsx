import { useEffect, useState } from "react";

interface HeroProps {
  onMenuToggle: () => void;
}

const logoSrc = "/iq200/logo.webp";
const heroBgSrc = "/iq200/bg-02-scaled.webp";
const heroBannerSrc = "/iq200/02.png";

export function Hero({ onMenuToggle }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const orbShift = Math.min(scrollY * 0.1, 80);
  const bannerShift = Math.min(scrollY * 0.12, 72);
  const bannerRotate = Math.max(0, 7 - scrollY * 0.01);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBgSrc}
          alt=""
          className="fixed inset-0 h-screen w-full object-cover opacity-20"
          style={{ top: 0, left: 0 }}
        />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,142,209,0.18),transparent_30%),radial-gradient(circle_at_left_center,rgba(151,195,44,0.16),transparent_36%)] will-change-transform"
        style={{ transform: `translate3d(0, ${orbShift}px, 0)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(23,23,23,0.35)] via-[rgba(23,23,23,0.22)] to-[rgba(23,23,23,0.75)]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-20 md:py-10 max-[1080px]:px-10 max-[1080px]:py-6 [@media(max-height:820px)]:py-5 [@media(max-height:760px)]:py-4">
        <div className="flex items-center gap-4">
          <div className="w-8 md:w-16 h-8 md:h-16 overflow-hidden flex-shrink-0">
            <img
              src={logoSrc}
              alt="IQ 200"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-white font-semibold text-lg md:text-2xl">
              IQ 200
            </div>
            <div className="text-white/80 text-xs uppercase tracking-wider">
              Digital-агентство полного цикла
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-white text-sm">
          <button onClick={() => scrollToSection("services")} className="hover:text-[var(--brand-accent)] transition-colors">
            Услуги
          </button>
          <button onClick={() => scrollToSection("process")} className="hover:text-[var(--brand-accent)] transition-colors">
            Процесс
          </button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-[var(--brand-accent)] transition-colors">
            Вопросы
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[var(--brand-accent)] transition-colors">
            Контакты
          </button>
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#60D66A] to-[#20B038] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg">+7 (909) 089 18 89</div>
              <div className="text-white/70 text-xs">Работаем с 8:00 до 20:00</div>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2.5 border-2 border-[var(--brand-accent)] text-white text-sm font-bold rounded-full hover:bg-[color:rgba(151,195,44,0.1)] transition-all uppercase"
          >
            Заказать звонок
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-white rounded" />
          <div className="w-3.5 h-0.5 bg-white rounded ml-auto" />
          <div className="w-5 h-0.5 bg-white rounded" />
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 px-5 py-12 md:px-20 md:py-20 max-[1080px]:px-10 max-[1080px]:py-10 [@media(max-height:820px)]:py-7 [@media(max-height:760px)]:py-5">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] max-[1080px]:max-w-5xl max-[1080px]:gap-7 [@media(max-height:820px)]:gap-6 [@media(max-height:760px)]:gap-4">
          <div className="space-y-6 text-center lg:text-left md:space-y-8 max-[1080px]:space-y-5 [@media(max-height:820px)]:space-y-4 [@media(max-height:760px)]:space-y-3">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl max-[1080px]:text-[2.7rem] max-[1080px]:leading-[1.08] [@media(max-height:820px)]:text-[clamp(2.75rem,4.7vw,4.6rem)] [@media(max-height:820px)]:leading-[1.02] [@media(max-height:760px)]:text-[clamp(2.4rem,4.2vw,4rem)]">
            Привлекаем B2B-заявки для{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] via-[var(--brand-gradient-mid)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              производителей и поставщиков
            </span>{" "}
            промышленного оборудования
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 md:text-xl lg:mx-0 max-[1080px]:max-w-2xl max-[1080px]:text-[1.05rem] max-[1080px]:leading-7 [@media(max-height:820px)]:text-base [@media(max-height:820px)]:leading-6 [@media(max-height:760px)]:max-w-[52rem] [@media(max-height:760px)]:text-[0.95rem] [@media(max-height:760px)]:leading-5">
            Помогаем производственным компаниям по России получать целевые обращения через сайт, SEO и рекламу без хаотичного маркетинга и пустых обещаний
          </p>

          {/* Key Points */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 text-left text-sm md:grid-cols-2 md:gap-4 md:text-base lg:mx-0 max-[1080px]:gap-x-3 max-[1080px]:gap-y-2.5 max-[1080px]:text-[0.95rem] [@media(max-height:820px)]:gap-y-2 [@media(max-height:820px)]:text-[0.9rem] [@media(max-height:760px)]:text-[0.85rem]">
            <div className="flex items-start gap-2 text-white/90">
              <svg className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>работаем с B2B и производством по всей России</span>
            </div>
            <div className="flex items-start gap-2 text-white/90">
              <svg className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>разрабатываем и настраиваем сайты, SEO, Яндекс.Директ</span>
            </div>
            <div className="flex items-start gap-2 text-white/90">
              <svg className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>понимаем длинный цикл сделки и сложный продукт</span>
            </div>
            <div className="flex items-start gap-2 text-white/90">
              <svg className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>фокусируемся на заявках и запросах КП</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start max-[1080px]:gap-3 max-[1080px]:pt-2 [@media(max-height:820px)]:gap-3 [@media(max-height:820px)]:pt-1 [@media(max-height:760px)]:gap-2.5">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[var(--brand-bg)] md:text-base max-[1080px]:px-7 max-[1080px]:py-3.5 [@media(max-height:820px)]:px-6 [@media(max-height:820px)]:py-3 [@media(max-height:820px)]:text-[0.8rem]">
                Получить аудит сайта и рекламы
              </div>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="w-full rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5 sm:w-auto md:text-base max-[1080px]:px-7 max-[1080px]:py-3.5 [@media(max-height:820px)]:px-6 [@media(max-height:820px)]:py-3 [@media(max-height:820px)]:text-[0.8rem]"
            >
              Посмотреть услуги
            </button>
          </div>
          </div>

          <div className="relative hidden lg:block max-[1080px]:scale-[0.98] max-[1080px]:origin-center [@media(max-height:820px)]:scale-[0.86] [@media(max-height:760px)]:scale-[0.76]">
            <div
              className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-br from-[color:rgba(136,85,243,0.28)] via-[color:rgba(185,143,227,0.18)] to-[color:rgba(151,195,44,0.16)] blur-3xl will-change-transform"
              style={{ transform: `translate3d(0, ${orbShift * -0.55}px, 0)` }}
            />
            <div
              className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm will-change-transform"
              style={{
                transform: `translate3d(0, ${bannerShift}px, 0) rotate(${bannerRotate}deg)`,
              }}
            >
              <div className="absolute inset-0 rounded-[1.7rem] border border-white/10" />
              <div className="absolute left-5 top-5 z-10 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/85" />
                <span className="h-3 w-3 rounded-full bg-[var(--brand-gradient-mid)]" />
                <span className="h-3 w-3 rounded-full bg-[var(--brand-accent)]" />
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--brand-surface-strong)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(23,23,23,0.1)] via-transparent to-[rgba(255,255,255,0.12)]" />
                <img
                  src={heroBannerSrc}
                  alt="Баннер IQ 200"
                  className="h-full w-full object-cover object-center scale-[1.06]"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 left-0 w-56 rounded-[1.5rem] border border-white/10 bg-[rgba(23,23,23,0.82)] p-4 shadow-xl backdrop-blur-md [@media(max-height:760px)]:hidden">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                IQ 200
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/85">
                Структурный B2B-маркетинг для промышленного сегмента.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                Сайт, SEO и реклама как единая система роста заявок.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-5 pb-12 md:px-20 md:pb-20 max-[1080px]:px-10 max-[1080px]:pb-10 [@media(max-height:820px)]:pb-6 [@media(max-height:760px)]:pb-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 max-[1080px]:gap-5 [@media(max-height:820px)]:gap-3">
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">14</div>
            <div className="text-sm md:text-base text-white/70">Лет на рынке *Если заметили - скидка 5%*</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">250+</div>
            <div className="text-sm md:text-base text-white/70">Производственных клиентов</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">
              <span>80</span>
              <span className="text-xl md:text-2xl font-medium"> млн.</span>
            </div>
            <div className="text-sm md:text-base text-white/70">Бюджет рекламы в год</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">35</div>
            <div className="text-sm md:text-base text-white/70">Специалистов в команде</div>
          </div>
        </div>
      </div>
    </section>
  );
}
