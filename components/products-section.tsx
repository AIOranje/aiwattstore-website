"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Battery, Zap, Network, BarChart3, Container, Sun, Home, TrendingUp } from "lucide-react"

const products = [
  {
    title: "AI-Energy Storage Systems",
    description:
      "Sleek AI-powered battery systems that intelligently store and distribute energy for maximum efficiency.",
    image: "/sleek-ai-powered-home-battery-system-on-a-wall--gl.jpg",
    icon: Battery,
  },
  {
    title: "AI-Charging Stations",
    description: "Smart charging infrastructure that optimizes power delivery for electric vehicles with AI precision.",
    image: "/modern-ai-driven-electric-car-charging-station-wit.jpg",
    icon: Zap,
  },
  {
    title: "Smart Grid Software",
    description: "Neural network-powered software that creates intelligent energy distribution networks.",
    image: "/ai-energy-network-visualization--neural-data-nodes.jpg",
    icon: Network,
  },
  {
    title: "AI Energy Monitoring",
    description: "Real-time dashboards with predictive analytics to optimize your energy consumption patterns.",
    image: "/futuristic-dashboard-interface-showing-energy-data.jpg",
    icon: BarChart3,
  },
  {
    title: "Battery Container Systems",
    description: "Industrial-scale modular battery containers for large energy storage deployments with AI management.",
    image: "/industrial-battery-container-energy-storage-system.jpg",
    icon: Container,
  },
  {
    title: "Solar AI Systems",
    description:
      "Intelligent solar panels with AI-driven optimization that maximizes energy capture throughout the day.",
    image: "/modern-solar-panels-with-ai-technology-and-hologr.jpg",
    icon: Sun,
  },
  {
    title: "Home Energy Hub",
    description: "All-in-one residential energy management system that learns your habits and optimizes consumption.",
    image: "/smart-home-energy-control-center-with-touchscree.jpg",
    icon: Home,
  },
  {
    title: "Energy Trading Platform",
    description: "AI-powered marketplace for buying and selling excess renewable energy with predictive pricing.",
    image: "/futuristic-energy-trading-platform-interface-wit.jpg",
    icon: TrendingUp,
  },
]

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" className="py-16 sm:py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-4">
            Products & Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Cutting-edge AI technology meets sustainable energy innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                    <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
