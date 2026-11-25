import { COMPANY_INFO } from '../data/siteData';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              aria-label={COMPANY_INFO.name}
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1E54] rounded"
            >
              <img
                src={COMPANY_INFO.logoPath}
                alt={COMPANY_INFO.name}
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Residential siding, roofing, decks, sheds, and gutters serving
              homeowners across {COMPANY_INFO.serviceAreaShort}.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3">
            <h2 className="font-display font-semibold text-sm text-[#1B1E54]">
              Navigation
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#home" className="hover:text-[#1B1E54] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1B1E54] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1B1E54] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#1B1E54] transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#1B1E54] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1B1E54] transition-colors">
                  Request Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Local SEO Contact & Service Area block */}
          <div className="md:col-span-4">
            <h2 className="font-display font-semibold text-sm text-[#1B1E54]">
              Contact &amp; Service Area
            </h2>
            <address className="not-italic mt-3 space-y-2 text-sm text-slate-600">
              <p className="font-semibold text-[#1B1E54]">
                {COMPANY_INFO.name} · {COMPANY_INFO.owner} ({COMPANY_INFO.role})
              </p>
              <p>
                Phone:{' '}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-medium text-[#1B1E54] hover:text-[#A36200] tabular-nums"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-medium text-[#1B1E54] hover:text-[#A36200] break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>Service Area: {COMPANY_INFO.serviceAreaShort}</p>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.locationSummary}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Serving Nova Scotia
            homeowners.
          </p>
          <p>{COMPANY_INFO.serviceAreaShort}</p>
        </div>
      </div>
    </footer>
  );
}
