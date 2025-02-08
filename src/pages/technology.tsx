import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, GitBranch, Terminal, Cpu, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInView, ScaleInView } from "@/components/shared-animations"

export default function Technology() {
  const technologies = [
    {
      icon: Code,
      title: "Modern Stack",
      description: "Built with the latest technologies for optimal performance"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Advanced Git integration for seamless workflow"
    },
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Powerful command-line tools for automation"
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Smart code analysis with machine learning"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security measures"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast code processing"
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
              Our Technology Stack
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Built with cutting-edge technologies for maximum efficiency
            </motion.p>
          </div>
        </ScaleInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
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
                    <CardTitle>{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              </FadeInView>
            )
          })}
        </div>

        <ScaleInView delay={0.6}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Our Tech Stack Matters</h2>
            <p className="text-gray-600 mb-8">
              Our carefully chosen technology stack ensures reliability, scalability, and superior performance for your code review process.
            </p>
          </div>
        </ScaleInView>
      </div>
    </div>
  )
}