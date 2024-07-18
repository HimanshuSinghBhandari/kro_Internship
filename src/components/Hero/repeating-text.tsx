import React from 'react';
import { motion } from 'framer-motion';

const RepeatingText: React.FC = () => {
  const text = "From ideas to software solutions 🙌🍾";
  const repeatCount = 12; // Increased for smoother loop
  const textLength = text.length;

  return (
    <div className="overflow-hidden h-12 flex items-center justify-center bg-black">
      <div className="relative w-full mx-auto overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-white text-lg font-bold flex"
          animate={{
            x: [0, -(textLength * 12)], // Adjusted for smaller text
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...Array(repeatCount)].map((_, i) => (
            <motion.span
              key={i}
              className="mr-4" // Reduced margin
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                  delay: i * 0.2, // Stagger the fade effect
                },
              }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RepeatingText;