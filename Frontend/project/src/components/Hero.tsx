import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  const typedRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Set up Typed.js with different speeds based on device
    const typed = new Typed(typedRef.current, {
      strings: ["Innovation", "Delivery", "Creation", "Excellence", "Solutions"],
      typeSpeed: isMobile ? 150 : 100, // Slower on mobile
      backSpeed: isMobile ? 75 : 50,   // Slower on mobile
      loop: true,
    });
    
    return () => {
      typed.destroy();
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]); 

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black to #00b4ff ">
      
      {/* Subtle overlay for depth */}
      {/* Background with vertical lines and blue overlay */}
      <div className="absolute inset-0 z-0 ">
        {/* Vertical lines pattern */}
        {/* Optional light beam effects for added dimension */}
        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-[#00b4ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 bg-[#3b82F6]/5 rounded-full blur-3xl"></div>
        {/* Blue glow effects */}
        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-[#00b4ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 bg-[#3b82F6]/5 rounded-full blur-3xl"></div>
        {/* Additional smaller glows */}
        <div className="absolute top-3/4 left-1/4 w-1/4 h-1/4 bg-[#00b4ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-1/5 h-1/5 bg-[#00b4ff]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-2xl text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="flex items-center justify-center space-x-3"
            >
              {/* Logo content removed */}
            </motion.div>
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col"
            >
              <h2 className="text-5xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Transforming Ideas Into
              </h2>
              <div className="flex flex-col md:flex-row md:justify-center items-center">
                <span className="text-5xl md:text-4xl lg:text-6xl font-bold text-white mr-2"></span>
                <span className="text-5xl md:text-4xl lg:text-6xl font-bold text-[#00b4ff]">
                  <span ref={typedRef}></span>
                </span>
              </div>
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-white leading-relaxed"
            >
              We craft cutting-edge software solutions that drive innovation and accelerate your business growth in the digital age.
            </motion.p>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Mission & Vision content removed */}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="/services">
                <button className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-black font-semibold text-base md:text-lg rounded-lg shadow-lg border-2 border-transparent hover:border-[#00b4ff] hover:text-[#00b4ff] transition-all duration-300">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 bg-white transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;