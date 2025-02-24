import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VideoBackground } from './VideoBackground';
import { Button } from './Button';

interface HeroSectionProps {
  title: string[];
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundImage,
}) => {
  const { scrollY } = useScroll();
  
  // Transform scroll position into parallax and opacity values
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative h-screen w-full font-[Inter] overflow-hidden">
      {backgroundImage ? (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: backgroundY,
            opacity,
            scale: 1.2, // Slightly larger to allow for parallax movement
          }}
        />
      ) : (
        <VideoBackground />
      )}
      
      {/* Dark overlay with scroll-based opacity */}
      <motion.div 
        className="absolute inset-0 bg-black/40"
        style={{ opacity }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {title.map((line, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-x-4 space-y-4 w-screen"
        >
          <Button variant="primary">{primaryButtonText}</Button>
          <Button variant="secondary">{secondaryButtonText}</Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="w-6 h-6 border-2 border-white border-t-0 border-l-0 transform rotate-45 translate-y-4"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};
