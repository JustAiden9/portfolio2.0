import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-zinc-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold text-white">Aiden.dev</span>
          </motion.div>
          <nav className="flex items-center space-x-6">
            {[
              { icon: Mail, href: "mailto:aiden@example.com" },
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, color: "#4ade80" }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;