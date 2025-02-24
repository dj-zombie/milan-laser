import React from 'react';
import { motion } from 'framer-motion';
import StarRating from './StarRating';
import ContactInfo from './ContactInfo';
import ActionButtons from './ActionButtons';

interface CardComponentProps {
  title: string;
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  distance: string;
  index?: number;
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2
    }
  }
};

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  rating,
  reviewCount,
  address,
  city,
  state,
  zip,
  phone,
  distance,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="w-[273px]"
    >
      <div className="h-[278px] p-[1px] border-[1px] border-[rgba(0,0,0,0.18)] dark:bg-gray-700 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] rounded-[4px]">
        <motion.div 
          className="p-4 space-y-4"
          variants={contentVariants}
        >
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-[20px] font-[Inter] text-[#0088AB]">{title}</h2>
            <StarRating rating={rating} reviewCount={reviewCount} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ContactInfo
              address={address}
              city={city}
              state={state}
              zip={zip}
              phone={phone}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ActionButtons />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#" className="text-[#0088AB] text-[12px] hover:underline">
              More info
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="px-4 py-2 -mt-4 bg-[rgba(33,37,41,0.03)] border-t border-[rgba(0,0,0,0.18)] text-[12px] italic text-gray-500">
              Approx. {distance}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
