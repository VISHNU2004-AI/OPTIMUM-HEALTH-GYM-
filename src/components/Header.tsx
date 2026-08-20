import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, ChevronDown, Menu, X, Phone, Clock, MapPin, Sparkles, UserCheck, Flame, Apple } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/gymData';

export const Header: React.FC = () => {
  const { currentPath, navigate, openTrialModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Live IST Check
  useEffect(() => {
    const checkGymHours = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      const day = istDate.getDay(); // 0 = Sunday
      const hours = istDate.getHours();

      if (day === 0) {
        setIsOpenNow(false);
      } else {
        setIsOpenNow(hours >= 6 && hours < 22);
      }
    };

    checkGymHours();
    const interval = setInterval(checkGymHours, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: PageRoute) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const isServiceActive = currentPath.startsWith('/services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#28282B]/95 backdrop-blur-xl border-b border-[#697565]/40 shadow-2xl shadow-[#28282B] py-2.5'
          : 'bg-gradient-to-b from-[#28282B]/95 via-[#28282B]/80 to-transparent py-3.5'
      }`}
      id="main-site-header"
    >
      {/* Top Cyber Telemetry Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:flex items-center justify-between pb-2 text-[11px] text-[#697565] border-b border-[#697565]/30 mb-2 font-mono">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#ECDFCC]" />
            <span className="text-[#ECDFCC]/90">Pearl Business Park, nr Vishnupuri iBUS, Bhavarkuan, Indore</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#697565]" />
            <span className="text-[#697565]">MON-SAT 06:00 - 22:00 IST</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#3C3D37] border border-[#697565]/50">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpenNow ? 'bg-[#ECDFCC] shadow-[0_0_8px_#ECDFCC] animate-pulse' : 'bg-[#697565]'
              }`}
            ></span>
            <span className={isOpenNow ? 'text-[#ECDFCC] font-bold tracking-wider text-[10px] uppercase' : 'text-[#697565] text-[10px] uppercase'}>
              {isOpenNow ? 'ARENA ONLINE • ACTIVE SESSION' : 'ARENA OFFLINE (OPENS 06:00)'}
            </span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-[#ECDFCC] hover:text-[#ECDFCC]/80 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3 h-3 text-[#ECDFCC]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex min-w-0 shrink-0 items-center gap-2.5 group text-left cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#28282B] border-2 border-[#697565] p-0.5 shadow-lg shadow-[#28282B] group-hover:border-[#ECDFCC] group-hover:shadow-[0_0_15px_rgba(236,223,204,0.3)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src={BUSINESS_INFO.logo}
                alt="Optimum Health Gym Logo"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-[#ECDFCC] flex items-center gap-1 leading-tight whitespace-nowrap">
                OPTIMUM <span className="text-[#ECDFCC]">HEALTH</span>
              </span>
              <span className="block text-[8px] sm:text-[8.5px] font-mono font-medium uppercase tracking-[0.16em] text-[#697565] whitespace-nowrap">
                ELITE GYM & FITNESS • INDORE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex min-w-0 items-center gap-0.5 lg:gap-1" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('/')}
              className={`relative whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentPath === '/'
                  ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                  : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
              }`}
              id="nav-home-btn"
            >
              HQ Home
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`relative whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentPath === '/about'
                  ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                  : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
              }`}
              id="nav-about-btn"
            >
              About
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`flex items-center gap-1 whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isServiceActive
                    ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                    : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
                }`}
                aria-expanded={isServicesDropdownOpen}
                id="nav-services-dropdown-btn"
              >
                <span>Protocols</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#ECDFCC]' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#3C3D37] backdrop-blur-2xl border border-[#697565] shadow-2xl shadow-[#28282B] p-3 space-y-1 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#ECDFCC] border-b border-[#697565]/40 flex items-center justify-between">
                      <span>Training Protocols</span>
                      <span className="text-[#697565]">4 MODULES</span>
                    </div>

                    <button
                      onClick={() => handleNavClick('/services/personal-training')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        currentPath === '/services/personal-training'
                          ? 'bg-[#28282B] border border-[#697565] text-[#ECDFCC]'
                          : 'hover:bg-[#28282B]/60 text-[#ECDFCC]/80 hover:text-[#ECDFCC]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#28282B] border border-[#697565] flex items-center justify-center shrink-0 mt-0.5 text-[#ECDFCC]">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#ECDFCC]">1-on-1 Personal Training</div>
                        <div className="text-[11px] text-[#697565]">Biomechanics & InBody Scans</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/services/weight-loss')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        currentPath === '/services/weight-loss'
                          ? 'bg-[#28282B] border border-[#697565] text-[#ECDFCC]'
                          : 'hover:bg-[#28282B]/60 text-[#ECDFCC]/80 hover:text-[#ECDFCC]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#28282B] border border-[#697565] flex items-center justify-center shrink-0 mt-0.5 text-[#ECDFCC]">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#ECDFCC]">Fat Loss & Transformation</div>
                        <div className="text-[11px] text-[#697565]">HIIT Conditioning & Deficits</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/services/strength-conditioning')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        currentPath === '/services/strength-conditioning'
                          ? 'bg-[#28282B] border border-[#697565] text-[#ECDFCC]'
                          : 'hover:bg-[#28282B]/60 text-[#ECDFCC]/80 hover:text-[#ECDFCC]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#28282B] border border-[#697565] flex items-center justify-center shrink-0 mt-0.5 text-[#ECDFCC]">
                        <Dumbbell className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#ECDFCC]">Strength & Conditioning</div>
                        <div className="text-[11px] text-[#697565]">Olympic Rigs & Heavy Turf</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/services/diet-nutrition')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        currentPath === '/services/diet-nutrition'
                          ? 'bg-[#28282B] border border-[#697565] text-[#ECDFCC]'
                          : 'hover:bg-[#28282B]/60 text-[#ECDFCC]/80 hover:text-[#ECDFCC]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#28282B] border border-[#697565] flex items-center justify-center shrink-0 mt-0.5 text-[#ECDFCC]">
                        <Apple className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#ECDFCC]">Diet & Clinical Nutrition</div>
                        <div className="text-[11px] text-[#697565]">Indian Macros & Veg Protocols</div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('/pricing')}
              className={`relative whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentPath === '/pricing'
                  ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                  : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
              }`}
              id="nav-pricing-btn"
            >
              Plans
            </button>

            <button
              onClick={() => handleNavClick('/gallery')}
              className={`relative whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentPath === '/gallery'
                  ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                  : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
              }`}
              id="nav-gallery-btn"
            >
              Arena
            </button>

            <button
              onClick={() => handleNavClick('/faq')}
              className={`relative whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentPath === '/faq'
                  ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                  : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
              }`}
              id="nav-faq-btn"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`relative whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-lg text-[11px] lg:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentPath === '/contact'
                  ? 'text-[#28282B] bg-[#ECDFCC] font-bold shadow-[0_0_15px_rgba(236,223,204,0.25)]'
                  : 'text-[#ECDFCC]/80 hover:text-[#ECDFCC] hover:bg-[#3C3D37]'
              }`}
              id="nav-contact-btn"
            >
              HQ Contact
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex shrink-0 items-center gap-2 lg:gap-3">
            <button
              onClick={() => openTrialModal('Header Free Trial Pass')}
              className="relative group overflow-hidden px-3.5 lg:px-4 py-2 rounded-lg bg-[#ECDFCC] text-[#28282B] font-extrabold text-[10px] lg:text-[11px] uppercase tracking-wider shadow-lg shadow-[#ECDFCC]/20 hover:bg-[#ECDFCC]/90 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              id="header-trial-btn"
            >
              <div className="flex items-center gap-1.5 relative z-10">
                <Sparkles className="w-3.5 h-3.5 text-[#28282B]" />
                <span>Claim Free Pass</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openTrialModal('Mobile Header Trial')}
              className="px-3 py-1.5 rounded-lg bg-[#ECDFCC] text-[#28282B] text-[11px] font-bold uppercase tracking-wider"
            >
              Pass
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] hover:text-[#ECDFCC] focus:outline-none"
              aria-label="Toggle Mobile Navigation"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#ECDFCC]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#28282B]/98 backdrop-blur-2xl border-b border-[#697565] px-4 pt-3 pb-6 space-y-3 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavClick('/')}
                className={`p-3 rounded-xl text-left font-bold text-xs uppercase tracking-wider ${
                  currentPath === '/' ? 'bg-[#ECDFCC] text-[#28282B]' : 'bg-[#3C3D37] text-[#ECDFCC]'
                }`}
              >
                HQ Home
              </button>
              <button
                onClick={() => handleNavClick('/about')}
                className={`p-3 rounded-xl text-left font-bold text-xs uppercase tracking-wider ${
                  currentPath === '/about' ? 'bg-[#ECDFCC] text-[#28282B]' : 'bg-[#3C3D37] text-[#ECDFCC]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('/pricing')}
                className={`p-3 rounded-xl text-left font-bold text-xs uppercase tracking-wider ${
                  currentPath === '/pricing' ? 'bg-[#ECDFCC] text-[#28282B]' : 'bg-[#3C3D37] text-[#ECDFCC]'
                }`}
              >
                Plans
              </button>
              <button
                onClick={() => handleNavClick('/gallery')}
                className={`p-3 rounded-xl text-left font-bold text-xs uppercase tracking-wider ${
                  currentPath === '/gallery' ? 'bg-[#ECDFCC] text-[#28282B]' : 'bg-[#3C3D37] text-[#ECDFCC]'
                }`}
              >
                Arena
              </button>
            </div>

            <div className="pt-2 border-t border-[#697565]/30">
              <span className="text-[10px] font-mono text-[#ECDFCC] uppercase tracking-widest block mb-2">
                Protocols
              </span>
              <div className="space-y-1.5">
                <button
                  onClick={() => handleNavClick('/services/personal-training')}
                  className="w-full p-2.5 rounded-lg bg-[#3C3D37] flex items-center justify-between text-xs text-[#ECDFCC] hover:bg-[#697565]/30"
                >
                  <span>1-on-1 Personal Training</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[#697565]" />
                </button>
                <button
                  onClick={() => handleNavClick('/services/weight-loss')}
                  className="w-full p-2.5 rounded-lg bg-[#3C3D37] flex items-center justify-between text-xs text-[#ECDFCC] hover:bg-[#697565]/30"
                >
                  <span>Fat Loss & Transformation</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[#697565]" />
                </button>
                <button
                  onClick={() => handleNavClick('/services/strength-conditioning')}
                  className="w-full p-2.5 rounded-lg bg-[#3C3D37] flex items-center justify-between text-xs text-[#ECDFCC] hover:bg-[#697565]/30"
                >
                  <span>Strength & Conditioning</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[#697565]" />
                </button>
                <button
                  onClick={() => handleNavClick('/services/diet-nutrition')}
                  className="w-full p-2.5 rounded-lg bg-[#3C3D37] flex items-center justify-between text-xs text-[#ECDFCC] hover:bg-[#697565]/30"
                >
                  <span>Diet & Clinical Nutrition</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[#697565]" />
                </button>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => handleNavClick('/faq')}
                className={`flex-1 p-2.5 rounded-lg text-center text-xs font-bold ${
                  currentPath === '/faq' ? 'bg-[#ECDFCC] text-[#28282B]' : 'bg-[#3C3D37] text-[#697565]'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className={`flex-1 p-2.5 rounded-lg text-center text-xs font-bold ${
                  currentPath === '/contact' ? 'bg-[#ECDFCC] text-[#28282B]' : 'bg-[#3C3D37] text-[#697565]'
                }`}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
