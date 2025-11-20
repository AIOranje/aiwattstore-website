"use client"

import { useState } from "react"
import { MessageCircle, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 group"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          )}
        </Button>
      </motion.div>

      {/* Contact Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-card border border-border rounded-2xl shadow-2xl p-6"
          >
            <h3 className="text-lg font-bold mb-2">{t.widget.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.widget.subtitle}</p>

            <a
              href="https://sedo.com/search/?keyword=aiwattstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 group">
                <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {t.widget.cta}
              </Button>
            </a>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                {t.contact.feature1} • {t.contact.feature2} • {t.contact.feature3desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
