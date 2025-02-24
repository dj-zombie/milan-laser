'use client';

import { Builder } from '@builder.io/react';

interface TestimonialProps {
  customerName: string;
  customerImage?: string;
  rating: number;
  testimonialText: string;
  treatmentType: string;
  date: string;
}

export function Testimonial({
  customerName,
  customerImage,
  rating,
  testimonialText,
  treatmentType,
  date,
}: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {customerImage ? (
            <img
              src={customerImage}
              alt={customerName}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-300 text-lg font-semibold">
                {customerName.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {customerName}
          </h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonialText}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>{treatmentType}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

Builder.registerComponent(Testimonial, {
  name: 'Testimonial',
  inputs: [
    {
      name: 'customerName',
      type: 'string',
      required: true,
    },
    {
      name: 'customerImage',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 5,
    },
    {
      name: 'testimonialText',
      type: 'longText',
      required: true,
    },
    {
      name: 'treatmentType',
      type: 'string',
      required: true,
    },
    {
      name: 'date',
      type: 'string',
      required: true,
    },
  ],
});
