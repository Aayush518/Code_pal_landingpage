import { Play, ArrowRight, Sparkles, Code2, GitBranch, Zap, CheckCircle2, MessageSquare } from 'lucide-react'
import { Button } from './ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export function HeroSection() {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
  }

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

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-primary to-secondary"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
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

            {/* Enhanced CTA Section */}
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

            {/* Added Stats Section */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { label: "Active Users", value: "10K+" },
                { label: "Code Reviews", value: "1M+" },
                { label: "Time Saved", value: "30%" },
              ].map((stat, index) => (
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
          </motion.div>

          {/* Right Side - Interactive Code Review Interface */}
          <motion.div 
            className="relative lg:h-[600px] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
          >
            {/* Modern Code Editor Interface */}
            <motion.div
              className="relative bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              {/* Editor Header */}
              <div className="bg-[#2D2D2D] p-4 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="flex items-center space-x-2 text-gray-400 text-sm bg-[#333] px-3 py-1 rounded-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>feature/auth-update</span>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>All tests passing</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-gray-500 mb-4 text-xs">src/auth/AuthProvider.tsx</div>
                <div className="space-y-2">
                  {[
                    { num: 1, code: 'export function AuthProvider({ children }: PropsWithChildren) {', color: 'text-blue-400' },
                    { num: 2, code: '  const [user, setUser] = useState<User | null>(null);', color: 'text-purple-400' },
                    { num: 3, code: '', color: 'text-white' },
                    { num: 4, code: '  // Enhanced security measures', color: 'text-gray-500' },
                    { num: 5, code: '  const validateSession = useCallback(async () => {', color: 'text-blue-400' },
                    { num: 6, code: '    try {', color: 'text-purple-400' },
                    { num: 7, code: '      const session = await auth.getSession();', color: 'text-white' },
                    { num: 8, code: '      setUser(session.user);', color: 'text-white' },
                    { num: 9, code: '    } catch (error) {', color: 'text-purple-400' },
                    { num: 10, code: '      console.error("Session validation failed");', color: 'text-orange-400' },
                    { num: 11, code: '    }', color: 'text-purple-400' },
                    { num: 12, code: '  }, []);', color: 'text-blue-400' },
                  ].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-8 text-gray-600 group-hover:text-gray-400">{line.num}</span>
                      <span className={`${line.color} group-hover:opacity-80`}>{line.code}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Review Comments */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2"
                >
                  <motion.div 
                    className="bg-[#2D2D2D] p-4 rounded-lg shadow-lg border border-gray-700 max-w-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span className="text-white text-sm font-medium">Code Review</span>
                    </div>
                    <p className="text-gray-400 text-sm">Consider using a custom hook for session management to improve reusability.</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <motion.img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
                        alt="Reviewer"
                        className="w-6 h-6 rounded-full ring-2 ring-primary/20"
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="text-gray-500 text-xs">Sarah Chen</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Activity Indicators */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-[#2D2D2D] p-3 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="flex items-center space-x-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                      <span className="text-gray-400">AI Analysis Active</span>
                    </motion.div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-400">3 Suggestions Available</span>
                    </div>
                  </div>
                  <motion.div 
                    className="flex items-center space-x-2 text-gray-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Coverage: 94%</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}