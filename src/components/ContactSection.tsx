import { FormEvent, useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { COMPANY_INFO, ServiceCategory } from '../data/siteData';

interface ContactSectionProps {
  selectedProjectType: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  location?: string;
  details?: string;
}

const PROJECT_OPTIONS: Array<ServiceCategory | 'Multiple / Other'> = [
  'Siding',
  'Roofing',
  'Decks',
  'Sheds',
  'Gutters',
  'Multiple / Other',
];

const LOCATION_OPTIONS = [
  'HRM (Halifax / Dartmouth / Bedford / Sackville)',
  'East Hants (Elmsdale / Enfield / Lantz / Shubenacadie)',
  'Truro & Bible Hill Area',
  'Other Nova Scotia Community',
];

export function ContactSection({ selectedProjectType }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: selectedProjectType || 'Siding',
    location: LOCATION_OPTIONS[0],
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedProjectType) {
      setForm((prev) => ({
        ...prev,
        projectType:
          selectedProjectType === 'Other'
            ? 'Multiple / Other'
            : selectedProjectType,
      }));
    }
  }, [selectedProjectType]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      nextErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }
    if (!form.projectType) {
      nextErrors.projectType = 'Please choose a project type.';
    }
    if (!form.location.trim()) {
      nextErrors.location = 'Please select or enter your location.';
    }
    if (!form.details.trim() || form.details.trim().length < 10) {
      nextErrors.details =
        'Please share a few details about your project (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setCopied(false);
    setSubmittedData({ ...form });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setCopied(false);
    setForm({
      name: '',
      email: '',
      phone: '',
      projectType: 'Siding',
      location: LOCATION_OPTIONS[0],
      details: '',
    });
  };

  const buildSummaryText = (data: FormState) =>
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Project Type: ${data.projectType}`,
      `Location: ${data.location}`,
      '',
      'Project Details:',
      data.details,
    ].join('\n');

  const buildMailtoHref = (data: FormState) => {
    const subject = `Free Estimate Request — ${data.projectType} (${data.location})`;
    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildSummaryText(data))}`;
  };

  const handleCopySummary = async () => {
    if (!submittedData) return;
    try {
      await navigator.clipboard.writeText(buildSummaryText(submittedData));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#F7F8FB]"
    >
      {/* Subtle carpentry craft watermark behind contact wording */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={COMPANY_INFO.watermarkCarpentry}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8FB]/92 via-[#F7F8FB]/90 to-[#F7F8FB]/96" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column: Direct contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-sm font-semibold text-[#A36200]">
                Free On-Site Estimates
              </p>
              <h2
                className="mt-2 font-display font-bold text-[#1B1E54] tracking-tight text-3xl sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Start Your Project Today
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Call {COMPANY_INFO.owner} directly or send your project details below
                for a free, straightforward quote.
              </p>
            </div>

            <div className="bg-white/95 border border-slate-200 rounded-xl p-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <Phone
                  className="w-5 h-5 text-[#A36200] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Phone ({COMPANY_INFO.owner}, {COMPANY_INFO.role})
                  </p>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="mt-0.5 block font-display font-bold text-lg text-[#1B1E54] hover:text-[#A36200] transition-colors tabular-nums"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {COMPANY_INFO.phoneNote}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <Mail
                  className="w-5 h-5 text-[#A36200] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-500">Email</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-0.5 block text-base font-semibold text-[#1B1E54] hover:text-[#A36200] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {COMPANY_INFO.emailNote}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <MapPin
                  className="w-5 h-5 text-[#A36200] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Service Area
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-[#1B1E54]">
                    {COMPANY_INFO.serviceAreaShort}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {COMPANY_INFO.locationSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Estimate request form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              {submittedData ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-[#A36200] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display font-bold text-2xl text-[#1B1E54]">
                        Estimate Summary Ready
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        Thank you, {submittedData.name}. Open your summary in your
                        email app, copy the details, or call{' '}
                        <a
                          href={COMPANY_INFO.phoneHref}
                          className="font-semibold text-[#1B1E54] underline"
                        >
                          {COMPANY_INFO.phoneDisplay}
                        </a>{' '}
                        to reach {COMPANY_INFO.owner}.
                      </p>
                    </div>
                  </div>

                  <dl className="bg-[#F7F8FB] border border-slate-200 rounded-lg p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-slate-500 font-medium">Name</dt>
                      <dd className="mt-0.5 font-semibold text-[#1B1E54]">
                        {submittedData.name}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-medium">Phone</dt>
                      <dd className="mt-0.5 font-semibold text-[#1B1E54] tabular-nums">
                        {submittedData.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-medium">Email</dt>
                      <dd className="mt-0.5 font-semibold text-[#1B1E54] break-all">
                        {submittedData.email}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-medium">Project Type</dt>
                      <dd className="mt-0.5 font-semibold text-[#1B1E54]">
                        {submittedData.projectType}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-slate-500 font-medium">Location</dt>
                      <dd className="mt-0.5 font-semibold text-[#1B1E54]">
                        {submittedData.location}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-slate-500 font-medium">Project Details</dt>
                      <dd className="mt-0.5 text-slate-700 whitespace-pre-line">
                        {submittedData.details}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref(submittedData)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#1B1E54] bg-[#F29D12] hover:bg-[#DC8B0A] rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      Open in Email App
                    </a>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1B1E54] bg-[#F7F8FB] border border-slate-300 hover:border-[#1B1E54] rounded-lg transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#A36200]" aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          Copy Summary
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-[#1B1E54] rounded-lg transition-colors cursor-pointer"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="estimate-name"
                        className="block text-sm font-semibold text-[#1B1E54]"
                      >
                        Full Name
                      </label>
                      <input
                        id="estimate-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, name: e.target.value }))
                        }
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder="Your name"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1E54] focus:border-[#1B1E54]"
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="estimate-phone"
                        className="block text-sm font-semibold text-[#1B1E54]"
                      >
                        Phone Number
                      </label>
                      <input
                        id="estimate-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        placeholder="902-555-0199"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1E54] focus:border-[#1B1E54]"
                      />
                      {errors.phone && (
                        <p id="error-phone" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="estimate-email"
                        className="block text-sm font-semibold text-[#1B1E54]"
                      >
                        Email Address
                      </label>
                      <input
                        id="estimate-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder="you@example.com"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1E54] focus:border-[#1B1E54]"
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="estimate-project-type"
                        className="block text-sm font-semibold text-[#1B1E54]"
                      >
                        Project Type
                      </label>
                      <select
                        id="estimate-project-type"
                        name="projectType"
                        value={form.projectType}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            projectType: e.target.value,
                          }))
                        }
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1E54] focus:border-[#1B1E54]"
                      >
                        {PROJECT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="estimate-location"
                      className="block text-sm font-semibold text-[#1B1E54]"
                    >
                      Location / Community
                    </label>
                    <select
                      id="estimate-location"
                      name="location"
                      value={form.location}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, location: e.target.value }))
                      }
                      className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1E54] focus:border-[#1B1E54]"
                    >
                      {LOCATION_OPTIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="estimate-details"
                      className="block text-sm font-semibold text-[#1B1E54]"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="estimate-details"
                      name="details"
                      rows={4}
                      required
                      value={form.details}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, details: e.target.value }))
                      }
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? 'error-details' : undefined}
                      placeholder="Briefly describe what you need done (approximate size, material preference, or best time to reach you)."
                      className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1E54] focus:border-[#1B1E54]"
                    />
                    {errors.details && (
                      <p id="error-details" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.details}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#1B1E54] bg-[#F29D12] hover:bg-[#DC8B0A] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54]"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Request a Free Estimate
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
