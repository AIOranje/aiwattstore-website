"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Tag, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function DomainSalePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("domainPopupSeen")
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("domainPopupSeen", "true")
  }

  const handleBuyNow = () => {
    window.open("https://sedo.com/search/?keyword=aiwattstore.com", "_blank")
    handleClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="relative bg-background border-2 border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                    <div className="relative bg-primary/10 p-4 rounded-full">
                      <Tag className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-balance">{t.popup.badge}</h3>

                {/* Domain name */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-center font-mono text-lg sm:text-xl font-semibold text-primary">{t.popup.title}</p>
                  <p className="text-center text-sm text-muted-foreground mt-1">{t.popup.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-center text-muted-foreground mb-6 text-sm sm:text-base text-balance">
                  {t.popup.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>{t.popup.feature1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>{t.popup.feature2}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>{t.popup.feature3}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{t.popup.price}</p>
                  <p className="text-sm text-muted-foreground">{t.popup.priceDesc}</p>
                </div>

                {/* Sedo trust message */}
                <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>{t.popup.trust}</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleBuyNow}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                  >
                    {t.popup.cta}
                  </Button>
                  <Button onClick={handleClose} variant="outline" className="flex-1 py-6 bg-transparent">
                    {t.popup.later}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
