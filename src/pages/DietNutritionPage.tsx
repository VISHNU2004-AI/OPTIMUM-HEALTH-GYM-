import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Apple, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/gymData';

export const DietNutritionPage: React.FC = () => {
  const { openTrialModal } = useRouter();
  const service = SERVICES_LIST.find((s) => s.id === 'diet-nutrition')!;

  const [activeDietTab, setActiveDietTab] = useState<'veg' | 'nonveg' | 'jain' | 'hostel'>('veg');

  const dietSamples = {
    veg: {
      title: 'High-Protein Pure Vegetarian Protocol',
      calories: '2,100 kcal',
      protein: '140g Protein',
      meals: [
        'Meal 1: Rolled oats with scoop Whey Protein, chia seeds & crushed almonds',
        'Meal 2: Low-fat Paneer (150g) bhurji + 2 Multigrain rotis + green salad',
        'Meal 3: Pre-workout: Black coffee + banana + peanut butter toast',
        'Meal 4: Post-workout: Whey isolate shake with water',
        'Meal 5: Roasted Soya chunks (50g) with stir-fried bell peppers & curd bowl',
      ],
    },
    nonveg: {
      title: 'Lean Muscle Non-Vegetarian Protocol',
      calories: '2,400 kcal',
      protein: '175g Protein',
      meals: [
        'Meal 1: 4 Whole boiled eggs / egg white omelet + whole wheat toast',
        'Meal 2: Grilled Chicken Breast (200g) + brown rice + seasonal vegetables',
        'Meal 3: Pre-workout: Fruit bowl with Greek yogurt',
        'Meal 4: Post-workout: Whey protein isolate + rice cakes',
        'Meal 5: Fish / Chicken curry with light gravy + 2 phulkas + cucumber salad',
      ],
    },
    jain: {
      title: 'High-Protein Jain-Friendly Protocol',
      calories: '2,000 kcal',
      protein: '130g Protein',
      meals: [
        'Meal 1: High-protein Moong dal chilla with paneer stuffing + green chutney',
        'Meal 2: Fresh paneer curry + 2 chapattis + sprouted moong bowl + chaas',
        'Meal 3: Pre-workout: Soaked almonds + walnuts + apple',
        'Meal 4: Post-workout: Certified vegetarian Whey protein isolate',
        'Meal 5: Tofu (200g) stir fry with capsicum & tomatoes + warm milk with turmeric',
      ],
    },
    hostel: {
      title: 'Budget & Student / Hostel-Friendly Protocol',
      calories: '2,200 kcal',
      protein: '135g Protein',
      meals: [
        'Meal 1: 4 Boiled eggs / Soya chunks with roasted peanuts & banana',
        'Meal 2: Standard mess thali + extra dal bowl + 100g raw curd',
        'Meal 3: Pre-workout: Black coffee with jaggery + 2 bananas',
        'Meal 4: Post-workout: Whey protein shake or boiled chana chaat',
        'Meal 5: Mess dinner + 100g roasted soya chunks from local grocery store',
      ],
    },
  };

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="nutrition-hero">
        <div className="relative rounded-3xl overflow-hidden bg-[#3C3D37] border border-[#697565] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80"
              alt="Clinical Nutrition Optimum Health Gym Indore"
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
              <Apple className="w-3.5 h-3.5" />
              <span>MODULE: CLINICAL SPORTS NUTRITION</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight leading-tight">
              PRECISION INDIAN MACRONUTRIENT DIETS
            </h1>

            <p className="text-sm sm:text-base text-[#ECDFCC]/80 leading-relaxed font-normal">
              No crash starvation or unpalatable boiled foods. Enjoy delicious Indian meals customized for vegetarian, eggetarian, non-veg, Jain, and student budgets in Indore with certified sports dieticians.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => openTrialModal('Nutrition Assessment & Diet Consultation')}
                className="px-8 py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#ECDFCC]/20 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Diet Consultation</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] border border-[#697565] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Dietician</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Protocol Samples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="diet-blueprints">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">
            INDIAN MACRO BLUEPRINTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ECDFCC] font-display uppercase">
            EXPLORE SAMPLE MEAL PROTOCOLS
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveDietTab('veg')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase font-bold transition-all cursor-pointer ${
              activeDietTab === 'veg'
                ? 'bg-[#ECDFCC] text-[#28282B] shadow-lg shadow-[#ECDFCC]/20'
                : 'bg-[#3C3D37] text-[#697565] hover:text-[#ECDFCC] border border-[#697565]'
            }`}
          >
            Pure Vegetarian
          </button>
          <button
            onClick={() => setActiveDietTab('nonveg')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase font-bold transition-all cursor-pointer ${
              activeDietTab === 'nonveg'
                ? 'bg-[#ECDFCC] text-[#28282B] shadow-lg shadow-[#ECDFCC]/20'
                : 'bg-[#3C3D37] text-[#697565] hover:text-[#ECDFCC] border border-[#697565]'
            }`}
          >
            Non-Vegetarian
          </button>
          <button
            onClick={() => setActiveDietTab('jain')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase font-bold transition-all cursor-pointer ${
              activeDietTab === 'jain'
                ? 'bg-[#ECDFCC] text-[#28282B] shadow-lg shadow-[#ECDFCC]/20'
                : 'bg-[#3C3D37] text-[#697565] hover:text-[#ECDFCC] border border-[#697565]'
            }`}
          >
            Jain Friendly
          </button>
          <button
            onClick={() => setActiveDietTab('hostel')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase font-bold transition-all cursor-pointer ${
              activeDietTab === 'hostel'
                ? 'bg-[#ECDFCC] text-[#28282B] shadow-lg shadow-[#ECDFCC]/20'
                : 'bg-[#3C3D37] text-[#697565] hover:text-[#ECDFCC] border border-[#697565]'
            }`}
          >
            Hostel / Student
          </button>
        </div>

        {/* Tab Card */}
        <div className="bg-[#3C3D37] rounded-3xl p-8 sm:p-10 border border-[#697565] max-w-4xl mx-auto space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#697565]/40 pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">{dietSamples[activeDietTab].title}</h3>
              <p className="text-xs text-[#697565] mt-0.5">Calculated for 70-75kg athlete in Indore</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#28282B] border border-[#697565] text-[#ECDFCC] font-mono font-bold text-xs">
                {dietSamples[activeDietTab].calories}
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#28282B] border border-[#697565] text-[#ECDFCC] font-mono font-bold text-xs">
                {dietSamples[activeDietTab].protein}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {dietSamples[activeDietTab].meals.map((meal, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#28282B] border border-[#697565] text-xs sm:text-sm text-[#ECDFCC]/90 font-sans flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#3C3D37] text-[#ECDFCC] font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-[#697565]">
                  {idx + 1}
                </span>
                <span>{meal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Program Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="nutrition-benefits">
        <div className="bg-[#3C3D37] rounded-3xl p-8 sm:p-12 border border-[#697565] space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ECDFCC] font-display uppercase">
            NUTRITION CONSULTATION PROTOCOL INCLUDES
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
