import { Database, Cpu, GitBranch, Shield, Zap, Users, Code2, MessageSquare, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300" />
      <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="relative">
          <div className="absolute -top-2 -right-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl"
            />
          </div>
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-3 mb-6"
            >
              <Icon className="w-full h-full text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Smart Repository Management",
      description: "Intelligent organization and unlimited storage for all your code repositories"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms provide real-time code suggestions"
    },
    {
      icon: Code2,
      title: "Intelligent Code Review",
      description: "Automated code analysis with contextual suggestions and best practices"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with advanced encryption and compliance features"
    },
    {
      icon: MessageSquare,
      title: "Collaborative Reviews",
      description: "Real-time discussions and inline comments for better team communication"
    },
    {
      icon: Sparkles,
      title: "Quality Insights",
      description: "Detailed metrics and analytics to improve code quality over time"
    }
  ]

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(233, 116, 81, 0.1) 0%, rgba(244, 208, 63, 0.1) 100%)',
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-2xl">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-900">
            Supercharge Your Workflow
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the next generation of code review with powerful features designed to make your development process faster, smarter, and more efficient
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Improving Your Code
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}