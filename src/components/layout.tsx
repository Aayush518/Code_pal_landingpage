import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  // Smooth scroll setup with improved performance
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'smooth'
    
    // Optimize scroll performance
    let scrollTimeout: number
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY
        if (currentScroll > 100) {
          html.style.scrollBehavior = 'auto'
        } else {
          html.style.scrollBehavior = 'smooth'
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      html.style.scrollBehavior = 'auto'
    }
  }, [])

  // Enhanced scroll to top with smooth animation
  useEffect(() => {
    const scrollToTop = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, currentScroll - currentScroll / 8)
      }
    }
    scrollToTop()
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen relative"
      >
        {children}
        
        {/* Smooth page transition overlay */}
        <motion.div
          className="fixed inset-0 pointer-events-none bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  )
}