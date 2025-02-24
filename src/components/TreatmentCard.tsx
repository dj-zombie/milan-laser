'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

interface TreatmentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
}

export function TreatmentCard({ title, description, imageUrl, price, duration }: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="dark:bg-gray-700 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <motion.div 
        className="aspect-w-16 aspect-h-9"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      </motion.div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3 
          className="text-xl font-semibold dark:text-white text-gray-900 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="dark:text-gray-300 text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span 
            className="text-lg font-bold text-[#0088AB]"
            whileHover={{ scale: 1.1 }}
          >
            {price}
          </motion.span>
          <span className="text-sm text-gray-500">{duration}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
