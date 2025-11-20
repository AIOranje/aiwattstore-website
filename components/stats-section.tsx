"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Battery, Users, Leaf, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Battery,
    value: 50000,
    suffix: "+",
    label: "MWh Stored",
    description: "Total energy capacity",
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Happy Clients",
    description: "Worldwide customers",
  },
  {
    icon: Leaf,
    value: 30,
    suffix: "%",
    label: "CO₂ Reduction",
    description: "Average savings",
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",
    label: "Uptime",
    description: "System reliability",
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
