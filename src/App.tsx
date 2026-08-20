import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { TrialModal } from './components/TrialModal';
import { SitemapRobotsModal } from './components/SitemapRobotsModal';

// 10 Route Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PersonalTrainingPage } from './pages/PersonalTrainingPage';
import { WeightLossPage } from './pages/WeightLossPage';
import { StrengthConditioningPage } from './pages/StrengthConditioningPage';
import { DietNutritionPage } from './pages/DietNutritionPage';
import { PricingPage } from './pages/PricingPage';
import { GalleryPage } from './pages/GalleryPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { Dumbbell, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './data/gymData';

const MainAppContent: React.FC = () => {
  const { currentPath, openTrialModal } = useRouter();
  const [sitemapRobotsType, setSitemapRobotsType] = useState<'sitemap' | 'robots' | null>(null);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services/personal-training':
        return <PersonalTrainingPage />;
      case '/services/weight-loss':
        return <WeightLossPage />;
      case '/services/strength-conditioning':
        return <StrengthConditioningPage />;
      case '/services/diet-nutrition':
        return <DietNutritionPage />;
      case '/pricing':
        return <PricingPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/faq':
        return <FAQPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#28282B] text-[#ECDFCC] font-sans selection:bg-[#ECDFCC] selection:text-[#28282B] relative">
      {/* Dynamic SEO Head Tags and LocalBusiness Schema */}
      <SEOHead path={currentPath} />

      {/* Shared Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content-region">
        {renderCurrentPage()}
      </main>

      {/* Floating Quick Action Widget for Mobile/Desktop */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2.5">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Optimum Health Gym on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#3C3D37] hover:bg-[#3C3D37]/80 text-[#ECDFCC] flex items-center justify-center shadow-xl shadow-[#28282B] hover:scale-110 transition-all border border-[#697565]"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={() => openTrialModal('Floating Free Trial Button')}
          className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 hover:scale-105 text-[#28282B] font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#ECDFCC]/20 transition-all cursor-pointer border border-[#697565]"
          id="floating-free-trial-btn"
        >
          <Dumbbell className="w-4 h-4" />
          <span>Claim VIP Pass</span>
        </button>
      </div>

      {/* Shared Footer with Technical SEO modal trigger */}
      <Footer onOpenSitemapRobots={(type) => setSitemapRobotsType(type)} />

      {/* Global Interactive Free Trial Pass Modal */}
      <TrialModal />

      {/* Dynamic Sitemap & Robots.txt SEO Inspector Modal */}
      <SitemapRobotsModal
        type={sitemapRobotsType}
        onClose={() => setSitemapRobotsType(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <MainAppContent />
    </RouterProvider>
  );
}
