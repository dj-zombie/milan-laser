'use client';

import { Builder } from '@builder.io/react';
import { testimonials, locations, treatmentAreas } from '../data/exampleData';
import { LocationFinder } from './LocationFinder';
import { PricingCalculator } from './PricingCalculator';
import { Testimonial } from './Testimonial';
import { HeroSection } from './HeroSection/HeroSection';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface LandingPageProps {
  mainHeading?: string;
  subHeading?: string;
  specialOffer?: string;
  specialOfferDetails?: string;
  showTestimonials?: boolean;
  showPricing?: boolean;
  showLocations?: boolean;
  heroBgImage?: string | { url: string };
  featuresBgImage?: string | { url: string };
  testimonialsBgImage?: string | { url: string };
  locationsBgImage?: string | { url: string };
}

const getImageUrl = (imageValue: string | { url: string } | undefined) => {
  if (!imageValue) return undefined;
  // If it's a Builder-uploaded image, it will be an object with a url property
  if (typeof imageValue === 'object' && 'url' in imageValue) {
    return imageValue.url;
  }
  // If it's a direct URL string, use it as is
  return imageValue;
};

export function LandingPage({
  mainHeading = 'Never Shave Again. Guaranteed.',
  subHeading = 'Experience permanent hair reduction with the industry leaders',
  specialOffer = 'January Exclusive',
  specialOfferDetails = 'Free Treatment With Consultation',
  showTestimonials = true,
  showPricing = true,
  showLocations = true,
  heroBgImage = 'https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  featuresBgImage,
  testimonialsBgImage,
  locationsBgImage,
}: LandingPageProps) {
  const features: Feature[] = [
    {
      title: 'Unlimited Package™',
      description: 'Get unlimited treatments for life at no additional cost',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
    {
      title: 'FDA-Cleared Technology',
      description: 'Safe treatments tailored to your skin type & hair color',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Payment Plans',
      description: 'Everyone is approved for payment plans that fit their budget',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <HeroSection 
        title={[mainHeading]}
        description={subHeading}
        primaryButtonText="Book Free Consultation"
        secondaryButtonText="Learn More"
        backgroundImage={getImageUrl(heroBgImage)}
      />

      <div className="space-y-20">
        {/* Features Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: getImageUrl(featuresBgImage) ? `url(${getImageUrl(featuresBgImage)})` : 'none' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-[#0088AB] dark:text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-20 bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                About Laser Hair Removal
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Laser hair removal provides permanent results† and is less expensive than
                maintaining a waxing and shaving routine for a lifetime. Our treatments
                are safe, and all procedures are performed by Authorized Candela
                Practitioners using FDA-cleared lasers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#0088AB] text-white px-6 py-3 rounded-lg hover:bg-[#006d88] transition-colors">
                  Learn About the Process
                </button>
                <button className="bg-white text-[#0088AB] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  View FAQs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator */}
        {showPricing && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <PricingCalculator
                treatmentAreas={treatmentAreas}
                title="See Your Custom Price"
                subtitle="Select your treatment areas to view pricing and available discounts"
              />
            </div>
          </section>
        )}

        {/* Testimonials */}
        {showTestimonials && (
          <section 
            className="relative py-20 bg-cover bg-center"
            style={{ backgroundImage: getImageUrl(testimonialsBgImage) ? `url(${getImageUrl(testimonialsBgImage)})` : 'none' }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Client Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Location Finder */}
        {showLocations && (
          <section 
            className="relative py-20 bg-cover bg-center"
            style={{ backgroundImage: getImageUrl(locationsBgImage) ? `url(${getImageUrl(locationsBgImage)})` : 'none' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <LocationFinder
                title="Find a Location Near You"
                subtitle="We have multiple convenient locations throughout the area"
              />
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="relative py-20 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#0088AB]/90"></div>
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your free consultation today and take the first step towards
              permanent hair removal.
            </p>
            <button className="bg-white text-[#0088AB] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

Builder.registerComponent(LandingPage, {
  name: 'LandingPage',
  inputs: [
    {
      name: 'mainHeading',
      type: 'string',
      defaultValue: 'Never Shave Again. Guaranteed.',
    },
    {
      name: 'subHeading',
      type: 'string',
      defaultValue: 'Experience permanent hair reduction with the industry leaders',
    },
    {
      name: 'specialOffer',
      type: 'string',
      defaultValue: 'January Exclusive',
    },
    {
      name: 'specialOfferDetails',
      type: 'string',
      defaultValue: 'Free Treatment With Consultation',
    },
    {
      name: 'showTestimonials',
      type: 'boolean',
      defaultValue: true,
    },
    {
      name: 'showPricing',
      type: 'boolean',
      defaultValue: true,
    },
    {
      name: 'showLocations',
      type: 'boolean',
      defaultValue: true,
    },
    {
      name: 'heroBgImage',
      type: 'background',
      defaultValue: 'https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'featuresBgImage',
      type: 'background',
    },
    {
      name: 'testimonialsBgImage',
      type: 'background',
    },
    {
      name: 'locationsBgImage',
      type: 'background',
    },
  ],
  noWrap: true,
  defaultStyles: {
    marginTop: '0px',
    marginBottom: '0px',
  },
});
