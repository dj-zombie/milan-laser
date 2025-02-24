'use client';

import { testimonials, locations, treatmentAreas } from '../data/exampleData';
import { Testimonial } from './Testimonial';
import { LocationFinder } from './LocationFinder';
import { PricingCalculator } from './PricingCalculator';

export default function ExamplePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-500 to-blue-700">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Your Life with Laser Hair Removal
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Experience the freedom of permanent hair reduction
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
          Book Free Consultation
        </button>
      </section>

      {/* Pricing Calculator Section */}
      <section className="max-w-6xl mx-auto px-4">
        <PricingCalculator
          treatmentAreas={treatmentAreas}
          title="Calculate Your Treatment Cost"
          subtitle="Select the areas you'd like treated to see your personalized price"
          discountPercentage={20}
        />
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Location Finder Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <LocationFinder
          locations={locations}
          title="Find Your Nearest Location"
          subtitle="Enter your ZIP code to discover Milan Laser locations in your area"
        />
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of satisfied clients who have experienced the Milan Laser difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Book Free Consultation
            </button>
            <button className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
