import React from 'react';
import { motion } from 'framer-motion';
import Krook from "./krook.jpg"

const Navbar: React.FC = () => {
  const navItems = ['About', 'Service', 'Process', 'Work', 'Pricing', 'FAQs'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      {/* Left side - Company Symbol */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="ml-[8rem]"
      >
       <img src={Krook} alt="Krook" className="h-[3rem] w-auto" /> 
      </motion.div>

      {/* Center - Navigation Items */}
      <ul className="flex space-x-6">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="hover:text-blue-300 transition-colors">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Right side - Book a Call button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 border-2 border-blue-300 rounded-xl hover:bg-blue-900 transition-colors mr-[8rem]"
      >
        Book a Call
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
