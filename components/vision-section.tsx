"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/green-futuristic-landscape-with-solar-fields--ai-c.jpg"
          alt="Vision background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-4">
            AI + Energy = A Cleaner Tomorrow
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            AIWattStore stands for autonomy, sustainability and intelligence — empowering a cleaner planet through
            data-driven energy solutions that make a real difference.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
