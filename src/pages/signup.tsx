import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Twitter, Laptop, Check } from 'lucide-react'

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add signup logic here
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="flex justify-center mb-8">
            <Laptop className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
          <p className="text-gray-600 text-center mb-8">Start your journey with Code Pal today</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Work email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full"
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary hover:text-primary/80">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                'Create account'
              )}
            </Button>
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Button>
            </div>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary/80">
              Sign in
            </Link>
          </p>
        </motion.div>

        {/* Right Side - Pricing Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative h-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"
              animate={{ rotate: [3, -1, 3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl h-full">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mt-2">Perfect for growing teams</p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Unlimited team members",
                  "Advanced code analysis",
                  "Unlimited repositories",
                  "Priority support",
                  "Custom workflows",
                  "API access"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.pravatar.cc/48?img=3"
                      alt="User"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">
                        "Code Pal has transformed how our team handles code reviews. The AI insights are game-changing!"
                      </p>
                      <p className="text-sm font-medium mt-1">Sarah Chen, Tech Lead at Acme Inc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}