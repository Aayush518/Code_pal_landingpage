import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BinaryColumn } from './binary-column';

export function BinaryBackground() {
  const [columns, setColumns] = useState<number[]>([]);
  
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      const columnCount = Math.floor(width / 15); // Increased density
      setColumns(Array.from({ length: columnCount }, (_, i) => i));
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {columns.map((i) => (
        <BinaryColumn key={i} index={i} />
      ))}
    </div>
  );
}