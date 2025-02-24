'use client';

import { Builder } from '@builder.io/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TreatmentArea {
  name: string;
  basePrice: number;
  description: string;
}

interface PricingCalculatorProps {
  treatmentAreas: TreatmentArea[];
  title?: string;
  subtitle?: string;
  discountPercentage?: number;
}

export function PricingCalculator({
  treatmentAreas,
  title = 'Treatment Cost Calculator',
  subtitle = 'Select your desired treatment areas to calculate your estimated cost',
  discountPercentage = 20,
}: PricingCalculatorProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (areaName: string) => {
    setSelectedAreas((prev) =>
      prev.includes(areaName)
        ? prev.filter((area) => area !== areaName)
        : [...prev, areaName]
    );
  };

  const calculateTotal = () => {
    const baseTotal = selectedAreas.reduce((total, areaName) => {
      const area = treatmentAreas.find((a) => a.name === areaName);
      return total + (area?.basePrice || 0);
    }, 0);

    const discount = selectedAreas.length > 1 ? discountPercentage / 100 : 0;
    return baseTotal * (1 - discount);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200"
    >
      <motion.div className="text-center mb-8">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-300"
        >
          {subtitle}
        </motion.p>
        {discountPercentage > 0 && (
          <motion.p
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 mt-2"
          >
            Save {discountPercentage}% when you choose multiple areas!
          </motion.p>
        )}
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      >
        {treatmentAreas.map((area) => (
          <motion.button
            key={area.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleArea(area.name)}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedAreas.includes(area.name)
                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
            }`}
          >
            <motion.div className="flex items-center justify-between mb-2">
              <motion.span
                variants={itemVariants}
                className={`text-lg font-semibold ${
                  selectedAreas.includes(area.name)
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {area.name}
              </motion.span>
              <motion.span
                variants={itemVariants}
                className={`text-gray-600 dark:text-gray-300 ${
                  selectedAreas.includes(area.name)
                    ? 'text-blue-500 dark:text-blue-400'
                    : ''
                }`}
              >
                ${area.basePrice}
              </motion.span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              {area.description}
            </motion.p>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedAreas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-gray-200 dark:border-gray-700 pt-6"
          >
            <motion.div className="text-center">
              <motion.p
                variants={itemVariants}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                Estimated Total
              </motion.p>
              <motion.p
                variants={itemVariants}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-3xl font-bold text-[#0088AB] dark:text-blue-400"
              >
                ${calculateTotal().toFixed(2)}
              </motion.p>
              {selectedAreas.length > 1 && (
                <motion.p
                  variants={itemVariants}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-[#0088AB] dark:text-green-400 mt-2"
                >
                  Multi-area discount applied!
                </motion.p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-3 bg-[#0088AB] text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

Builder.registerComponent(PricingCalculator, {
  name: 'PricingCalculator',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Treatment Cost Calculator',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Select your desired treatment areas to calculate your estimated cost',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      defaultValue: 20,
    },
    {
      name: 'treatmentAreas',
      type: 'list',
      required: true,
      subFields: [
        {
          name: 'name',
          type: 'string',
          required: true,
        },
        {
          name: 'basePrice',
          type: 'number',
          required: true,
        },
        {
          name: 'description',
          type: 'string',
          required: true,
        },
      ],
    },
  ],
});
