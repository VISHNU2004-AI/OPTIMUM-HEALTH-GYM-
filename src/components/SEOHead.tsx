import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/gymData';

interface SEOHeadProps {
  path: PageRoute;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

const ROUTE_METADATA: Record<PageRoute, PageMeta> = {
  '/': {
    title: 'OPTIMUM HEALTH GYM | Best Gym in Indore | Fitness, Personal Training & Nutrition',
    description: 'Transform your body at Optimum Health Gym in Bhavarkuan, Indore. 10,000 sq.ft facility with certified trainers, strength rigs, cardio zone, and custom diet plans. Book your Free Trial!',
    keywords: 'Optimum Health Gym, Best Gym in Indore, Gym in Bhavarkuan, Personal Training Indore, Weight Loss Indore, Fitness Center Vishnupuri Indore',
  },
  '/about': {
    title: 'About Us | Optimum Health Gym - Indore\'s Premier Strength & Transformation Hub',
    description: 'Learn about Optimum Health Gym\'s mission, 10,000 sq ft facility in Pearl Business Park, certified K11/ACE coaching team, and strict hygiene standards in Indore.',
    keywords: 'About Optimum Health Gym, Gym in Pearl Business Park Indore, Certified Trainers Indore, Fitness Facility Bhavarkuan',
  },
  '/services/personal-training': {
    title: '1-on-1 Personal Training in Indore | Optimum Health Gym',
    description: 'Accelerate results with dedicated 1-on-1 personal training in Indore. InBody 270 body composition analysis, posture correction, customized periodization, and continuous coach accountability.',
    keywords: 'Personal Trainer Indore, 1 on 1 Coaching Indore, Fitness Trainer Bhavarkuan, Personal Fitness Coach Indore',
  },
  '/services/weight-loss': {
    title: 'Fat Loss & Body Transformation Program | Optimum Health Gym Indore',
    description: 'Sustainable fat loss and body transformation programs in Indore. Structured calorie deficit plans, HIIT cardio zone, and lean muscle retention protocols.',
    keywords: 'Weight Loss Gym Indore, Fat Loss Transformation Indore, HIIT Cardio Bhavarkuan, Slimming Center Indore',
  },
  '/services/strength-conditioning': {
    title: 'Strength & Conditioning & Olympic Lifting | Optimum Health Gym Indore',
    description: 'Heavy lifting platforms, calibrated barbells, power racks, and dumbbells up to 50kg at Optimum Health Gym Indore. Build serious muscle and raw power.',
    keywords: 'Powerlifting Gym Indore, Strength Training Indore, Free Weights Bhavarkuan, Olympic Lifting Indore, Bodybuilding Gym',
  },
  '/services/diet-nutrition': {
    title: 'Diet & Sports Nutrition Counseling | Optimum Health Gym Indore',
    description: 'Customized Indian diet plans crafted by certified clinical sports nutritionists. High-protein vegetarian, vegan, and non-vegetarian meal plans in Indore.',
    keywords: 'Dietitian in Indore, Sports Nutritionist Indore, Vegetarian Diet Plan Gym, Weight Loss Diet Indore, Nutrition Counseling',
  },
  '/pricing': {
    title: 'Membership Plans & Pricing | Optimum Health Gym Indore',
    description: 'Transparent gym membership rates for Monthly, Quarterly, Half-Yearly, and Annual plans. Student discounts, day passes, and personal training packages at Optimum Health Gym Indore.',
    keywords: 'Gym Membership Fees Indore, Gym Fees in Bhavarkuan, Optimum Health Gym Pricing, Affordable Gym Indore, Student Discount Gym',
  },
  '/gallery': {
    title: 'Gym Photo Gallery & Facility Tour | Optimum Health Gym Indore',
    description: 'Explore our 10,000 sq.ft state-of-the-art gym floor, cardio zone, strength arena, locker rooms, and verified member transformations at Pearl Business Park, Indore.',
    keywords: 'Optimum Health Gym Photos, Gym Interior Indore, Workout Facility Bhavarkuan, Fitness Gallery Indore',
  },
  '/faq': {
    title: 'Frequently Asked Questions (FAQ) | Optimum Health Gym Indore',
    description: 'Find answers about membership fees, trial sessions, personal training, operating hours, and vegetarian diet support at Optimum Health Gym Indore.',
    keywords: 'Optimum Health Gym FAQ, Gym Questions Indore, Free Trial Gym Indore, Gym Timings Bhavarkuan',
  },
  '/contact': {
    title: 'Contact & Location | Optimum Health Gym Bhavarkuan, Indore',
    description: 'Visit Optimum Health Gym at 3, Pearl Business Park, near Vishnupuri iBUS Stop, Bhavarkuan, Indore. Call +91 97133 98143 or claim your Free Trial Pass online.',
    keywords: 'Optimum Health Gym Location, Gym near Vishnupuri iBUS Stop, Gym near Bhavarkuan Square, Optimum Health Gym Contact Number',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ path }) => {
  const meta = ROUTE_METADATA[path] || ROUTE_METADATA['/'];

  useEffect(() => {
    // Update Title
    document.title = meta.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', meta.keywords);

    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Insert or update Schema.org LocalBusiness (ExerciseGym) structured data
    const schemaId = 'optimum-health-gym-jsonld';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'ExerciseGym',
      'name': BUSINESS_INFO.name,
      'image': [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
      ],
      'telephone': BUSINESS_INFO.phone,
      'url': window.location.origin + path,
      'priceRange': '₹2,500 - ₹18,000',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '3, Pearl Business Park, near Vishnupuri iBUS Stop, near Bhavarkuan, Vishnu Puri Colony',
        'addressLocality': 'Indore',
        'addressRegion': 'Madhya Pradesh',
        'postalCode': '452014',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 22.6892,
        'longitude': 75.8647,
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '06:00',
          'closes': '22:00',
        },
      ],
      'sameAs': [
        'https://www.instagram.com/optimumhealthgym_indore',
        'https://www.facebook.com/optimumhealthgymindore',
      ],
      'amenityFeature': [
        { '@type': 'LocationFeatureSpecification', 'name': 'Air Conditioning', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Personal Training', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Locker Rooms & Showers', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Steam Bath', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'InBody Body Composition Scan', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Free Parking for Two-Wheelers & Cars', 'value': true },
      ],
    };

    scriptTag.textContent = JSON.stringify(jsonLdData, null, 2);
  }, [path, meta]);

  return null;
};
