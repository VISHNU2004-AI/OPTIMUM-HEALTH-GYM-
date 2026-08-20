import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Shield, Award, CheckCircle2, Sparkles, Phone, Zap } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/gymData';

export const StrengthConditioningPage: React.FC = () => {
  const { openTrialModal } = useRouter();
  const service = SERVICES_LIST.find((s) => s.id === 'strength-conditioning')!;

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="strength-hero">
        <div className="relative rounded-3xl overflow-hidden bg-[#3C3D37] border border-[#697565] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
              alt="Strength and Conditioning Optimum Health Gym Indore"
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
              <Dumbbell className="w-3.5 h-3.5" />
              <span>MODULE: STRENGTH & CONDITIONING ARENA</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight leading-tight">
              OLYMPIC RIGS & UNCOMPROMISING POWER
            </h1>

            <p className="text-sm sm:text-base text-[#ECDFCC]/80 leading-relaxed font-normal">
              Built for powerlifters, bodybuilders, and athletes who demand heavy iron. 4 full power cages, calibrated bumper plates, sound-isolated deadlift drop zones, and Prowler sled turf in Bhavarkuan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openTrialModal('Strength Arena Floor Trial')}
                className="px-8 py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#ECDFCC]/20 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Heavy Floor Pass</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-4 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] font-mono text-xs uppercase tracking-wider border border-[#697565] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ECDFCC]" />
                <span>Inquire About Equipment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Equipment Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="strength-specs">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            HARDWARE SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            COMPETITION-GRADE BARBELL & MACHINE MATRIX
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Power Cages & Drop Platforms</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              4 heavy-gauge steel cages with micro-spaced J-hooks, laser-cut safety spotter arms, and multi-grip pull-up bars.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Dumbbells 2.5kg to 50kg</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Commercial urethane-coated dumbbell pairs in 2.5 kg increments to accommodate precise progressive overload on presses and rows.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Biomechanical Plate Loaders</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Hack Squat, 45-degree Leg Press, Iso-Lateral Lat Pulldown, and Incline Chest Press designed for maximum muscle fiber recruitment without joint shear.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Program Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="strength-benefits">
        <div className="bg-[#3C3D37] rounded-3xl p-8 sm:p-12 border border-[#697565] space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ECDFCC] font-display uppercase">
            STRENGTH & CONDITIONING MEMBERSHIP INCLUDES
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
