import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Flame, UserCheck, Apple, ArrowRight, Star, ShieldCheck, Zap, Phone, Sparkles, Calculator, Activity, ChevronRight, Trophy } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO, SERVICES_LIST, TRAINERS_DATA, TESTIMONIALS_DATA } from '../data/gymData';
import { CyberGridCanvas } from '../components/CyberGridCanvas';
import { CyberGlitchText } from '../components/CyberGlitchText';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const HomePage: React.FC = () => {
  const { navigate, openTrialModal } = useRouter();

  // Interactive Quick Cyber BMI & Metabolic Terminal Widget
  const [calcWeight, setCalcWeight] = useState(74);
  const [calcHeight, setCalcHeight] = useState(175);
  const [calcAge, setCalcAge] = useState(26);
  const [calcGender, setCalcGender] = useState<'male' | 'female'>('male');
  const [calcGoal, setCalcGoal] = useState<'loss' | 'muscle' | 'maintain'>('loss');

  const bmi = (calcWeight / ((calcHeight / 100) * (calcHeight / 100))).toFixed(1);
  const bmiCategory =
    parseFloat(bmi) < 18.5
      ? 'Underweight'
      : parseFloat(bmi) < 25
      ? 'Optimal Physique'
      : parseFloat(bmi) < 30
      ? 'Overweight'
      : 'Obese Range';

  const bmr = Math.round(
    calcGender === 'male'
      ? 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge + 5
      : 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge - 161
  );

  const tdeeEst = Math.round(bmr * 1.5);
  const targetCalories =
    calcGoal === 'loss' ? tdeeEst - 500 : calcGoal === 'muscle' ? tdeeEst + 350 : tdeeEst;
  const targetProtein = Math.round(calcWeight * (calcGoal === 'muscle' ? 2.0 : 1.7));

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. ULTRA-FUTURISTIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#28282B]" id="hero-section">
        {/* Interactive Neural Cyber Grid & Particle Canvas */}
        <CyberGridCanvas particleCount={55} interactive={true} className="absolute inset-0 z-0" />

        {/* Ambient Darkened Hero Gym Backdrop with Cyber Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
            alt="Optimum Health Gym Indore Floor"
            className="w-full h-full object-cover object-center opacity-10 filter grayscale contrast-150"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#28282B] via-[#28282B]/80 to-transparent"></div>
          <div className="absolute inset-0 cyber-grid-pattern opacity-20"></div>
        </div>

        {/* Cyber Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#ECDFCC]/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Cyber Status Badge & Official Logo Emblem */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#28282B] border-2 border-[#ECDFCC] p-1 shadow-[0_0_35px_rgba(236,223,204,0.25)] flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={BUSINESS_INFO.logo}
                alt="Optimum Health Gym Official Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3C3D37] border border-[#697565] shadow-lg shadow-[#28282B] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ECDFCC] animate-ping"></span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#ECDFCC]">
                <span>SYSTEM ONLINE:</span> BHAVARKUAN • INDORE MP
              </span>
            </div>
          </motion.div>

          {/* Main Kinetic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#ECDFCC] font-display uppercase leading-[0.95]">
              EVOLVE YOUR <br />
              <span className="text-[#ECDFCC] drop-shadow-[0_0_25px_rgba(236,223,204,0.3)]">
                <CyberGlitchText text="HUMAN POTENTIAL" />
              </span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-[#ECDFCC]/80 max-w-3xl mx-auto font-normal leading-relaxed pt-2">
              Indore’s 10,000 sq.ft hyper-modern strength arena. Equipped with Olympic platforms, biomechanically calibrated machinery, InBody 270 clinical diagnostics, and certified coaching at Pearl Business Park.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto sm:max-w-none"
          >
            <button
              onClick={() => openTrialModal('Free 1-Day Trial Pass')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ECDFCC] text-[#28282B] font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#ECDFCC]/20 hover:bg-[#ECDFCC]/90 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
              id="hero-book-trial-btn"
            >
              <Dumbbell className="w-5 h-5 text-[#28282B]" />
              <span>Claim Free 1-Day Pass</span>
            </button>

            <button
              onClick={() => navigate('/pricing')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#3C3D37] hover:bg-[#3C3D37]/80 text-[#ECDFCC] font-bold text-sm uppercase tracking-wider border border-[#697565] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer shadow-lg shadow-[#28282B]"
              id="hero-explore-pricing-btn"
            >
              <span>Explore Memberships</span>
              <ArrowRight className="w-4 h-4 text-[#ECDFCC]" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#28282B] hover:bg-[#3C3D37] text-[#ECDFCC] font-semibold text-sm border border-[#697565] transition-all flex items-center justify-center gap-2"
              id="hero-call-now-btn"
            >
              <Phone className="w-4 h-4 text-[#ECDFCC]" />
              <span className="font-mono text-xs">{BUSINESS_INFO.phone}</span>
            </a>
          </motion.div>

          {/* Floating Stat Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3 rounded-xl bg-[#3C3D37] border border-[#697565] backdrop-blur-md transition-all hover:translate-y-[-2px]">
              <div className="text-xs font-mono text-[#ECDFCC] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-[#ECDFCC]" />
                <span>4.1★ TOP GYM</span>
              </div>
              <p className="text-[11px] text-[#697565] mt-0.5">Highest rated in Bhavarkuan</p>
            </div>

            <div className="p-3 rounded-xl bg-[#3C3D37] border border-[#697565] backdrop-blur-md transition-all hover:translate-y-[-2px]">
              <div className="text-xs font-mono text-[#ECDFCC] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#ECDFCC]" />
                <span>100+ PRO MACHINES</span>
              </div>
              <p className="text-[11px] text-[#697565] mt-0.5">Olympic & ISO lateral rigs</p>
            </div>

            <div className="p-3 rounded-xl bg-[#3C3D37] border border-[#697565] backdrop-blur-md transition-all hover:translate-y-[-2px]">
              <div className="text-xs font-mono text-[#ECDFCC] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ECDFCC]" />
                <span>10,000 SQ.FT</span>
              </div>
              <p className="text-[11px] text-[#697565] mt-0.5">Clean air-conditioned floor</p>
            </div>

            <div className="p-3 rounded-xl bg-[#3C3D37] border border-[#697565] backdrop-blur-md transition-all hover:translate-y-[-2px]">
              <div className="text-xs font-mono text-[#ECDFCC] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                <Activity className="w-3.5 h-3.5 text-[#ECDFCC]" />
                <span>15+ K11/ACE COACHES</span>
              </div>
              <p className="text-[11px] text-[#697565] mt-0.5">Certified master trainers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY TELEMETRY METRIC COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="stats-section">
        <div className="bg-[#3C3D37] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-[#697565]">
          <div className="absolute top-0 left-0 right-0 h-[2px] cyber-laser-border"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#697565]/40">
            {BUSINESS_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx > 0 ? 'pt-4 lg:pt-0' : ''}`}>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display tracking-tight flex items-center justify-center gap-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-xs sm:text-sm font-mono font-medium text-[#697565] mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE (4 CYBER PROTOCOLS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="services-section">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest">
            <span>ENGINEERED BIOMECHANICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
            CORE TRAINING PROTOCOLS
          </h2>
          <p className="text-sm sm:text-base text-[#ECDFCC]/80">
            Precision resistance, high-velocity conditioning, and metabolic Indian nutrition. Select your protocol to view full system specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => {
            const getIcon = (name: string) => {
              switch (name) {
                case 'UserCheck':
                  return <UserCheck className="w-6 h-6 text-[#ECDFCC]" />;
                case 'Flame':
                  return <Flame className="w-6 h-6 text-[#ECDFCC]" />;
                case 'Dumbbell':
                  return <Dumbbell className="w-6 h-6 text-[#ECDFCC]" />;
                case 'Apple':
                  return <Apple className="w-6 h-6 text-[#ECDFCC]" />;
                default:
                  return <Zap className="w-6 h-6 text-[#ECDFCC]" />;
              }
            };

            return (
              <div
                key={service.id}
                className="bg-[#3C3D37] border border-[#697565] rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between relative hover:border-[#ECDFCC] transition-all"
                onClick={() => navigate(service.slug)}
              >
                {/* Visual Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3C3D37] via-[#3C3D37]/50 to-transparent"></div>
                  
                  {/* Protocol Badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#28282B] backdrop-blur-md border border-[#697565] shadow-lg">
                    {getIcon(service.iconName)}
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#28282B] backdrop-blur-md border border-[#697565] text-[10px] font-mono text-[#ECDFCC] uppercase tracking-wider">
                    MODULE: {service.id.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#ECDFCC] font-display group-hover:text-[#ECDFCC] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#697565] tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#ECDFCC]/80 leading-relaxed pt-1">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#697565]/40 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#697565] group-hover:text-[#ECDFCC] transition-colors">
                      EXPLORE PROTOCOL SPECS
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC] group-hover:bg-[#ECDFCC] group-hover:text-[#28282B] transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. INTERACTIVE CYBER BMI & METABOLIC HUD TERMINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="calculator-terminal">
        <div className="bg-[#3C3D37] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#697565] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ECDFCC]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28282B] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>METABOLIC TELEMETRY</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
                  BIOMETRIC & CALORIE HUD
                </h2>
                <p className="text-xs sm:text-sm text-[#ECDFCC]/80">
                  Input your telemetry to calculate baseline BMR, Total Daily Energy Expenditure, and optimal target calories for your transformation.
                </p>
              </div>

              {/* Gender & Goal Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[#697565] uppercase">Gender</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalcGender('male')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        calcGender === 'male'
                          ? 'bg-[#28282B] border-[#ECDFCC] text-[#ECDFCC]'
                          : 'bg-[#28282B]/40 border-[#697565] text-[#697565] hover:text-[#ECDFCC]'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setCalcGender('female')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        calcGender === 'female'
                          ? 'bg-[#28282B] border-[#ECDFCC] text-[#ECDFCC]'
                          : 'bg-[#28282B]/40 border-[#697565] text-[#697565] hover:text-[#ECDFCC]'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[#697565] uppercase">Primary Goal</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => setCalcGoal('loss')}
                      className={`py-2 text-[11px] font-bold rounded-lg border transition-all ${
                        calcGoal === 'loss'
                          ? 'bg-[#28282B] border-[#ECDFCC] text-[#ECDFCC]'
                          : 'bg-[#28282B]/40 border-[#697565] text-[#697565] hover:text-[#ECDFCC]'
                      }`}
                    >
                      Fat Loss
                    </button>
                    <button
                      onClick={() => setCalcGoal('muscle')}
                      className={`py-2 text-[11px] font-bold rounded-lg border transition-all ${
                        calcGoal === 'muscle'
                          ? 'bg-[#28282B] border-[#ECDFCC] text-[#ECDFCC]'
                          : 'bg-[#28282B]/40 border-[#697565] text-[#697565] hover:text-[#ECDFCC]'
                      }`}
                    >
                      Muscle
                    </button>
                    <button
                      onClick={() => setCalcGoal('maintain')}
                      className={`py-2 text-[11px] font-bold rounded-lg border transition-all ${
                        calcGoal === 'maintain'
                          ? 'bg-[#28282B] border-[#ECDFCC] text-[#ECDFCC]'
                          : 'bg-[#28282B]/40 border-[#697565] text-[#697565] hover:text-[#ECDFCC]'
                      }`}
                    >
                      Maintain
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                {/* Weight Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#697565]">Current Weight:</span>
                    <span className="text-[#ECDFCC] font-bold">{calcWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="140"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(Number(e.target.value))}
                    className="w-full accent-[#ECDFCC] bg-[#28282B] h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Height Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#697565]">Current Height:</span>
                    <span className="text-[#ECDFCC] font-bold">{calcHeight} cm ({(calcHeight / 30.48).toFixed(1)} ft)</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={calcHeight}
                    onChange={(e) => setCalcHeight(Number(e.target.value))}
                    className="w-full accent-[#ECDFCC] bg-[#28282B] h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Diagnostic Readout Terminal */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#28282B] border border-[#697565] space-y-5 relative">
              <div className="text-xs font-mono uppercase tracking-widest text-[#ECDFCC] flex items-center justify-between border-b border-[#697565]/40 pb-2">
                <span>DIAGNOSTIC READOUT</span>
                <span className="text-[#ECDFCC]">CALCULATED</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-[#3C3D37] border border-[#697565]">
                  <span className="text-[10px] font-mono text-[#697565] uppercase">BMI Score</span>
                  <div className="text-2xl font-extrabold text-[#ECDFCC] font-mono mt-0.5">{bmi}</div>
                  <span className="text-[10px] font-bold text-[#ECDFCC]">{bmiCategory}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#3C3D37] border border-[#697565]">
                  <span className="text-[10px] font-mono text-[#697565] uppercase">BMR Baseline</span>
                  <div className="text-2xl font-extrabold text-[#ECDFCC] font-mono mt-0.5">{bmr}</div>
                  <span className="text-[10px] text-[#697565]">kcal/day basal</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#3C3D37] border border-[#697565] space-y-1">
                <span className="text-[10px] font-mono text-[#697565] uppercase tracking-wider">Target Daily Caloric Intake</span>
                <div className="text-3xl font-extrabold text-[#ECDFCC] font-mono flex items-baseline gap-2">
                  <span>{targetCalories}</span>
                  <span className="text-xs text-[#697565] font-normal">kcal/day</span>
                </div>
                <div className="text-xs font-mono text-[#ECDFCC]/80 pt-1 flex justify-between">
                  <span>Recommended Protein:</span>
                  <span className="text-[#ECDFCC] font-bold">{targetProtein}g daily</span>
                </div>
              </div>

              <button
                onClick={() => openTrialModal('Calculator Free InBody Scan')}
                className="w-full py-3 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#ECDFCC]/20 transition-all cursor-pointer"
              >
                Claim Free InBody 270 Detailed Scan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ELITE COACHING DOSSIER (TRAINERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="coaches-section">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest">
            <span>FACULTY & MASTERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
            CERTIFIED MASTER TRAINERS
          </h2>
          <p className="text-sm sm:text-base text-[#ECDFCC]/80">
            Guided by certified exercise physiologists, state powerlifters, and clinical sports nutritionists in Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS_DATA.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#3C3D37] border border-[#697565] rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-[#ECDFCC] transition-all"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#28282B]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3D37] via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#28282B] border border-[#697565] text-[10px] font-mono text-[#ECDFCC] font-bold">
                  {trainer.experience}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-[#ECDFCC] font-display">{trainer.name}</h3>
                  <p className="text-xs font-mono text-[#697565]">{trainer.role}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {trainer.certifications.slice(0, 2).map((cert, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#28282B] border border-[#697565] text-[9.5px] font-mono text-[#ECDFCC]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#ECDFCC]/70 line-clamp-2 leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. REAL TRANSFORMATIONS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="testimonials-section">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest">
            <span>PROVEN ATHLETIC RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
            MEMBER TRANSFORMATION LOGS
          </h2>
          <p className="text-sm sm:text-base text-[#ECDFCC]/80">
            Real members in Indore who elevated their strength, dropped body fat, and redefined their lifestyles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#3C3D37] rounded-2xl p-6 sm:p-8 border border-[#697565] space-y-5 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#697565]"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-base font-bold text-[#ECDFCC]">{testimonial.name}</h4>
                      <p className="text-xs font-mono text-[#697565]">{testimonial.profession}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#ECDFCC]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-[#28282B] border border-[#697565] text-xs font-mono font-bold text-[#ECDFCC]">
                  MILESTONE: {testimonial.result}
                </div>

                <p className="text-xs sm:text-sm text-[#ECDFCC]/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#697565]/40 flex items-center justify-between text-[11px] font-mono text-[#697565]">
                <span>VERIFIED INDORE ATHLETE</span>
                <span>{testimonial.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HIGH-ENERGY CYBER TERMINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="vip-terminal-cta">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-[#3C3D37] border border-[#697565] shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#697565] via-[#ECDFCC] to-[#697565]"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#28282B] border border-[#697565] text-[#ECDFCC] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIMITED PASS INVENTORY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight leading-tight">
              BEGIN YOUR TRANSFORMATION PROTOCOL TODAY.
            </h2>

            <p className="text-sm sm:text-base text-[#ECDFCC]/80 leading-relaxed">
              Claim your complimentary 1-Day VIP Pass including full floor access, biometric InBody 270 scan, and orientation with a certified trainer at Pearl Business Park, Vishnupuri, Indore.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => openTrialModal('Home Bottom VIP Pass CTA')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#ECDFCC]/20 hover:scale-105 transition-all cursor-pointer"
              >
                Claim Free 1-Day Trial Pass
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] border border-[#697565] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
