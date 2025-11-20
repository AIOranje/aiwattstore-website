"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calculator, TrendingDown, Zap, Euro } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function CalculatorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [monthlyUsage, setMonthlyUsage] = useState(5000)
  const [energyRate, setEnergyRate] = useState(0.25)

  const currentCost = monthlyUsage * energyRate
  const savings = currentCost * 0.3
  const newCost = currentCost - savings
  const annualSavings = savings * 12

  return (
    <section className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Calculate Your <span className="text-primary">Energy Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See how much you could save with AI-powered energy optimization
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Input Section */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">Monthly Energy Usage (kWh)</label>
                  <div className="flex items-center gap-4 mb-3">
                    <Slider
                      value={[monthlyUsage]}
                      onValueChange={(value) => setMonthlyUsage(value[0])}
                      min={1000}
                      max={50000}
                      step={500}
                      className="flex-grow"
                    />
                    <span className="text-2xl font-bold text-primary min-w-[100px] text-right">
                      {monthlyUsage.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Average household: 3,000 kWh | Small business: 10,000 kWh
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">Energy Rate (€/kWh)</label>
                  <div className="flex items-center gap-4 mb-3">
                    <Slider
                      value={[energyRate * 100]}
                      onValueChange={(value) => setEnergyRate(value[0] / 100)}
                      min={10}
                      max={50}
                      step={1}
                      className="flex-grow"
                    />
                    <span className="text-2xl font-bold text-primary min-w-[100px] text-right">
                      €{energyRate.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">EU average: €0.25/kWh</p>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-4">
                <div className="bg-background border border-border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Euro className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Current Monthly Cost</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">€{currentCost.toFixed(2)}</div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingDown className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-medium">Monthly Savings (30%)</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">€{savings.toFixed(2)}</div>
                </div>

                <div className="bg-background border border-border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">New Monthly Cost</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">€{newCost.toFixed(2)}</div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Annual Savings</div>
                    <div className="text-4xl font-bold text-primary mb-4">€{annualSavings.toFixed(0)}</div>
                    <Button size="lg" className="w-full">
                      Get Started Today
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-center text-muted-foreground">
                * Savings estimates based on average AI optimization performance. Actual results may vary based on usage
                patterns and local conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
