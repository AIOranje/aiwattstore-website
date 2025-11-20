"use client"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: "en" as Language, label: "English", short: "EN" },
    { code: "nl" as Language, label: "Nederlands", short: "NL" },
    { code: "de" as Language, label: "Deutsch", short: "DE" },
    { code: "fr" as Language, label: "Français", short: "FR" },
  ]

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
