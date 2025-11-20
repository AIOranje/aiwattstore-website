"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/futuristic-city-powered-by-renewable-energy--glowi.jpg"
          alt="Futuristic smart energy city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Animated energy lines */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl energy-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl energy-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">{t.hero.tagline}</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight drop-shadow-lg">
            {t.hero.title}{" "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(0,200,83,0.5)]">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto text-balance leading-relaxed px-4 drop-shadow-md font-medium">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full sm:w-auto"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
