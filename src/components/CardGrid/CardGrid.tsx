import React from 'react';
import { motion } from 'framer-motion';
import CardComponent from '../CardComponent/CardComponent';

interface CardGridProps {
  cards: Array<{
    title: string;
    rating: number;
    reviewCount: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    distance: string;
  }>;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <motion.div 
      className="flex flex-wrap gap-4 justify-center items-start p-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} index={index} />
      ))}
    </motion.div>
  );
};

export default CardGrid;
