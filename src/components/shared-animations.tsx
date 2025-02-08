import { motion } from 'framer-motion'

// Enhanced fade in animation with smoother easing
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
}

// Improved stagger effect with custom timing
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Optimized fade in view with better threshold
export const FadeInView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ 
      duration: 0.4, 
      delay,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    {children}
  </motion.div>
)

// Enhanced scale animation with spring physics
export const ScaleInView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ 
      type: "spring",
      stiffness: 200,
      damping: 25,
      delay 
    }}
  >
    {children}
  </motion.div>
)

// New smooth hover animation
export const SmoothHover = ({ children }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }}
  >
    {children}
  </motion.div>
)

// New floating animation
export const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }
    }}
  >
    {children}
  </motion.div>
)

// New parallax scroll effect
export const ParallaxScroll = ({ children, speed = 0.5 }) => {
  const y = useScroll(speed)
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
}

// Helper function for parallax effect
const useScroll = (speed = 0.5) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return -scrollY
}