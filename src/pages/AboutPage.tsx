import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, ShieldCheck, Sparkles, MapPin, Flame } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { TRAINERS_DATA, BUSINESS_INFO } from '../data/gymData';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const AboutPage: React.FC = () => {
  const { navigate, openTrialModal } = useRouter();

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Page Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id="about-hero">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#28282B] border-2 border-[#ECDFCC] p-1 shadow-[0_0_30px_rgba(236,223,204,0.25)] flex items-center justify-center overflow-hidden">
            <img
              src={BUSINESS_INFO.logo}
              alt="Optimum Health Gym Logo"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[11px] font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FACILITY DOSSIER • INDORE HQ</span>
          </div>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECDFCC] font-display tracking-tight uppercase">
          OUR MISSION: SCIENCE-BACKED <br />
          <span className="text-[#ECDFCC] drop-shadow-[0_0_25px_rgba(236,223,204,0.3)]">
            ATHLETIC PERFORMANCE
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#ECDFCC]/80 max-w-3xl mx-auto leading-relaxed font-normal">
          Founded in Pearl Business Park near Vishnupuri iBUS stop, Optimum Health Gym was engineered to replace outdated fitness myths with genuine biomechanical science, Olympic lifting setups, and clinical nutrition in Indore.
        </p>
      </section>

      {/* 2. Origin Story & Founder Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="origin-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative z-20 min-w-0 space-y-6 max-w-[560px]">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#697565] uppercase tracking-widest">
                ESTABLISHED WITH PURPOSE
              </span>
              <h2 className="max-w-[540px] break-words text-2xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] leading-[0.98] font-extrabold text-[#ECDFCC] font-display uppercase">
                <span className="inline-block whitespace-nowrap text-[1.35rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem]">REVOLUTIONIZING</span>{" "}INDORE'S ATHLETIC ECOSYSTEM
              </h2>
            </div>

            <p className="text-sm text-[#ECDFCC]/80 leading-relaxed">
              Bhavarkuan is the academic and youth engine of Indore. For years, students and professionals were limited to dark basement gyms or high-priced commercial clubs without qualified biomechanical guidance.
            </p>

            <p className="text-sm text-[#ECDFCC]/80 leading-relaxed">
              Optimum Health Gym was architected in <strong>Pearl Business Park</strong> to deliver an uncompromising training arena: 10,000 square feet of world-class imported strength machinery, Olympic lifting platforms, clean locker rooms, and certified sports nutritionists under one roof.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#3C3D37] border border-[#697565]">
                <div className="text-3xl font-extrabold text-[#ECDFCC] font-mono">
                  <AnimatedCounter value="100%" />
                </div>
                <div className="text-xs text-[#697565] mt-1 font-mono uppercase">Certified K11 / ACE Coaches</div>
              </div>
              <div className="p-4 rounded-xl bg-[#3C3D37] border border-[#697565]">
                <div className="text-3xl font-extrabold text-[#ECDFCC] font-mono">
                  <AnimatedCounter value="10,000" />
                </div>
                <div className="text-xs text-[#697565] mt-1 font-mono uppercase">Sq. Ft. Air-Conditioned Floor</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative z-0 min-w-0 lg:pl-2">
            <div className="relative rounded-3xl overflow-hidden border border-[#697565] shadow-2xl shadow-[#28282B]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="Optimum Health Gym Floor at Pearl Business Park Indore"
                className="w-full h-[440px] object-cover filter grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28282B] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#28282B]/90 backdrop-blur-xl border border-[#697565] z-10">
                <p className="text-xs font-mono font-bold text-[#ECDFCC] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ECDFCC]" />
                  <span>3, Pearl Business Park, Vishnupuri iBUS Stop, Indore</span>
                </p>
                <p className="text-[11px] text-[#697565] mt-1">
                  Built to international biomechanical standards with dedicated deadlift platforms and sprint turf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facility Highlights & Dedicated Zones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="facility-zones">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest">
            <span>INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
            FACILITY ZONES & SECTORS
          </h2>
          <p className="text-sm text-[#ECDFCC]/80">
            Engineered so lifters, cardio runners, and functional athletes maintain seamless flow without equipment bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Zone Alpha: Free Weights & Power Rigs</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              4 heavy-duty squat racks, calibrated Olympic bumper plates, dumbbell rack spanning 2.5kg to 50kg, and dedicated rubber sound-dampened deadlift drop platforms.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Zone Beta: Cardio & HIIT Matrix</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              Matrix commercial 15% incline treadmills, Stairmaster stepmills, Concept2 rowing ergometers, and AirBikes designed for metabolic acceleration and VO2 max improvement.
            </p>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-7 space-y-4 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">Zone Gamma: Clinical Diagnostics & Steam</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              InBody 270 body composition analysis room, hygienic private changing suites, secure lockers, and rejuvenating post-workout steam sauna facilities.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Trainers Dossier */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="coaching-team">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            MASTER FACULTY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display uppercase">
            CERTIFIED COACHING ROSTER
          </h2>
          <p className="text-sm text-[#ECDFCC]/80">
            Meet the experienced coaches who guide every repetition and milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS_DATA.map((trainer) => (
            <div key={trainer.id} className="bg-[#3C3D37] rounded-2xl overflow-hidden border border-[#697565] flex flex-col justify-between hover:border-[#ECDFCC] transition-all">
              <div className="h-64 overflow-hidden relative bg-[#28282B]">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top filter grayscale contrast-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3D37] via-transparent to-transparent"></div>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-lg font-bold text-[#ECDFCC] font-display">{trainer.name}</h4>
                <p className="text-xs font-mono text-[#697565]">{trainer.role}</p>
                <p className="text-xs text-[#ECDFCC]/70 line-clamp-2">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3C3D37] rounded-3xl p-8 sm:p-12 border border-[#697565] text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            EXPERIENCE THE FACILITY IN PERSON
          </h2>
          <p className="text-xs sm:text-sm text-[#ECDFCC]/80 max-w-2xl mx-auto">
            Claim your 1-Day Trial Pass with InBody scan or visit us today at Pearl Business Park, Vishnupuri, Indore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openTrialModal('About Page CTA')}
              className="px-8 py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#ECDFCC]/20 cursor-pointer transition-all"
            >
              Claim Free Trial Pass
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] font-bold text-xs uppercase tracking-wider border border-[#697565] cursor-pointer transition-all"
            >
              View Membership Rates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
