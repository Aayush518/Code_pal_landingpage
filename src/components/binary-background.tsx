import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BinaryBackground() {
  const [columns, setColumns] = useState<number[]>([]);
  
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      const columnCount = Math.floor(width / 20); // One binary string every 20px
      setColumns(Array.from({ length: columnCount }, (_, i) => i));
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.035] mix-blend-luminosity">
      {columns.map((i) => (
        <BinaryColumn key={i} index={i} />
      ))}
    </div>
  );
}

function BinaryColumn({ index }: { index: number }) {
  const [binaryString, setBinaryString] = useState('');
  
  useEffect(() => {
    const generateBinary = () => {
      const length = 20 + Math.random() * 30;
      return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
    };

    const updateBinary = () => {
      setBinaryString(generateBinary());
    };

    const interval = setInterval(updateBinary, 2000 + Math.random() * 3000);
    updateBinary();

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute text-[10px] font-mono leading-none text-primary/50 whitespace-pre"
      style={{
        left: `${index * 20}px`,
        top: -100,
        writingMode: 'vertical-rl',
      }}
      initial={{ y: -100 }}
      animate={{
        y: ['0%', '100%'],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: 'linear',
        delay: -Math.random() * 20,
      }}
    >
      {binaryString}
    </motion.div>
  );
}