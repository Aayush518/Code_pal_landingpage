import { motion } from 'framer-motion';
import { GitBranch, CheckCircle2, Zap, Code2, MessageSquare } from 'lucide-react';

export function CodePreview() {
  return (
    <motion.div 
      className="relative lg:h-[600px] mt-8 lg:mt-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
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
  );
}