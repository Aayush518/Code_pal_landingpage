import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FadeInView, ScaleInView } from "@/components/shared-animations"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for small teams",
      features: [
        "Up to 3 team members",
        "Basic code review tools",
        "5 repositories",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for growing teams",
      features: [
        "Unlimited team members",
        "Advanced code analysis",
        "Unlimited repositories",
        "Priority support",
        "Custom workflows",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Training sessions"
      ]
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Choose the plan that's right for your team
            </motion.p>
          </div>
        </ScaleInView>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <Card 
                className={`transform transition-all duration-300 hover:scale-105 ${
                  index === 1 ? "border-primary shadow-lg hover:shadow-xl" : "hover:shadow-lg"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <motion.div 
                    className="mt-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </motion.div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full ${
                        index === 1 
                          ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" 
                          : ""
                      }`} 
                      variant={index === 1 ? "default" : "outline"}
                    >
                      Get started
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  )
}