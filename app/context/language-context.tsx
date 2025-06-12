"use client"

import { createContext, useState, useContext, type ReactNode } from "react"
import { translations, type TranslationKeys, type PageKeys, type ComponentKeys } from "../lib/translations"

export type Language = "en" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKeys, section?: PageKeys | ComponentKeys, subKey?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: TranslationKeys, section?: PageKeys | ComponentKeys, subKey?: string): string => {
    try {
      if (section && subKey) {
        return translations[language][section][key as any][subKey] || `${section}.${key}.${subKey}`
      }
      if (section) {
        return translations[language][section][key as any] || `${section}.${key}`
      }
      return translations[language]["common"][key as any] || `common.${key}`
    } catch (error) {
      console.warn(
        `Translation key not found: ${section ? section + "." : "common."}${key}${subKey ? "." + subKey : ""}`,
      )
      return `${section ? section + "." : "common."}${key}${subKey ? "." + subKey : ""}`
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
