"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "Tesla Energy", logo: "/tesla-energy-logo.jpg" },
  { name: "Siemens", logo: "/siemens-logo.png" },
  { name: "Schneider Electric", logo: "/schneider-electric-logo.png" },
  { name: "ABB", logo: "/abb-logo.jpg" },
  { name: "Enphase", logo: "/enphase-energy-logo.jpg" },
  { name: "SolarEdge", logo: "/solaredge-logo.png" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-20 border-y border-border bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Trusted Partners</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Working with <span className="text-primary">Industry Giants</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
