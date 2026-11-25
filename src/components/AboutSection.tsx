import { MapPin, Phone, Star, User } from 'lucide-react';
import { COMPANY_INFO, WHY_HIRE_US } from '../data/siteData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#1B1E54] text-white"
    >
      {/* Subtle construction craftsmanship photo watermark behind About & Why Hire Us descriptions */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={COMPANY_INFO.watermarkCarpentry}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.16] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B1E54]/92 via-[#1B1E54]/86 to-[#12143B]/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative + Why Hire Us column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-[#F29D12] tracking-wide">
                Why Hire ScotiaHandy
              </p>
              <span className="text-white/30" aria-hidden="true">
                ·
              </span>
              <div
                className="inline-flex items-center gap-0.5 text-[#F29D12]"
                aria-label="5 star standard"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-3.5 h-3.5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            <h2
              className="mt-2 font-display font-bold text-white tracking-tight text-3xl sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Built Straight. Communicated Clearly.
            </h2>

            <p className="mt-4 text-base text-slate-200 leading-relaxed max-w-xl">
              Led by owner {COMPANY_INFO.owner}, ScotiaHandy Construction focuses on
              dependable exterior work across Nova Scotia—showing up on schedule,
              explaining every detail plainly, and leaving your property spotless.
            </p>

            {/* 4 crisp "Why Hire Us" pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_HIRE_US.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-5 rounded-xl bg-[#24286B]/80 border border-white/15"
                >
                  <p className="text-xs font-semibold text-[#F29D12] tabular-nums">
                    {pillar.number}
                  </p>
                  <h3 className="mt-1 font-display font-bold text-base text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Service areas breakdown */}
            <div className="mt-8 pt-6 border-t border-white/15">
              <h3 className="font-display font-semibold text-base text-white">
                Service Areas
              </h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {COMPANY_INFO.serviceAreas.map((area) => (
                  <div key={area.name}>
                    <p className="font-display font-semibold text-sm text-[#F29D12]">
                      {area.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-300 leading-snug">
                      {area.communities}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Local business & contact overview card */}
          <div className="lg:col-span-5">
            <div className="bg-[#24286B]/95 border border-white/15 rounded-xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Direct Local Contact
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  No call centres—talk directly with the owner.
                </p>
              </div>

              <dl className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <User
                    className="w-5 h-5 text-[#F29D12] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-slate-300 font-medium">Owner</dt>
                    <dd className="mt-0.5 text-base font-semibold text-white">
                      {COMPANY_INFO.owner}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 text-[#F29D12] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-slate-300 font-medium">Phone</dt>
                    <dd className="mt-0.5">
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="text-base font-semibold text-white hover:text-[#F29D12] transition-colors tabular-nums"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#F29D12] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-slate-300 font-medium">Coverage</dt>
                    <dd className="mt-0.5 text-base font-semibold text-white">
                      {COMPANY_INFO.serviceAreaShort}
                    </dd>
                    <dd className="mt-1 text-xs text-slate-300">
                      {COMPANY_INFO.locationSummary}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="pt-4 border-t border-white/15">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-[#1B1E54] bg-[#F29D12] hover:bg-[#DC8B0A] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule an On-Site Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
