"use client"

import { useLanguage, type Language } from "@/app/context/language-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const switchLang = (lang: Language) => {
    setLanguage(lang)
    // Potentially update URL or cookie here for persistence if needed
  }

  return (
    <div className="flex space-x-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLang("en")}
        className={cn("text-xs", language === "en" ? "text-accent font-semibold" : "text-muted-foreground")}
      >
        EN
      </Button>
      <span className="text-muted-foreground text-xs self-center">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLang("tr")}
        className={cn("text-xs", language === "tr" ? "text-accent font-semibold" : "text-muted-foreground")}
      >
        TR
      </Button>
    </div>
  )
}
