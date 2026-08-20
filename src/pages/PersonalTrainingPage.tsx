import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, Phone } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO, PT_PACKAGES } from '../data/gymData';

export const PersonalTrainingPage: React.FC = () => {
  const { openTrialModal } = useRouter();

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pt-hero">
        <div className="relative rounded-3xl overflow-hidden bg-[#3C3D37] border border-[#697565] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80"
              alt="Personal Training at Optimum Health Gym Indore"
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
              <UserCheck className="w-3.5 h-3.5" />
              <span>MODULE: 1-ON-1 BIOMECHANICAL COACHING</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight leading-tight">
              1-ON-1 PERSONAL TRAINING & PHYSIQUE MASTERY
            </h1>

            <p className="text-sm sm:text-base text-[#ECDFCC]/80 leading-relaxed font-normal">
              Eliminate guesswork and injuries. Partner with certified K11/ACE coaches who engineer an exact periodized roadmap around your biomechanics, mobility profile, and daily schedule in Indore.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openTrialModal('1-on-1 Personal Training Consultation')}
                className="px-8 py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#ECDFCC]/20 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                id="book-pt-trial-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 1-on-1 PT Assessment</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-4 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] font-mono text-xs uppercase tracking-wider border border-[#697565] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ECDFCC]" />
                <span>Call Head Coach</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 3-Step Coaching Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="pt-protocol">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            SCIENTIFIC SUPERVISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            THE 3-TIER BIOMECHANICAL METHODOLOGY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC] font-mono font-bold text-sm">
              01
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Biomechanical & InBody 270 Baseline</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              We screen spinal posture, shoulder mobility, hip hinging, and compute visceral fat, segmental lean mass, and baseline metabolic rate.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC] font-mono font-bold text-sm">
              02
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Customized Progressive Overload</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Every repetition is spotted and filmed for movement optimization. We adjust micro-loads and volume curves to break through strength plateaus safely.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC] font-mono font-bold text-sm">
              03
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Nutrition & Calorie Accountability</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Daily WhatsApp macro tracking and grocery swaps. Weekly body composition reviews ensure you shed fat while gaining lean tissue.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PT Packages Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="pt-packages">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            SESSION MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            1-ON-1 COACHING PACKAGES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PT_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-[#3C3D37] rounded-2xl p-7 space-y-5 border flex flex-col justify-between hover:border-[#ECDFCC] transition-all ${
                pkg.popular
                  ? 'border-[#ECDFCC] shadow-[0_0_30px_rgba(236,223,204,0.15)]'
                  : 'border-[#697565]'
              }`}
            >
              <div className="space-y-3">
                {pkg.popular && (
                  <span className="px-3 py-0.5 rounded-full bg-[#ECDFCC] text-[#28282B] text-[9.5px] font-mono font-bold uppercase tracking-widest">
                    RECOMMENDED TRANSFORMATION
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#ECDFCC] font-display">{pkg.sessions}</h3>
                <div className="text-3xl font-extrabold font-mono text-[#ECDFCC]">{pkg.price}</div>
                <div className="text-xs font-mono text-[#697565]">{pkg.duration}</div>
                <p className="text-xs text-[#ECDFCC]/80 leading-relaxed pt-2">{pkg.desc}</p>
              </div>

              <button
                onClick={() => openTrialModal(`PT Package: ${pkg.sessions}`)}
                className="w-full py-3.5 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#ECDFCC]/20 transition-all cursor-pointer"
              >
                Enroll In Package
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
