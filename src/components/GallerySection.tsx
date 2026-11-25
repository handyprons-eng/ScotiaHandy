import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, ServiceCategory } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

const FILTER_OPTIONS: Array<'All' | ServiceCategory> = [
  'All',
  'Siding',
  'Roofing',
  'Decks',
  'Sheds',
  'Gutters',
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'All' | ServiceCategory>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#F7F8FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#A36200]">Project Gallery</p>
            <h2
              className="mt-2 font-display font-bold text-[#1B1E54] tracking-tight text-3xl sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Big Homes. Clean Craft.
            </h2>
            <p className="mt-2.5 text-base text-slate-600 leading-relaxed">
              Filter by trade or tap any home for a closer look.
            </p>
          </div>

          {/* Functional category filter buttons */}
          <div
            role="group"
            aria-label="Filter gallery by trade"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54] ${
                    isActive
                      ? 'bg-[#1B1E54] text-white'
                      : 'text-slate-600 hover:text-[#1B1E54] hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group text-left bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#1B1E54]/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1E54] cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackTitle={item.title}
                  className={`w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200 ${
                    item.imagePositionClass || 'object-center'
                  }`}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-medium text-slate-500">
                  <span className="text-[#A36200] font-semibold">{item.category}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>{item.location}</span>
                </p>
                <h3 className="mt-1.5 font-display font-bold text-lg text-[#1B1E54] group-hover:text-[#A36200] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox preview modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/75 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden border border-slate-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  <span className="text-[#A36200] font-semibold">{selectedItem.category}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>{selectedItem.location}</span>
                </p>
                <h3
                  id="gallery-modal-title"
                  className="font-display font-bold text-lg text-[#1B1E54]"
                >
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close project preview"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#1B1E54] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="aspect-[16/10] w-full bg-slate-100">
              <ResilientImage
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                fallbackTitle={selectedItem.title}
                className={`w-full h-full object-cover ${
                  selectedItem.imagePositionClass || 'object-center'
                }`}
              />
            </div>

            <div className="px-5 py-4 bg-white">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
