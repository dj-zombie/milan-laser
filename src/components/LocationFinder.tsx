'use client';

import { Builder } from '@builder.io/react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchLocations } from '../api/builderApi';

interface Location {
  id: string;
  name: string;
  address: {
    Default: string;
  };
  phone: string;
  distance?: string;
}

interface LocationFinderProps {
  title: string;
  subtitle: string;
}

export function LocationFinder({ title, subtitle }: LocationFinderProps) {
  const [searchZip, setSearchZip] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    loadLocations();
  }, []);

  const handleSearch = () => {
    if (!searchZip.trim()) {
      setFilteredLocations([]);
      setHasSearched(true);
      return;
    }

    const filtered = locations.filter(location => 
      location.address.Default.toLowerCase().includes(searchZip.toLowerCase())
    );
    setFilteredLocations(filtered);
    setHasSearched(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
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
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="max-w-md mx-auto mb-8"
      >
        <div className="flex gap-2">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            value={searchZip}
            onChange={(e) => setSearchZip(e.target.value)}
            placeholder="Enter ZIP code"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0088AB] dark:bg-gray-700 dark:text-white text-[#0088AB]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSearch}
            className="px-6 py-2 bg-[#0088AB] text-white rounded-lg hover:bg-[#0088AB] transition-colors"
          >
            Search
          </motion.button>
        </div>
      </motion.div>

      {hasSearched && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <motion.h3 
                      variants={itemVariants}
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      {location.name}
                    </motion.h3>
                    <motion.p 
                      variants={itemVariants}
                      className="text-gray-600 dark:text-gray-300 mb-2"
                    >
                      {location.address.Default}
                    </motion.p>
                    <motion.p 
                      variants={itemVariants}
                      className="text-gray-600 dark:text-gray-300 mb-2"
                    >
                      Phone: {location.phone}
                    </motion.p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-[#0088AB] text-white rounded hover:bg-[#0088AB] transition-colors"
                    >
                      Book Appointment
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p 
              variants={itemVariants}
              className="text-center text-gray-600 dark:text-gray-300"
            >
              No locations found in your area. Please try a different ZIP code.
            </motion.p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

Builder.registerComponent(LocationFinder, {
  name: 'LocationFinder',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Find a Location Near You',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'We have multiple convenient locations throughout the area',
    },
  ],
  noWrap: true,
  defaultStyles: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});
