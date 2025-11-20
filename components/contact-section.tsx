"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Linkedin, Instagram, Youtube, ShieldCheck, ExternalLink } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-4">
            Let's Power the Future Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Interested in partnerships, energy systems or custom solutions? Let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Domain For Sale</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      AIWattStore.com is available for purchase. All inquiries and transactions are handled securely
                      through Sedo.com.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-foreground">Why buy through Sedo?</p>
                    <ul className="text-sm text-muted-foreground space-y-1 text-left">
                      <li>✓ Secure escrow service</li>
                      <li>✓ Buyer protection guarantee</li>
                      <li>✓ Professional transfer support</li>
                      <li>✓ Trusted by millions worldwide</li>
                    </ul>
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-12 group" asChild>
                    <a
                      href="https://sedo.com/search/?keyword=aiwattstore.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact via Sedo.com
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    Secure transaction • Professional service • Worldwide trusted
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Premium Domain</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Acquire this premium domain and position yourself at the forefront of the AI-powered energy revolution.
              </p>

              <div className="flex items-start gap-3 mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Netherlands, Europe</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent h-12 w-12"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent h-12 w-12"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent h-12 w-12"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
