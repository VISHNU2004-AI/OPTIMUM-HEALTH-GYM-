import React from 'react';
import { Dumbbell, MapPin, Phone, Clock, ArrowRight, Instagram, Facebook, Youtube, Sparkles, Terminal } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { PageRoute } from '../types';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/gymData';

interface FooterProps {
  onOpenSitemapRobots: (type: 'sitemap' | 'robots') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSitemapRobots }) => {
  const { navigate, openTrialModal } = useRouter();

  const handleNav = (path: PageRoute) => {
    navigate(path);
  };

  return (
    <footer className="bg-[#28282B] text-[#697565] border-t border-[#697565]/30 pt-16 pb-12" id="main-site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Cyber CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#3C3D37] border border-[#697565] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#697565] via-[#ECDFCC] to-[#697565]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-2 max-w-2xl">
              <span className="px-3 py-1 rounded-md bg-[#28282B] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest inline-block">
                COMMENCE PROTOCOL • INDORE HQ
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#ECDFCC] font-display uppercase">
                READY TO TRAIN AT OPTIMUM HEALTH GYM?
              </h3>
              <p className="text-xs sm:text-sm text-[#ECDFCC]/80">
                Claim your complimentary 1-Day Trial Pass with InBody 270 scan at Pearl Business Park. Zero cost, 100% elite biomechanics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => openTrialModal('Footer Trial CTA')}
                className="px-6 py-3.5 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#ECDFCC]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                id="footer-trial-cta-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim VIP 1-Day Pass</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] font-mono text-xs uppercase tracking-wider border border-[#697565] flex items-center justify-center gap-2 transition-all"
                id="footer-whatsapp-cta-btn"
              >
                <span>WhatsApp Desk</span>
                <ArrowRight className="w-4 h-4 text-[#ECDFCC]" />
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#28282B] border-2 border-[#697565] p-0.5 flex items-center justify-center shadow-md shadow-[#28282B] overflow-hidden shrink-0">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="Optimum Health Gym Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-lg text-[#ECDFCC] tracking-wider leading-tight block">
                  OPTIMUM HEALTH
                </span>
                <span className="block text-[9px] font-mono text-[#697565] tracking-widest">
                  ELITE FITNESS CLUB • INDORE
                </span>
              </div>
            </div>

            <p className="text-xs text-[#ECDFCC]/70 leading-relaxed">
              Indore's premier 10,000 sq.ft science-backed strength and body transformation facility. Featuring Olympic lifting platforms, imported biomechanical machines, and certified sports nutritionists in Vishnupuri, Bhavarkuan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#3C3D37] border border-[#697565] flex items-center justify-center text-[#697565] hover:text-[#ECDFCC] hover:border-[#ECDFCC] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#3C3D37] border border-[#697565] flex items-center justify-center text-[#697565] hover:text-[#ECDFCC] hover:border-[#ECDFCC] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#3C3D37] border border-[#697565] flex items-center justify-center text-[#697565] hover:text-[#ECDFCC] hover:border-[#ECDFCC] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-[#ECDFCC] tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/')} className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors cursor-pointer">
                  Home Terminal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors cursor-pointer">
                  About Facility
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/pricing')} className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors cursor-pointer">
                  Membership Matrix
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/gallery')} className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors cursor-pointer">
                  Arena Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/faq')} className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors cursor-pointer">
                  FAQ Database
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors cursor-pointer">
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-[#ECDFCC] tracking-wider">
              TRAINING MODULES
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav(srv.slug as PageRoute)}
                    className="text-[#ECDFCC]/80 hover:text-[#ECDFCC] transition-colors text-left cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & SEO Spec */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-[#ECDFCC] tracking-wider">
              HEADQUARTERS
            </h4>
            <div className="space-y-2.5 text-xs text-[#697565] font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ECDFCC] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ECDFCC]/90 hover:text-[#ECDFCC] hover:underline"
                >
                  3, Pearl Business Park, near Vishnupuri iBUS Stop, Bhavarkuan, Indore, MP 452014
                </a>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-[#ECDFCC] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#ECDFCC] hover:underline">{BUSINESS_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Clock className="w-4 h-4 text-[#ECDFCC] shrink-0" />
                <span className="text-[#ECDFCC]/80">Mon-Sat: 06:00 AM - 10:00 PM</span>
              </div>
            </div>

            {/* Terminal Links for Sitemap and Robots */}
            <div className="pt-3 flex gap-3 border-t border-[#697565]/30">
              <button
                onClick={() => onOpenSitemapRobots('sitemap')}
                className="text-[10px] font-mono text-[#697565] hover:text-[#ECDFCC] flex items-center gap-1 cursor-pointer"
              >
                <Terminal className="w-3 h-3 text-[#ECDFCC]" />
                <span>XML SITEMAP</span>
              </button>
              <button
                onClick={() => onOpenSitemapRobots('robots')}
                className="text-[10px] font-mono text-[#697565] hover:text-[#ECDFCC] flex items-center gap-1 cursor-pointer"
              >
                <Terminal className="w-3 h-3 text-[#ECDFCC]" />
                <span>ROBOTS.TXT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#697565]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#697565] font-mono">
          <p>© {new Date().getFullYear()} OPTIMUM HEALTH GYM INDORE. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            <span>PEARL BUSINESS PARK • INDORE 452014</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
