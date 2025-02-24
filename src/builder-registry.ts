'use client';

import { Builder } from '@builder.io/react';
import { TreatmentCard } from './components/TreatmentCard';
import { Testimonial } from './components/Testimonial';
import { LocationFinder } from './components/LocationFinder';
import { PricingCalculator } from './components/PricingCalculator';
import { TreatmentGrid } from './components/TreatmentGrid';
import { LandingPage } from './components/LandingPage';
import CardComponent from './components/CardComponent/CardComponent';
import CardGrid from './components/CardGrid/CardGrid';
import { HeroSection } from './components/HeroSection/HeroSection';

if (typeof window !== 'undefined') {
  Builder.registerComponent(TreatmentCard, {
    name: 'TreatmentCard',
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'image', type: 'file' },
      {
        name: 'features',
        type: 'list',
        subFields: [
          {
            name: 'text',
            type: 'string',
          },
        ],
      },
      {
        name: 'buttonText',
        type: 'string',
        defaultValue: 'Learn More',
      },
      {
        name: 'buttonLink',
        type: 'string',
      },
    ],
  });

  Builder.registerComponent(TreatmentGrid, {
    name: 'Treatment Grid',
    inputs: [
      {
        name: 'treatments',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'imageUrl', type: 'string' },
          { name: 'price', type: 'string' },
          { name: 'duration', type: 'string' },
        ],
      },
    ],
  });

  // Register new components
  Builder.registerComponent(Testimonial, {
    name: 'Testimonial',
    // Add inputs for Testimonial component here
  });

  Builder.registerComponent(CardComponent, {
    name: 'CardComponent',
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'rating', type: 'number' },
      { name: 'reviewCount', type: 'number' },
      { name: 'address', type: 'string' },
      { name: 'city', type: 'string' },
      { name: 'state', type: 'string' },
      { name: 'zip', type: 'string' },
      { name: 'phone', type: 'string' },
      { name: 'distance', type: 'string' },
    ],
  });

  Builder.registerComponent(CardGrid, {
    name: 'CardGrid',
    inputs: [
      {
        name: 'cards',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'rating', type: 'number' },
          { name: 'reviewCount', type: 'number' },
          { name: 'address', type: 'string' },
          { name: 'city', type: 'string' },
          { name: 'state', type: 'string' },
          { name: 'zip', type: 'string' },
          { name: 'phone', type: 'string' },
          { name: 'distance', type: 'string' },
        ],
      },
    ],
  });

  Builder.registerComponent(HeroSection, {
    name: 'HeroSection',
    inputs: [
      {
        name: 'title',
        type: 'list',
        subFields: [
          { name: 'line', type: 'string' }
        ],
        defaultValue: ['Welcome to', 'Your Journey Starts Here'],
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Discover a new way to experience healthcare.',
      },
      {
        name: 'primaryButtonText',
        type: 'string',
        defaultValue: 'Get Started',
      },
      {
        name: 'secondaryButtonText',
        type: 'string',
        defaultValue: 'Learn More',
      },
    ],
  });

  Builder.registerComponent(LocationFinder, {
    name: 'LocationFinder',
    // Add inputs for LocationFinder component here
  });

  Builder.registerComponent(LandingPage, {
    name: 'LandingPage',
    // Add inputs for LandingPage component here
  });

  Builder.registerComponent(PricingCalculator, {
    name: 'PricingCalculator',
    // Add inputs for PricingCalculator component here
  });

  // Register models
  Builder.register('page', {
    name: 'Page',
    defaults: {
      inputs: ['title', 'description'],
    },
  });

  Builder.register('treatment', {
    name: 'Treatment',
    hideFromUI: false,
    defaults: {
      title: 'New Treatment',
    },
  });
}
