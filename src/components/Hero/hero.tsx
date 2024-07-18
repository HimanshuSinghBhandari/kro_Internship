import React from 'react';
import { motion } from 'framer-motion';
import RepeatingText from './repeating-text';

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-start justify-center min-h-screen text-center px-4"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ml-[15rem] text-white">
        Empowering Lives Through
      </h1>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ml-[15rem] text-white">
        Innovative <span className="relative">
          AI
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 bg-purple-600"
          />
        </span> Technologies
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 ml-[15rem]"
      >
        Finding new horizons for visionaries to accelerate their innovation and progress
      </motion.p>

      <div className="flex space-x-4 ml-[15rem] mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-2 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-700 transition-colors"
        >
          Explore Our Services
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-transparent text-white rounded-md font-semibold border border-1 border-blue-600 hover:bg-blue-300 hover:text-black transition-colors"
        >
          Learn More
        </motion.button>
      </div>

      <RepeatingText />
    </motion.div>
  );
};

export default Hero;
