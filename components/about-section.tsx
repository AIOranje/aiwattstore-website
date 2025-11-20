"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Image */}
          <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/20">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,83,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,83,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Floating orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent/40 blur-3xl"
            />

            {/* Center icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-8">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                <div className="relative bg-background/80 backdrop-blur-sm p-4 sm:p-6 rounded-full border-2 border-primary/50">
                  <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-2xl sm:text-4xl font-bold text-primary"
              >
                +
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
                <div className="relative bg-background/80 backdrop-blur-sm p-4 sm:p-6 rounded-full border-2 border-accent/50">
                  <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
                </div>
              </motion.div>
            </div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <motion.line
                x1="35%"
                y1="50%"
                x2="65%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance"
            >
              Who We Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6"
            >
              At AIWattStore, we believe energy should be intelligent. Our AI systems analyze, store, and optimize
              electricity flows for homes, businesses and communities.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              We stand at the intersection of artificial intelligence and sustainable energy, pioneering solutions that
              empower a cleaner, smarter future for everyone.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
