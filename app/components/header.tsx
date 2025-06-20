"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/app/hooks/use-translation"
import LanguageSwitcher from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mainNavItems = [
    { href: "/", labelKey: "navigation.home" },
    { href: "/about", labelKey: "navigation.about" },
    { href: "/products", labelKey: "navigation.products" },
    { href: "/cold-forming", labelKey: "navigation.coldForming" },
    { href: "/industries", labelKey: "navigation.industries" },
    { href: "/certificates", labelKey: "navigation.certificates" },
  ]

  const moreDropdownItems = [
    { href: "/gallery", labelKey: "navigation.gallery" },
    { href: "/blog", labelKey: "navigation.blog" },
  ]

  const allNavItems = [...mainNavItems, ...moreDropdownItems]

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image src="/images/logo.png" alt="Eurofit Piping Logo" width={45} height={45} className="rounded-full" />
          <span className="text-xl xl:text-2xl font-bold text-industrial-blue tracking-tight">Eurofit Piping</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-medium">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md transition-all duration-200 ${
                pathname === item.href
                  ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                  : "text-gray-600 hover:text-industrial-blue hover:bg-gray-50"
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`px-3 py-2 transition-all duration-200 flex items-center gap-1 ${
                  moreDropdownItems.some((item) => pathname === item.href)
                    ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                    : "text-gray-600 hover:text-industrial-blue hover:bg-gray-50"
                }`}
              >
                {t("navigation.more")} <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 rounded-md shadow-md">
              {moreDropdownItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className={`w-full py-2 px-3 rounded-md transition ${
                      pathname === item.href ? "bg-industrial-blue/10 text-industrial-blue font-medium" : "hover:bg-gray-100"
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white rounded-md px-4"
          >
            <Link href="/contact">{t("homepage.contactUs")}</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200 py-4 px-4 space-y-2 z-40">
          {[...mainNavItems, ...moreDropdownItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block w-full py-3 px-4 rounded-md text-sm ${
                pathname === item.href
                  ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                  : "text-gray-700 hover:text-industrial-blue hover:bg-gray-100"
              }`}
              onClick={handleMobileMenuClick}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          <Button
            asChild
            variant="outline"
            className="w-full mt-4 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
            onClick={handleMobileMenuClick}
          >
            <Link href="/contact">{t("homepage.contactUs")}</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
