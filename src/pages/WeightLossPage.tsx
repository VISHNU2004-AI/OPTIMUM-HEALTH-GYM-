import React from 'react';
import { motion } from 'motion/react';
import { Flame, CheckCircle2, Sparkles } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/gymData';

export const WeightLossPage: React.FC = () => {
  const { openTrialModal } = useRouter();
  const service = SERVICES_LIST.find((s) => s.id === 'weight-loss')!;

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="fatloss-hero">
        <div className="relative rounded-3xl overflow-hidden bg-[#3C3D37] border border-[#697565] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
              alt="Fat Loss & Transformation Optimum Health Gym Indore"
              className="w-full h-full object-cover object-center opacity-20 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#28282B] via-[#28282B]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28282B] border border-[#697565] text-[#ECDFCC] text-[11px] font-mono uppercase tracking-widest"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>MODULE: FAT LOSS & BODY TRANSFORMATION</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight leading-tight">
              SCIENTIFIC FAT LOSS & LEAN METABOLIC RESET
            </h1>

            <p className="text-sm sm:text-base text-[#ECDFCC]/80 leading-relaxed font-normal">
              Drop stubborn visceral fat without starvation diets or losing hard-earned muscle. Structured 4-phase periodization combining high-density HIIT, strength training, and tailored Indian calorie deficits.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openTrialModal('Fat Loss Protocol Consultation')}
                className="px-8 py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#ECDFCC]/20 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Fat Loss Assessment</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] border border-[#697565] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>WhatsApp Nutritionist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-Phase Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="fatloss-roadmap">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            PERIODIZED BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            THE 4-PHASE TRANSFORMATION TIMELINE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="text-xs font-mono font-bold text-[#ECDFCC]">PHASE 01 • WEEKS 1-3</div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Metabolic Conditioning</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Correct movement mechanics, establish circadian rhythm, and stabilize resting insulin levels with manageable 300 kcal deficits.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="text-xs font-mono font-bold text-[#ECDFCC]">PHASE 02 • WEEKS 4-8</div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Accelerated Fat Burn</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Introduce high-energy turf sprints, Concept2 rowing intervals, and progressive resistance to elevate EPOC calorie expenditure.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="text-xs font-mono font-bold text-[#ECDFCC]">PHASE 03 • WEEKS 9-12</div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Hypertrophy & Definition</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Refine waist-to-shoulder ratios and preserve lean muscle mass through heavy compound volume and elevated protein intake.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="text-xs font-mono font-bold text-[#ECDFCC]">PHASE 04 • SUSTAINED</div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Reverse Diet & Lifestyle</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Gradually ramp up calories to new maintenance level to prevent rebound weight gain and lock in your new baseline physique.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Program Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="fatloss-specs">
        <div className="bg-[#3C3D37] rounded-3xl p-8 sm:p-12 border border-[#697565] space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ECDFCC] font-display uppercase">
            WHAT EVERY TRANSFORMATION CLIENT RECEIVES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#28282B] border border-[#697565]">
                <CheckCircle2 className="w-5 h-5 text-[#ECDFCC] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#ECDFCC]/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
