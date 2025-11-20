"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="/abstract-glowing-neural-energy-wave-pattern-in-gre.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-effect">
              <span className="text-primary-foreground font-bold text-xl">AI</span>
            </div>
            <span className="text-xl font-bold text-foreground">AIWattStore</span>
          </div>

          {/* Slogan */}
          <p className="text-lg font-medium text-primary">{t.footer.tagline}</p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 AIWattStore.com – {t.footer.rights}</p>

          {/* Domain Sale Message */}
          <p className="text-xs text-muted-foreground">
            {t.footer.domain}{" "}
            <a
              href="https://sedo.com/search/?keyword=aiwattstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Sedo.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
