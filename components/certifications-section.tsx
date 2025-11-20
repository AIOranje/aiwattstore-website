"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Shield, Leaf, Zap } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "ISO 27001",
    description: "Information Security",
    color: "text-purple-500",
  },
  {
    icon: Leaf,
    title: "ISO 14001",
    description: "Environmental Management",
    color: "text-green-500",
  },
  {
    icon: Zap,
    title: "IEC 62619",
    description: "Battery Safety Standards",
    color: "text-orange-500",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Certified <span className="text-primary">Excellence</span>
          </h3>
          <p className="text-muted-foreground">Meeting the highest international standards</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/30 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background mb-3 ${cert.color}`}
              >
                <cert.icon className="w-6 h-6" />
              </div>
              <div className="font-bold text-foreground mb-1 text-sm md:text-base">{cert.title}</div>
              <div className="text-xs text-muted-foreground">{cert.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
