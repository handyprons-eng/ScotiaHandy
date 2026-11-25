import { ArrowRight, Phone, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onSelectService?: (serviceName: string) => void;
}

const FEATURED_STRIP = [
  {
    title: 'Siding & Roofing',
    detail: 'Weather-tight exterior protection',
    service: 'Siding',
  },
  {
    title: 'Decks & Sheds',
    detail: 'Black spindle railings & solid framing',
    service: 'Decks',
  },
  {
    title: 'Seamless Gutters',
    detail: 'Clean eaves & foundation drainage',
    service: 'Gutters',
  },
];

export function Hero({ onSelectService }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F8FB] border-b border-slate-200"
    >
      {/* Subtle photographic watermark behind hero wording */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={COMPANY_INFO.watermarkCarpentry}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.11] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8FB]/95 via-[#F7F8FB]/88 to-[#F7F8FB]/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-16">
        {/* Two-column balanced hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Copy column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            {/* 5-star proof line + local service area */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
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
              <span className="text-sm font-semibold text-[#A36200]">
                5-Star Homeowner Care · HRM, East Hants &amp; Truro
              </span>
            </div>

            <h1
              className="font-display font-bold text-[#1B1E54] tracking-tight leading-[1.1] max-w-xl"
              style={{
                fontSize: 'clamp(2.35rem, 4.2vw, 3.6rem)',
                textWrap: 'balance',
              }}
            >
              Exterior Craft Built for Nova Scotia
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-lg">
              Siding, roofing, decks, sheds, and gutters—handled directly by owner
              San C with clear quotes and spotless job sites.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#1B1E54] bg-[#F29D12] hover:bg-[#DC8B0A] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54]"
              >
                Request a Free Estimate
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-[#1B1E54] bg-white border border-slate-300 hover:border-[#1B1E54] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54]"
              >
                <Phone className="w-4 h-4 text-[#A36200]" aria-hidden="true" />
                <span className="tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Large house photography column */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
              <ResilientImage
                src={COMPANY_INFO.heroImage}
                alt="Large two-story Nova Scotia home featuring deep navy lap siding, architectural shingle roof, double garage, and timber front porch"
                fallbackTitle="ScotiaHandy Construction — Nova Scotia Residential Exterior Work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-width featured services & direct contact strip below hero split */}
        <div className="mt-10 lg:mt-14 bg-white border border-slate-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {FEATURED_STRIP.map((item) => (
            <a
              key={item.title}
              href="#services"
              onClick={() => onSelectService?.(item.service)}
              className="group p-5 sm:p-6 hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1B1E54]"
            >
              <p className="font-display font-semibold text-base text-[#1B1E54] group-hover:text-[#A36200] transition-colors">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
            </a>
          ))}

          <div className="p-5 sm:p-6 bg-[#1B1E54] text-white sm:rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl flex flex-col justify-center">
            <p className="text-xs font-medium text-slate-200">
              Speak Directly with {COMPANY_INFO.owner} ({COMPANY_INFO.role})
            </p>
            <a
              href={COMPANY_INFO.phoneHref}
              className="mt-1 font-display font-bold text-lg text-[#F29D12] hover:text-white transition-colors tabular-nums"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
