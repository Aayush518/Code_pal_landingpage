import { motion } from 'framer-motion';

interface HeroStatsProps {
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <motion.div 
      className="grid grid-cols-3 gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center glass-card rounded-lg p-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.p
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {stat.value}
          </motion.p>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}