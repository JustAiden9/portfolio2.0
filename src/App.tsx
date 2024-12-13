import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500 opacity-20 blur-[128px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500 opacity-20 blur-[128px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;