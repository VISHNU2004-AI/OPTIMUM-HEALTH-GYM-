import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';
import { useRouter } from '../context/RouterContext';

export const GalleryPage: React.FC = () => {
  const { openTrialModal } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Gym Floor',
    'Strength & Weights',
    'Cardio Zone',
    'Transformations',
    'Coaching',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const currentItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] ?? null : null;

  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveLightboxIndex(null);
      if (event.key === 'ArrowLeft') handlePrev();
      if (event.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex]);

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id="gallery-hero">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[11px] font-mono uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>VISUAL TELEMETRY & ARENA DOSSIER</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
          ARENA & FACILITY GALLERY
        </h1>

        <p className="text-base sm:text-lg text-[#ECDFCC]/80 max-w-3xl mx-auto leading-relaxed font-normal">
          Explore the 10,000 sq.ft strength sanctuary at Pearl Business Park, Vishnupuri, Indore. High-density equipment, Olympic lifting platforms, and verified transformation milestones.
        </p>
      </section>

      {/* 2. Interactive Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="gallery-filter-tabs">
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto p-1.5 rounded-2xl bg-[#3C3D37] border border-[#697565]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveLightboxIndex(null);
              }}
              className={`relative px-4 py-2.5 rounded-xl font-mono text-xs uppercase font-bold transition-all cursor-pointer ${
                selectedCategory === category ? 'text-[#28282B]' : 'text-[#697565] hover:text-[#ECDFCC]'
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="galleryActiveTab"
                  className="absolute inset-0 bg-[#ECDFCC] rounded-xl shadow-lg shadow-[#ECDFCC]/20"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Responsive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="gallery-grid">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-[#3C3D37] border border-[#697565] hover:border-[#ECDFCC] aspect-[4/3] cursor-pointer shadow-xl"
                onClick={() => setActiveLightboxIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveLightboxIndex(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.title} in gallery viewer`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />

                {/* Overlay frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#28282B] via-[#28282B]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#28282B]/90 backdrop-blur-md border border-[#697565] text-[10px] font-mono text-[#ECDFCC] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#28282B]/90 backdrop-blur-md border border-[#697565] flex items-center justify-center text-[#ECDFCC] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#ECDFCC]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="text-base font-bold text-[#ECDFCC] font-display group-hover:text-[#ECDFCC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#ECDFCC]/70 line-clamp-1">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#28282B]/95 backdrop-blur-xl"
            onClick={() => setActiveLightboxIndex(null)}
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#3C3D37] rounded-3xl overflow-hidden border border-[#697565] shadow-2xl shadow-[#28282B]"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-lightbox-title"
            >
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#28282B] border border-[#697565] text-[#ECDFCC] flex items-center justify-center hover:bg-[#ECDFCC] hover:text-[#28282B] transition-all cursor-pointer"
                aria-label="Close gallery viewer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[70vh] bg-[#28282B] flex items-center justify-center">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-auto max-h-[70vh] object-contain filter grayscale contrast-110"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#28282B]/80 border border-[#697565] text-[#ECDFCC] flex items-center justify-center hover:bg-[#ECDFCC] hover:text-[#28282B] transition-all cursor-pointer"
                  aria-label="View previous gallery image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#28282B]/80 border border-[#697565] text-[#ECDFCC] flex items-center justify-center hover:bg-[#ECDFCC] hover:text-[#28282B] transition-all cursor-pointer"
                  aria-label="View next gallery image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-[#3C3D37] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#697565]/40">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#697565] uppercase">{currentItem.category}</div>
                  <h4 id="gallery-lightbox-title" className="text-xl font-bold text-[#ECDFCC] font-display">{currentItem.title}</h4>
                  <p className="text-xs text-[#ECDFCC]/80">{currentItem.caption}</p>
                </div>

                <button
                  onClick={() => {
                    setActiveLightboxIndex(null);
                    openTrialModal('Gallery Lightbox Pass CTA');
                  }}
                  className="px-6 py-3 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer"
                >
                  Experience in Person
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
