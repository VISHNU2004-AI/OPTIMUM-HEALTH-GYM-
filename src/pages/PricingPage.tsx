import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Gift } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { PRICING_PLANS, PT_PACKAGES } from '../data/gymData';

export const PricingPage: React.FC = () => {
  const { openTrialModal } = useRouter();

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id="pricing-hero">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[11px] font-mono uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARENT RATES • ZERO HIDDEN FEES</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
          MEMBERSHIP MATRIX & TIERS
        </h1>

        <p className="text-base sm:text-lg text-[#ECDFCC]/80 max-w-3xl mx-auto leading-relaxed font-normal">
          No aggressive sales gimmicks or sudden maintenance charges. Select the membership duration that aligns with your transformation milestones in Indore.
        </p>

        {/* Student & Couple Discount Badge */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-[#3C3D37] border border-[#697565] flex items-center justify-center gap-2.5 text-xs text-[#ECDFCC]">
          <Gift className="w-4 h-4 text-[#ECDFCC] shrink-0" />
          <span>
            <strong>Indore Special Discounts:</strong> 15% Flat Student Discount (DAVV / SGSITS / Medicaps) & 20% Off Couple Memberships.
          </span>
        </div>
      </section>

      {/* 2. Main Membership Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="membership-plans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 rounded-3xl bg-[#3C3D37] border flex flex-col justify-between space-y-6 relative transition-all duration-300 ${
                plan.popular
                  ? 'border-[#ECDFCC] shadow-[0_0_35px_rgba(236,223,204,0.15)] lg:-translate-y-2'
                  : 'border-[#697565] hover:border-[#ECDFCC]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ECDFCC] text-[#28282B] font-mono font-extrabold text-[10px] uppercase tracking-widest rounded-full shadow-lg shadow-[#ECDFCC]/20 whitespace-nowrap">
                  ★ MOST POPULAR PROTOCOL
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">{plan.name}</h3>
                  <div className="text-xs font-mono text-[#697565] mt-0.5">{plan.duration}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-mono">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-xs text-[#697565] line-through font-mono">
                        ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  {plan.monthlyEquivalent && (
                    <div className="text-[11px] font-mono text-[#ECDFCC]">
                      ≈ ₹{plan.monthlyEquivalent}/month effective
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#ECDFCC]/80 leading-relaxed border-t border-[#697565]/40 pt-3">
                  {plan.tagline}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase text-[#697565] block tracking-wider">
                    PLAN AMENITIES:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#ECDFCC]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ECDFCC] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#697565]/40">
                <button
                  onClick={() => openTrialModal(`Plan: ${plan.name} (${plan.duration})`)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] shadow-lg shadow-[#ECDFCC]/20 hover:scale-105'
                      : 'bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] border border-[#697565]'
                  }`}
                >
                  Reserve {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 1-on-1 PT Add-on packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="pt-addons">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            COACHING ACCELERATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            1-ON-1 PERSONAL TRAINING ADD-ONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PT_PACKAGES.map((pkg, idx) => (
            <div key={idx} className="bg-[#3C3D37] rounded-2xl p-6 border border-[#697565] space-y-4 flex flex-col justify-between hover:border-[#ECDFCC] transition-all">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#ECDFCC] font-display">{pkg.sessions}</h4>
                <div className="text-2xl font-extrabold font-mono text-[#ECDFCC]">{pkg.price}</div>
                <div className="text-xs font-mono text-[#697565]">{pkg.duration}</div>
                <p className="text-xs text-[#ECDFCC]/80 leading-relaxed pt-2">{pkg.desc}</p>
              </div>
              <button
                onClick={() => openTrialModal(`PT Add-on: ${pkg.sessions}`)}
                className="w-full py-3 rounded-xl bg-[#28282B] hover:bg-[#ECDFCC] hover:text-[#28282B] text-[#ECDFCC] text-xs font-bold uppercase transition-all border border-[#697565]"
              >
                Inquire For Add-On
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
