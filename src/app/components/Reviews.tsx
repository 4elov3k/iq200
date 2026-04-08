const reviews = [
  { title: "Автомеханика", image: "/iq200/01-1.png" },
  { title: "ПромТехКлимат", image: "/iq200/02-1.png" },
  { title: "Планета детства", image: "/iq200/03.png" },
  { title: "Мир антенн", image: "/iq200/mirantenn.jpg" },
  { title: "Печи Горыныч", image: "/iq200/gtxb-ujhsysx.png" },
  { title: "Экспресспромснаб", image: "/iq200/ekspresspromsnab-scaled.jpg" },
  { title: "Нурсиб", image: "/iq200/nursib-scaled.jpg" },
];

export function Reviews() {
  return (
    <section className="relative bg-[var(--brand-surface-strong)] px-5 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent)]">
            Отзывы
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Благодарственные письма с главной страницы
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.title}
              className="overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-white">
                <img
                  src={review.image}
                  alt={review.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-[var(--brand-border)] px-4 py-3">
                <h3 className="text-sm font-medium text-white md:text-base">
                  {review.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
