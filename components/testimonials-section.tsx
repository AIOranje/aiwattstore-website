"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, GreenTech Industries",
    company: "GreenTech Industries",
    content:
      "AIWattStore transformed our energy infrastructure. The AI-powered optimization reduced our costs by 35% in the first year alone.",
    rating: 5,
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    role: "Facilities Manager, TechCorp",
    company: "TechCorp",
    content:
      "The smart charging stations are incredible. Our EV fleet is always ready, and the AI scheduling ensures we use the cheapest energy rates.",
    rating: 5,
    image: "/professional-asian-man-manager.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Sustainability Director, EcoBuildings",
    company: "EcoBuildings",
    content:
      "Finally, a solution that combines cutting-edge AI with real environmental impact. Our carbon footprint dropped by 40% within months.",
    rating: 5,
    image: "/professional-woman-director.png",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See what our clients say about transforming their energy infrastructure with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
