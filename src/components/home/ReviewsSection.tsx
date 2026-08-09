import { REVIEWS } from "@/lib/data";

export function ReviewsSection() {
  return (
    <section id="avis" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-chocolate">
            Ce que disent nos clients
          </h2>
          <p className="mt-3 text-muted">
            4.8 sur 5 · 76 avis Google · Valenciennes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="bg-cream rounded-xl p-6 border border-border"
            >
              <div className="flex gap-0.5 text-sunny mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-chocolate leading-relaxed text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 flex items-center justify-between">
                <cite className="not-italic font-medium text-chocolate text-sm">
                  {review.author}
                </cite>
                {review.tag && (
                  <span className="text-xs text-caramel bg-caramel/10 px-2 py-1 rounded-full">
                    {review.tag}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
