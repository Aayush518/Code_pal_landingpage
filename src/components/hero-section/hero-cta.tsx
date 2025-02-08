import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export function HeroCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <Button 
          size="lg" 
          className="w-full relative overflow-hidden group bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center relative z-10"
          >
            GET 2 MONTHS FREE
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.span>
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <Button 
          variant="ghost" 
          size="lg" 
          className="w-full glass-card text-base sm:text-lg group hover:bg-white/50"
        >
          See how it works
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Play className="ml-2 h-5 w-5 group-hover:text-primary transition-colors" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
}