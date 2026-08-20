import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageCircle, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'General Gym Membership',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit Indian phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceInterest: 'General Gym Membership',
      message: '',
    });
  };

  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* 1. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3C3D37] border border-[#697565] text-[#ECDFCC] text-[11px] font-mono uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>FACILITY TELEMETRY & CONTACT DESK</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECDFCC] font-display uppercase tracking-tight">
          CONNECT WITH HEADQUARTERS
        </h1>

        <p className="text-base sm:text-lg text-[#ECDFCC]/80 max-w-3xl mx-auto leading-relaxed font-normal">
          Visit our 10,000 sq.ft facility at Pearl Business Park near Vishnupuri iBUS Stop, Bhavarkuan, Indore. Speak with our coaches or reserve your complimentary orientation pass.
        </p>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Facility Location</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed">
              3, Pearl Business Park, near Vishnupuri iBUS Stop, Bhavarkuan, Indore, MP 452014.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#ECDFCC] hover:underline flex items-center gap-1"
              >
                <span>Open Google Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Voice & WhatsApp</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed font-mono">
              Phone: {BUSINESS_INFO.phone} <br />
              Email: {BUSINESS_INFO.email}
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#ECDFCC] hover:underline flex items-center gap-1"
              >
                <span>Instant WhatsApp Chat</span>
                <MessageCircle className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-[#3C3D37] rounded-2xl p-6 space-y-3 border border-[#697565] hover:border-[#ECDFCC] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#28282B] border border-[#697565] flex items-center justify-center text-[#ECDFCC]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#ECDFCC] font-display uppercase">Operating Timetable</h3>
            <p className="text-xs text-[#ECDFCC]/80 leading-relaxed font-mono">
              Mon - Sat: 06:00 AM - 10:00 PM <br />
              Sunday: Sanitization & Maintenance
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#ECDFCC]">
              6 Days Continuous Floor Access
            </div>
          </div>
        </div>
      </section>

      {/* 3. Futuristic Contact Form & Interactive Map Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Futuristic Form */}
          <div className="lg:col-span-6 bg-[#3C3D37] rounded-3xl p-6 sm:p-10 border border-[#697565] relative shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#697565] via-[#ECDFCC] to-[#697565]"></div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#697565] uppercase tracking-wider">
                    TRANSMIT INQUIRY
                  </div>
                  <h3 className="text-2xl font-bold text-[#ECDFCC] font-display uppercase">
                    SEND A MESSAGE TO RECEPTION
                  </h3>
                  <p className="text-xs text-[#ECDFCC]/70">
                    Inquire regarding personal training, couple discounts, or student package rates.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#697565] uppercase">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Aman Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#28282B] border border-[#697565] focus:border-[#ECDFCC] rounded-xl text-[#ECDFCC] text-xs focus:outline-none"
                    />
                    {errors.name && <p className="text-[10px] text-[#ECDFCC] font-mono">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#697565] uppercase">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#28282B] border border-[#697565] focus:border-[#ECDFCC] rounded-xl text-[#ECDFCC] text-xs font-mono focus:outline-none"
                      />
                      {errors.phone && <p className="text-[10px] text-[#ECDFCC] font-mono">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#697565] uppercase">Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="e.g. name@mail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#28282B] border border-[#697565] focus:border-[#ECDFCC] rounded-xl text-[#ECDFCC] text-xs focus:outline-none"
                      />
                      {errors.email && <p className="text-[10px] text-[#ECDFCC] font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#697565] uppercase">Interested Protocol</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#28282B] border border-[#697565] focus:border-[#ECDFCC] rounded-xl text-[#ECDFCC] text-xs focus:outline-none"
                    >
                      <option value="General Gym Membership">General Gym Membership</option>
                      <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                      <option value="Fat Loss Transformation">Fat Loss Transformation</option>
                      <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                      <option value="Clinical Nutrition Plan">Clinical Nutrition Plan</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#697565] uppercase">Your Message / Query</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your fitness background or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#28282B] border border-[#697565] focus:border-[#ECDFCC] rounded-xl text-[#ECDFCC] text-xs focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#ECDFCC]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border-2 border-[#28282B] border-t-transparent animate-spin"></span>
                        TRANSMITTING INQUIRY...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message To Desk</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Confirmation HUD */
              <div className="py-8 space-y-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-[#28282B] border-2 border-[#ECDFCC] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(236,223,204,0.3)]"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#ECDFCC]" />
                </motion.div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#697565]">
                    TRANSMISSION SUCCESSFUL
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#ECDFCC] font-display uppercase">
                    INQUIRY RECEIVED AT DESK
                  </h3>
                  <p className="text-xs text-[#ECDFCC]/80 max-w-md mx-auto">
                    Thank you, <strong className="text-[#ECDFCC]">{formData.name}</strong>. Our head coach Vikram Sharma or the reception team will contact you at <strong className="text-[#ECDFCC] font-mono">{formData.phone}</strong> shortly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#28282B] border border-[#697565] text-xs font-mono text-left space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#697565]">PROTOCOL:</span>
                    <span className="text-[#ECDFCC]">{formData.serviceInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#697565]">LOCATION:</span>
                    <span className="text-[#ECDFCC]/80">Pearl Business Park, Indore</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`https://wa.me/919713398143?text=Hi%20Optimum%20Health%20Gym!%20I%20just%20submitted%20a%20contact%20form%20for%20${formData.name}%20regarding%20${formData.serviceInterest}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#ECDFCC] border border-[#697565] font-bold text-xs uppercase flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="py-3.5 px-6 rounded-xl bg-[#28282B] hover:bg-[#28282B]/80 text-[#697565] hover:text-[#ECDFCC] text-xs font-mono uppercase border border-[#697565]"
                  >
                    New Message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Map & Route Guidance */}
          <div className="lg:col-span-6 bg-[#3C3D37] rounded-3xl p-6 sm:p-8 border border-[#697565] flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#697565] uppercase tracking-wider">
                GEO TELEMETRY & ACCESS
              </span>
              <h3 className="text-xl font-bold text-[#ECDFCC] font-display uppercase">
                HOW TO REACH OPTIMUM HEALTH GYM
              </h3>
              <p className="text-xs text-[#ECDFCC]/80">
                Centrally positioned in Vishnupuri Colony right by the BRTS iBUS corridor, accessible from Bhavarkuan Square, AB Road, and Bhanwarkua coaching hub.
              </p>
            </div>

            {/* Map Frame */}
            <div className="rounded-2xl overflow-hidden border border-[#697565] h-64 sm:h-72 relative bg-[#28282B]">
              <iframe
                title="Optimum Health Gym Location Map Indore"
                src="https://maps.google.com/maps?q=Optimum+Health+Gym,+Bhawarkuan+Square,+Indra+Puri+Colony,+Indore,+Madhya+Pradesh+452001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%) grayscale(100%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 rounded-2xl bg-[#28282B] border border-[#697565] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#697565] block uppercase">LANDMARK & PIN</span>
                <span className="text-xs font-bold text-[#ECDFCC]">Bhawarkuan Square, AB Road, Indore</span>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#ECDFCC] hover:bg-[#ECDFCC]/90 text-[#28282B] text-[11px] font-mono uppercase font-bold flex items-center gap-1.5 transition-all"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
