"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, DollarSign, Users, Zap } from "lucide-react"

export function MarketOpportunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const opportunities = [
    {
      icon: DollarSign,
      title: "$2.3 Trillion Market",
      description: "Global energy storage market projected by 2030",
      growth: "+24% CAGR",
    },
    {
      icon: Zap,
      title: "850 GWh Capacity",
      description: "Expected global battery storage capacity by 2030",
      growth: "+31% CAGR",
    },
    {
      icon: Users,
      title: "500M+ Users",
      description: "Smart energy management system users worldwide",
      growth: "+28% CAGR",
    },
    {
      icon: TrendingUp,
      title: "$180B AI Market",
      description: "AI in energy sector market size by 2030",
      growth: "+35% CAGR",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Market Opportunity
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            A <span className="text-primary">Booming Industry</span> Ready for Disruption
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The convergence of AI and renewable energy represents one of the fastest-growing markets globally, with
            unprecedented investment and adoption rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold mb-1">{item.title}</div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold">
                    <TrendingUp className="h-3 w-3" />
                    {item.growth}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Sources: Bloomberg NEF, IEA, McKinsey Energy Insights, Grand View Research
          </p>
        </motion.div>
      </div>
    </section>
  )
}
