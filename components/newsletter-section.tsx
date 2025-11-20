"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Stay Updated on <span className="text-primary">AI Energy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Get the latest insights on AI-powered energy solutions, industry trends, and exclusive offers delivered to
              your inbox.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow h-12 text-base"
                />
                <Button type="submit" size="lg" className="group whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 text-primary font-semibold"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>Thanks for subscribing!</span>
              </motion.div>
            )}

            <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
