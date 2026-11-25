import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ServiceCategory } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onRequestEstimateForService: (category: ServiceCategory | 'Other') => void;
}

export function ServicesSection({
  onRequestEstimateForService,
}: ServicesSectionProps) {
  return (
    <section id="services" className="relative overflow-hidden py-16 lg:py-24 bg-white">
      {/* Subtle architectural house watermark behind section header wording */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 overflow-hidden"
      >
        <img
          src={COMPANY_INFO.watermarkExterior}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-[0.09]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/90 to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Short, punchy section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#A36200]">Our Core Trades</p>
          <h2
            className="mt-2 font-display font-bold text-[#1B1E54] tracking-tight text-3xl sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Exterior Work Done Right
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every project starts with a free on-site look and a clear written quote.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white transition-colors hover:border-[#1B1E54]/40"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackTitle={service.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#A36200] tabular-nums">
                    {service.number}. {service.category}
                  </p>
                  <h3 className="mt-1.5 font-display font-bold text-xl text-[#1B1E54]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-sm text-slate-700">
                    {service.details.map((detail) => (
                      <li key={detail} className="leading-snug">
                        <span className="text-[#F29D12] font-bold mr-2" aria-hidden="true">
                          —
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      onRequestEstimateForService(
                        service.category === 'Carpentry' ? 'Other' : service.category
                      )
                    }
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B1E54] hover:text-[#A36200] transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54] rounded cursor-pointer"
                  >
                    {service.category === 'Carpentry'
                      ? 'Request Carpentry Estimate'
                      : `Request ${service.category} Estimate`}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
