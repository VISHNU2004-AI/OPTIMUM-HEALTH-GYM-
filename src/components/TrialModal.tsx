import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Dumbbell, Calendar, Clock, CheckCircle2, Phone, Mail, User, Sparkles, Share2, QrCode } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { TrialBookingData } from '../types';
import { BUSINESS_INFO } from '../data/gymData';

export const TrialModal: React.FC = () => {
  const { isTrialModalOpen, closeTrialModal, selectedGoalForModal } = useRouter();

  const [formData, setFormData] = useState<TrialBookingData>({
    fullName: '',
    phone: '',
    email: '',
    goal: selectedGoalForModal || 'Fat Loss & Transformation',
    preferredSlot: 'Morning (6:00 AM - 10:00 AM)',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    experienceLevel: 'Complete Beginner',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [passNumber, setPassNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedGoalForModal) {
      setFormData((prev) => ({ ...prev, goal: selectedGoalForModal }));
    }
  }, [selectedGoalForModal]);

  useEffect(() => {
    if (!isTrialModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeTrialModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTrialModalOpen, closeTrialModal]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please input your full name';
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Valid 10-digit Indian phone number required';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email address required';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Select your preferred pass date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedPass = `OHG-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
      setPassNumber(generatedPass);
      setIsSubmitting(false);
      setIsBooked(true);
    }, 700);
  };

  const handleReset = () => {
    setIsBooked(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      goal: 'Fat Loss & Transformation',
      preferredSlot: 'Morning (6:00 AM - 10:00 AM)',
      preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      experienceLevel: 'Complete Beginner',
      notes: '',
    });
    closeTrialModal();
  };

  if (!isTrialModalOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#28282B]/90 backdrop-blur-xl"
        id="trial-modal-backdrop"
        role="presentation"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#3C3D37] rounded-3xl border border-[#697565] shadow-2xl shadow-[#28282B] overflow-hidden my-auto"
          id="trial-modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="trial-modal-title"
        >
          {/* Top Laser Border */}
          <div className="absolute top-0 left-0 right-0 h-1 cyber-laser-border"></div>

          {/* Close button */}
          <button
            onClick={handleReset}
            ref={closeButtonRef}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#28282B] border border-[#697565] text-[#ECDFCC] flex items-center justify-center hover:bg-[#ECDFCC] hover:text-[#28282B] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!isBooked ? (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Modal Header */}
              <div className="flex items-start gap-4 pr-8">
                <div className="w-14 h-14 rounded-full bg-[#28282B] border-2 border-[#ECDFCC] p-0.5 shadow-md shrink-0 hidden sm:flex items-center justify-center overflow-hidden">
                  <img
                    src={BUSINESS_INFO.logo}
                    alt="Optimum Health Gym Logo"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#28282B] border border-[#697565] text-[#ECDFCC] text-[10px] font-mono uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    <span>VIP PASS ACTIVATION TERMINAL</span>
                  </div>
                  <h3 id="trial-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
                    CLAIM YOUR 1-DAY VIP TRIAL PASS
                  </h3>
                  <p className="text-xs sm:text-sm text-[#ECDFCC]/80">
                    Experience our 10,000 sq.ft arena, Olympic platforms, and free InBody 270 body composition scan in Indore. Zero cost, zero commitment.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-[#ECDFCC] flex items-center gap-1">
                      <User className="w-3 h-3 text-[#ECDFCC]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajat Malviya"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl cyber-input text-[#ECDFCC] text-xs placeholder:text-[#697565] font-sans"
                    />
                    {errors.fullName && <p className="text-[10px] text-[#ECDFCC] font-mono underline">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-[#ECDFCC] flex items-center gap-1">
                      <Phone className="w-3 h-3 text-[#ECDFCC]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl cyber-input text-[#ECDFCC] text-xs font-mono placeholder:text-[#697565]"
                    />
                    {errors.phone && <p className="text-[10px] text-[#ECDFCC] font-mono underline">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Goal */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-[#ECDFCC] flex items-center gap-1">
                      <Dumbbell className="w-3 h-3 text-[#ECDFCC]" />
                      <span>Fitness Goal</span>
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl cyber-input text-[#ECDFCC] text-xs font-sans bg-[#28282B]"
                    >
                      <option value="Fat Loss & Transformation">Fat Loss & Transformation</option>
                      <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                      <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                      <option value="Diet & Clinical Nutrition">Diet & Clinical Nutrition</option>
                      <option value="General Health & Conditioning">General Health & Conditioning</option>
                    </select>
                  </div>

                  {/* Preferred Slot */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-[#ECDFCC] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ECDFCC]" />
                      <span>Preferred Slot</span>
                    </label>
                    <select
                      value={formData.preferredSlot}
                      onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl cyber-input text-[#ECDFCC] text-xs font-sans bg-[#28282B]"
                    >
                      <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM - 10:00 AM)</option>
                      <option value="Afternoon (11:00 AM - 4:00 PM)">Afternoon (11:00 AM - 4:00 PM)</option>
                      <option value="Evening (5:00 PM - 10:00 PM)">Evening (5:00 PM - 10:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-[#ECDFCC] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#ECDFCC]" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl cyber-input text-[#ECDFCC] text-xs font-mono"
                    />
                    {errors.preferredDate && <p className="text-[10px] text-[#ECDFCC] font-mono underline">{errors.preferredDate}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-[#ECDFCC] flex items-center gap-1">
                      <Mail className="w-3 h-3 text-[#697565]" />
                      <span>Email (Optional for pass PDF)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl cyber-input text-[#ECDFCC] text-xs font-sans placeholder:text-[#697565]"
                    />
                    {errors.email && <p className="text-[10px] text-[#ECDFCC] font-mono underline">{errors.email}</p>}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#ECDFCC] text-[#28282B] font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#ECDFCC]/20 hover:bg-[#ECDFCC]/90 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono flex items-center gap-2 text-[#28282B]">
                        <span className="w-3 h-3 rounded-full border-2 border-[#28282B] border-t-transparent animate-spin"></span>
                        GENERATING PASS TELEMETRY...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#28282B]" />
                        <span>ACTIVATE FREE 1-DAY PASS</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Pass Confirmation State */
            <div className="p-6 sm:p-10 space-y-6 text-center">
              {/* Glowing animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-[#28282B] border-2 border-[#ECDFCC] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(236,223,204,0.3)]"
              >
                <CheckCircle2 className="w-8 h-8 text-[#ECDFCC]" />
              </motion.div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ECDFCC]">
                  PASS ISSUED & VERIFIED
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#ECDFCC] font-display uppercase">
                  VIP PASS READY FOR USE
                </h3>
                <p className="text-xs text-[#ECDFCC]/80">
                  Show this pass identifier at the reception desk at Pearl Business Park, Vishnupuri, Indore.
                </p>
              </div>

              {/* Holographic Pass Box */}
              <div className="p-6 rounded-2xl bg-[#28282B] border border-[#697565] text-left space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                  <QrCode className="w-24 h-24 text-[#ECDFCC]" />
                </div>

                <div className="flex justify-between items-center border-b border-[#697565]/40 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#ECDFCC] overflow-hidden shrink-0">
                      <img
                        src={BUSINESS_INFO.logo}
                        alt="Optimum Health Gym Logo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#697565] block">PASS NUMBER</span>
                      <span className="text-lg sm:text-xl font-bold font-mono text-[#ECDFCC]">{passNumber}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#3C3D37] border border-[#697565] text-[10px] font-mono text-[#ECDFCC] font-bold">
                    VALID: 1 DAY
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[#697565] block text-[10px]">ATHLETE NAME</span>
                    <span className="text-[#ECDFCC] font-semibold">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#697565] block text-[10px]">TARGET PROTOCOL</span>
                    <span className="text-[#ECDFCC] font-semibold">{formData.goal}</span>
                  </div>
                  <div>
                    <span className="text-[#697565] block text-[10px]">DATE & SLOT</span>
                    <span className="text-[#ECDFCC] font-semibold">{formData.preferredDate} ({formData.preferredSlot.split(' ')[0]})</span>
                  </div>
                  <div>
                    <span className="text-[#697565] block text-[10px]">INCLUDES</span>
                    <span className="text-[#ECDFCC] font-semibold">InBody 270 Scan + PT</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Verification Button */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/919713398143?text=Hi%20Optimum%20Health%20Gym!%20I%20have%20claimed%20my%20Free%201-Day%20Pass%20(Pass%20ID:%20${passNumber})%20for%20${formData.fullName}%20on%20${formData.preferredDate}.%20Please%20confirm%20my%20slot!`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ECDFCC]/20 transition-all"
                >
                  <Share2 className="w-4 h-4 text-[#28282B]" />
                  <span>Send Pass to WhatsApp Desk</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full py-3 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] text-xs font-mono uppercase tracking-wider border border-[#697565]"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
