"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/app/context/language-context"
import { cn } from "@/lib/utils"

interface NavLinksProps {
  onLinkClick?: () => void
}

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  const { t, language } = useLanguage()
  const pathname = usePathname()

  const navItems = [
    { href: "/", labelKey: "home" },
    { href: "/about", labelKey: "about" },
    { href: "/products", labelKey: "products" },
    { href: "/production", labelKey: "production" },
    { href: "/certificates", labelKey: "certificates" },
    { href: "/projects", labelKey: "projects" },
    { href: "/sustainability", labelKey: "sustainability" },
    { href: "/blog", labelKey: "blog" },
    { href: "/contact", labelKey: "contact" },
  ]

  // Adjust href for language if using path-based i18n in future
  // const currentPathBase = `/${language}`;
  // const isActive = (href: string) => pathname === (href === '/' ? currentPathBase : `${currentPathBase}${href}`);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === `/${language}`
    return pathname.startsWith(href) || pathname.startsWith(`/${language}${href}`)
  }

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href} // For client-side routing, language prefixing might be needed for full i18n routing
          className={cn(
            "text-sm font-medium transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none",
            isActive(item.href) ? "text-accent" : "text-muted-foreground",
            "py-2 md:py-0",
          )}
          onClick={onLinkClick}
        >
          {t(item.labelKey as any, "nav")}
        </Link>
      ))}
    </>
  )
}
