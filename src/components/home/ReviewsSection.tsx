import { REVIEWS } from "@/lib/data";
import type { Review } from "@/lib/types";

function ReviewCard({ review }: { review: Review }) {
  return (
    <blockquote className="w-[min(21rem,calc(100vw-3rem))] shrink-0 rounded-2xl border border-muted-pink bg-background-card p-6 text-primary-text shadow-sm">
      <div className="mb-4 flex gap-0.5 text-accent-pink" aria-label={`${review.rating} sur 5`}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <span key={index} aria-hidden>★</span>
        ))}
      </div>
      <p className="text-sm leading-7 text-primary-text/90">
        &ldquo;{review.text}&rdquo;
      </p>
      <footer className="mt-5 flex items-center justify-between gap-4 border-t border-muted-pink pt-4">
        <cite className="text-sm font-semibold not-italic text-primary-text">
          {review.author}
        </cite>
        {review.tag && (
          <span className="rounded-full bg-background-light px-2.5 py-1 text-xs font-medium text-primary-text">
            {review.tag}
          </span>
        )}
      </footer>
    </blockquote>
  );
}

export function ReviewsSection() {
  return (
    <section id="avis" className="overflow-hidden bg-[#FFF8FA] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-pink">Avis clients</p>
          <h2 className="mt-3 font-serif text-3xl text-primary-text md:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-3 text-primary-text/75">
            4,8 sobre 5 · 168 reseñas en Google · Valencia
          </p>
        </div>
      </div>

      <div className="review-marquee" aria-label="Avis de nos clients">
        <div className="review-marquee-track">
          <div className="review-marquee-group">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="review-marquee-group" aria-hidden="true">
            {REVIEWS.map((review) => (
              <ReviewCard key={`${review.id}-duplicate`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
