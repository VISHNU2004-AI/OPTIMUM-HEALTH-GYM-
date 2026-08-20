export type PageRoute =
  | '/'
  | '/about'
  | '/services/personal-training'
  | '/services/weight-loss'
  | '/services/strength-conditioning'
  | '/services/diet-nutrition'
  | '/pricing'
  | '/gallery'
  | '/faq'
  | '/contact';

export interface NavItem {
  label: string;
  path: PageRoute;
  isService?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: PageRoute;
  title: string;
  subtitle: string;
  shortDesc: string;
  heroImage: string;
  iconName: string;
  benefits: string[];
  features: { title: string; desc: string; icon: string }[];
  scheduleHighlights?: string[];
  pricingSnippet?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  experience: string;
  specialties: string[];
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  profession: string;
  result: string;
  quote: string;
  image: string;
  duration: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  tagline: string;
  features: string[];
  isPerMonth?: boolean;
  monthlyEquivalent?: number;
}

export interface FAQItem {
  id: string;
  category: 'Membership' | 'Training' | 'Nutrition' | 'Beginners';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gym Floor' | 'Strength & Weights' | 'Cardio Zone' | 'Transformations' | 'Coaching';
  image: string;
  caption: string;
}

export interface TrialBookingData {
  fullName: string;
  phone: string;
  email: string;
  goal: string;
  preferredSlot: 'Morning (6:00 AM - 10:00 AM)' | 'Afternoon (12:00 PM - 4:00 PM)' | 'Evening (5:00 PM - 10:00 PM)';
  preferredDate: string;
  experienceLevel: 'Complete Beginner' | 'Intermediate' | 'Advanced Athlete';
  notes?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceInterest: string;
  message: string;
}
