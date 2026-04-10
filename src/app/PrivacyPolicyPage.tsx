export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] px-5 py-16 text-white md:px-20 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] md:p-12">
        <a
          href="/"
          className="inline-flex items-center text-sm text-white/60 transition-colors hover:text-[var(--brand-accent)]"
        >
          На главную
        </a>
        <h1 className="mt-6 text-3xl font-semibold md:text-5xl">
          Политика конфиденциальности
        </h1>
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-white/12 bg-white/3 px-6 py-10 text-white/60">
          Страница в подготовке. Содержимое политики будет добавлено позже.
        </div>
      </div>
    </div>
  );
}
