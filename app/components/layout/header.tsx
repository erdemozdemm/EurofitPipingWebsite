"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/app/context/language-context"
import LanguageSwitcher from "./language-switcher"
import NavLinks from "./nav-links"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 max-w-screen-2xl">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/eurofit-logo.png" alt="Eurofit Logo" width={120} height={40} className="object-contain" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <LanguageSwitcher />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 border-b border-border/40 shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-4 p-6">
              <NavLinks onLinkClick={() => setMobileMenuOpen(false)} />
              <LanguageSwitcher />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
