"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/app/context/language-context"
import { Linkedin, Instagram, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const navItems = [
    { href: "/", labelKey: "home" },
    { href: "/about", labelKey: "about" },
    { href: "/products", labelKey: "products" },
    { href: "/contact", labelKey: "contact" },
  ]

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-2xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/eurofit-logo.png" alt="Eurofit Logo" width={150} height={50} className="object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm">{t("heroSubtitle", "home")}</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              {t("quickLinks", "footer")}
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-accent">
                    {t(item.labelKey as any, "nav")}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-accent">
                  {t("sustainability", "nav")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              {t("contactInfo", "footer")}
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{t("location", "contact")}</span>
              </li>
              <li>
                <a href="tel:+90232XXXXXXX" className="text-muted-foreground hover:text-accent">
                  +90 232 XXX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:info@eurofitpiping.com" className="text-muted-foreground hover:text-accent">
                  info@eurofitpiping.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              {t("ourLocation", "footer")}
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48224.7070280804!2d29.17008481881167!3d40.92087972969079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4f0f2d8f9e7%3A0xc95c92973249ca73!2sKartal%2F%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1700000000000" // Kartal, Istanbul
                width="100%"
                height="180" // Adjusted height for footer
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eurofit Location in Kartal, İstanbul"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("copyright", "footer")}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">Developed by Novaprotech.</p>
        </div>
      </div>
    </footer>
  )
}
