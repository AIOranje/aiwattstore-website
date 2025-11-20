"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Settings, Battery, Leaf, Home } from "lucide-react"

const features = [
  {
    icon: Settings,
    title: "Artificial Intelligence Efficiency",
    description: "Maximize every watt through smart data analysis and predictive algorithms.",
  },
  {
    icon: Battery,
    title: "Maximum Storage Power",
    description: "Reliable AI-driven energy storage systems built for the future.",
  },
  {
    icon: Leaf,
    title: "Green Future Certified",
    description: "Sustainable technology with real environmental impact and measurable results.",
  },
  {
    icon: Home,
    title: "Smart Home Ready",
    description: "Fully compatible with modern smart home ecosystems and IoT devices.",
  },
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-4">
            Why Choose AIWattStore?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Leading the revolution in intelligent energy management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors glow-effect">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
