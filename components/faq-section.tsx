"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does AI improve energy storage efficiency?",
    answer:
      "Our AI algorithms analyze usage patterns, weather data, and grid conditions in real-time to optimize charging and discharging cycles. This predictive approach can improve efficiency by up to 30% compared to traditional systems.",
  },
  {
    question: "What is the typical ROI for AIWattStore solutions?",
    answer:
      "Most clients see a return on investment within 3-5 years through reduced energy costs, peak shaving benefits, and grid services revenue. The exact ROI depends on your energy usage patterns and local electricity rates.",
  },
  {
    question: "Can your systems integrate with existing infrastructure?",
    answer:
      "Yes! Our solutions are designed to integrate seamlessly with existing solar panels, grid connections, and building management systems. We provide full installation support and compatibility assessments.",
  },
  {
    question: "What kind of maintenance do the systems require?",
    answer:
      "Our AI-powered systems include predictive maintenance capabilities that alert you before issues occur. Typical maintenance is minimal - usually just quarterly inspections and software updates that happen automatically.",
  },
  {
    question: "How secure is the AI software and data?",
    answer:
      "Security is our top priority. All data is encrypted end-to-end, and our systems comply with international cybersecurity standards including ISO 27001. We perform regular security audits and penetration testing.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we partner with leading financial institutions to offer flexible financing options including leasing, power purchase agreements (PPAs), and energy-as-a-service models to minimize upfront costs.",
  },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-xl overflow-hidden bg-background hover:border-primary/50 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4 text-base md:text-lg">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to know about our AI-powered energy solutions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
