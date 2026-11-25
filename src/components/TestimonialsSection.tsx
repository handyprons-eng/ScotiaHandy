import { Star } from 'lucide-react';
import { COMPANY_INFO, VERIFIED_REVIEWS } from '../data/siteData';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 lg:py-24 bg-white border-b border-slate-200"
    >
      {/* Subtle architectural exterior photo watermark behind testimonials wording */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={COMPANY_INFO.watermarkExterior}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/92 to-white/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <div
                className="inline-flex items-center gap-0.5 text-[#F29D12]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#A36200] tabular-nums">
                5.0 Homeowner Rating
              </span>
            </div>

            <h2
              className="mt-2 font-display font-bold text-[#1B1E54] tracking-tight text-3xl sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Trusted Across Central Nova Scotia
            </h2>
            <p className="mt-2.5 text-base text-slate-600 leading-relaxed">
              Real feedback from homeowners in HRM, East Hants, and Truro.
            </p>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
              'ScotiaHandy Construction — Customer Review'
            )}`}
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#1B1E54] bg-[#F7F8FB] border border-slate-300 hover:border-[#1B1E54] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54]"
          >
            Share Your Review
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VERIFIED_REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="relative overflow-hidden p-6 sm:p-7 bg-[#F7F8FB]/95 border border-slate-200 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex items-center gap-1 text-[#F29D12]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  “{review.quote}”
                </p>
              </div>

              <footer className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-600">
                <p className="font-display font-semibold text-[#1B1E54] text-sm">
                  {review.customerName}
                </p>
                <p className="mt-0.5">
                  <span>{review.community}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#A36200] font-medium">
                    {review.dateLabel}
                  </span>
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
