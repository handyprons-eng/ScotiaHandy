import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceCategory } from './data/siteData';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Siding');

  const handleRequestEstimateForService = (
    category: ServiceCategory | 'Other'
  ) => {
    setSelectedProjectType(category);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B1E54] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero onSelectService={(service) => setSelectedProjectType(service)} />
        <ServicesSection
          onRequestEstimateForService={handleRequestEstimateForService}
        />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection selectedProjectType={selectedProjectType} />
      </main>

      <Footer />
    </div>
  );
}
