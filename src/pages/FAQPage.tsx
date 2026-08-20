import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, ChevronDown, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/gymData';
import { useRouter } from '../context/RouterContext';

export const FAQPage: React.FC = () => {
  const { openTrialModal } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const categories = ['All', 'Membership', 'Training', 'Nutrition', 'Beginners'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id="faq-hero">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[11px] font-mono uppercase tracking-widest"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>KNOWLEDGE TERMINAL & FAQ</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <p className="text-base sm:text-lg text-[#ECDFCC]/80 max-w-3xl mx-auto leading-relaxed font-normal">
          Everything regarding membership rates, operating hours, 1-on-1 coaching, pure vegetarian Indian macros, and our Bhavarkuan facility in Indore.
        </p>

        {/* Live Search Bar */}
        <div className="max-w-2xl mx-auto relative pt-2">
          <Search className="absolute left-4 top-1/2 translate-y-[-30%] w-5 h-5 text-[#697565]" />
          <input
            type="text"
            placeholder="Search questions (e.g. trial pass, student discount, timings, vegetarian, freeze)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-4 bg-[#3C3D37] border border-[#697565] focus:border-[#ECDFCC] rounded-2xl text-[#ECDFCC] text-xs sm:text-sm font-sans placeholder:text-[#697565] shadow-xl focus:outline-none"
            id="faq-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 translate-y-[-30%] text-xs font-mono text-[#697565] hover:text-[#ECDFCC]"
            >
              CLEAR
            </button>
          )}
        </div>
      </section>

      {/* 2. Category Filter Pills */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#ECDFCC] text-[#28282B] shadow-lg shadow-[#ECDFCC]/20'
                  : 'bg-[#3C3D37] text-[#697565] hover:text-[#ECDFCC] border border-[#697565]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Animated Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4" id="faq-accordion-list">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#3C3D37] rounded-2xl border border-[#697565] space-y-3">
            <p className="text-sm font-mono text-[#697565]">No matching questions found for "{searchQuery}".</p>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#ECDFCC] hover:underline"
            >
              Ask our desk directly on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#3C3D37] rounded-2xl border border-[#697565] hover:border-[#ECDFCC] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#28282B] border border-[#697565] text-[10px] font-mono text-[#ECDFCC] uppercase shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#ECDFCC] font-display">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-lg bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC] shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-[#ECDFCC]/80 font-sans leading-relaxed border-t border-[#697565]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </section>

      {/* 4. Instant Help Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#3C3D37] border border-[#697565] text-center space-y-4 shadow-2xl">
          <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">
            HAVE A QUESTION NOT COVERED HERE?
          </h3>
          <p className="text-xs text-[#ECDFCC]/70 max-w-xl mx-auto">
            Our floor trainers and desk managers are available continuously from 06:00 AM to 10:00 PM IST.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] border border-[#697565] font-mono text-xs uppercase font-bold flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => openTrialModal('FAQ Page Pass CTA')}
              className="px-6 py-3 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-mono text-xs uppercase font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Claim Free Trial</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
