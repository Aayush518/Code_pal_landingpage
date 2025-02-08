import { Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HeroStats } from './hero-stats';
import { HeroCTA } from './hero-cta';
import { CodePreview } from './code-preview';

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Code Reviews", value: "1M+" },
    { label: "Time Saved", value: "30%" },
  ];

  return (
    <div ref={containerRef} className="relative min-h-[90vh] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000010_1px,transparent_1px),linear-gradient(180deg,#00000010_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
        </div>
        <motion.div 
          className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute left-20 bottom-20 w-[400px] h-[400px] bg-secondary/10 rounded-full filter blur-[60px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            style={{ y, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Enhanced Label */}
              <motion.div
                className="absolute -top-8 left-0 text-sm font-medium"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <motion.div
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                    The Future of Code Review
                  </span>
                </div>
              </motion.div>
              
              {/* Enhanced Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  MAKE YOUR
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary relative"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  <motion.span
                    className="absolute -inset-1 rounded-lg bg-primary/10 filter blur"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative">CODE</span>
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  REVIEWS
                </motion.span>
                <motion.div 
                  className="inline-block glass-card px-4 py-2 rounded-lg mt-4"
                  animate={{ rotate: [-1, 1, -1], scale: [0.98, 1, 0.98] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ROCK SOLID
                  </span>
                </motion.div>
              </h1>
            </motion.div>

            <HeroCTA />
            <HeroStats stats={stats} />
          </motion.div>

          {/* Right Side - Code Preview */}
          <CodePreview />
        </div>
      </div>
    </div>
  );
}