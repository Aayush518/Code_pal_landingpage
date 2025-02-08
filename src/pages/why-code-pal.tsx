import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInView, ScaleInView } from "@/components/shared-animations"

export default function WhyCodePal() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce code review time by up to 60% with our automated analysis tools"
    },
    {
      icon: Users,
      title: "Better Collaboration",
      description: "Foster team collaboration with real-time comments and discussions"
    },
    {
      icon: CheckCircle,
      title: "Improve Quality",
      description: "Catch bugs early and maintain high code quality standards"
    },
    {
      icon: Zap,
      title: "Boost Productivity",
      description: "Streamline your workflow with intelligent automation"
    }
  ]

  return (
    <div className="min-h-screen py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScaleInView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Code Pal?
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your code review process with our powerful platform
            </motion.p>
          </div>
        </ScaleInView>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <FadeInView key={index} delay={index * 0.1}>
                <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <Icon className="w-12 h-12 text-primary mb-4" />
                    </motion.div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </FadeInView>
            )
          })}
        </div>

        <ScaleInView delay={0.4}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 text-center transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your code reviews?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of developers who are already using Code Pal to improve their code quality
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Start Free Trial
              </Button>
            </motion.div>
          </div>
        </ScaleInView>
      </div>
    </div>
  )
}