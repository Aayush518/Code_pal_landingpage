import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BinaryColumnProps {
  index: number;
}

export function BinaryColumn({ index }: BinaryColumnProps) {
  const [binaryString, setBinaryString] = useState('');
  
  useEffect(() => {
    const generateBinary = () => {
      const length = 30 + Math.random() * 40; // Longer strings
      return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
    };

    const updateBinary = () => {
      setBinaryString(generateBinary());
    };

    const interval = setInterval(updateBinary, 1000 + Math.random() * 2000); // Faster updates
    updateBinary();

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute text-[12px] font-mono leading-none text-primary whitespace-pre"
      style={{
        left: `${index * 15}px`, // Closer columns
        top: -100,
        writingMode: 'vertical-rl',
        textShadow: '0 0 8px rgba(233, 116, 81, 0.6)', // Enhanced glow
        opacity: 0.8 // Increased base opacity
      }}
      initial={{ y: -100 }}
      animate={{
        y: ['0%', '100%'],
      }}
      transition={{
        duration: 15 + Math.random() * 10, // Slightly faster animation
        repeat: Infinity,
        ease: 'linear',
        delay: -Math.random() * 15,
      }}
    >
      {binaryString}
    </motion.div>
  );
}