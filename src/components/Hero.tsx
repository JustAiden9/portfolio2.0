import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            High School
            <br />
            <span className="text-emerald-400">Web Developer</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 mb-8 max-w-2xl"
          >
            Creating modern web experiences with a passion for clean code and innovative design. Currently a junior in high school, building the future one line at a time.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="inline-flex items-center space-x-2 bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;