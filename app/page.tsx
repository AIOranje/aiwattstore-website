import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { PartnersSection } from "@/components/partners-section"
import { ProductsSection } from "@/components/products-section"
import { MarketOpportunitySection } from "@/components/market-opportunity-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CalculatorSection } from "@/components/calculator-section"
import { CertificationsSection } from "@/components/certifications-section"
import { VisionSection } from "@/components/vision-section"
import { PressSection } from "@/components/press-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { DomainSalePopup } from "@/components/domain-sale-popup"
import { ContactWidget } from "@/components/contact-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <MarketOpportunitySection />
      <AboutSection />
      <PartnersSection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CalculatorSection />
      <CertificationsSection />
      <PressSection />
      <VisionSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <DomainSalePopup />
      <ContactWidget />
    </main>
  )
}
