"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Newspaper, Quote } from "lucide-react"

export function PressSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pressItems = [
    {
      outlet: "TechCrunch",
      date: "March 2025",
      headline: "AI-Powered Energy Storage: The Next Frontier in Clean Tech",
      quote:
        "Companies combining artificial intelligence with energy storage are positioned to revolutionize how we manage power consumption.",
    },
    {
      outlet: "Bloomberg Energy",
      date: "February 2025",
      headline: "Smart Grids Get Smarter with AI Integration",
      quote:
        "The integration of AI into energy management systems is creating unprecedented efficiency gains and cost savings.",
    },
    {
      outlet: "Forbes",
      date: "January 2025",
      headline: "Why Investors Are Betting Big on AI Energy Startups",
      quote:
        "The AI-energy sector is attracting record venture capital as the technology proves its value in real-world applications.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Newspaper className="h-4 w-4" />
            Industry Recognition
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Featured in <span className="text-primary">Leading Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The AI-energy revolution is making headlines worldwide as the industry transforms how we power our future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-lg mb-1">{item.outlet}</div>
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                </div>
              </div>
              <h3 className="font-semibold text-base mb-3 text-balance">{item.headline}</h3>
              <p className="text-sm text-muted-foreground italic text-pretty">"{item.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
