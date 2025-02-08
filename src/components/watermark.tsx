import { motion } from 'framer-motion'

export function Watermark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 select-none"
    >
      <div className="absolute inset-0 flex items-center justify-center transform -rotate-12">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute whitespace-nowrap text-[20vw] font-black text-black/50"
            style={{
              top: `${i * 40}vh`,
              left: `${(i % 2) * -50}vw`,
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4))',
              letterSpacing: '0.1em'
            }}
            animate={{
              opacity: [0.5, 0.4, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            CODE PAL CODE PAL CODE PAL
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"
        animate={{
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}