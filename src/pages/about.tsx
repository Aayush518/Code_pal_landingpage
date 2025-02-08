import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Users, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInView, ScaleInView } from "@/components/shared-animations"

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Smart Code Analysis",
      description: "Advanced algorithms to detect potential issues and suggest improvements"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams of all sizes with real-time collaboration features"
    },
    {
      icon: Rocket,
      title: "Fast & Efficient",
      description: "Lightning-fast performance for quick code reviews and deployments"
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
              About Code Pal
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're revolutionizing the way teams collaborate on code reviews
            </motion.p>
          </div>
        </ScaleInView>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
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
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </FadeInView>
            )
          })}
        </div>

        <ScaleInView delay={0.4}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Start Your Free Trial
              </Button>
            </motion.div>
          </div>
        </ScaleInView>
      </div>
    </div>
  )
}