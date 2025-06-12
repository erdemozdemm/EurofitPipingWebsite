"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/app/context/language-context"
import { Linkedin, Instagram } from "lucide-react" // Assuming YouTube might be added

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-2xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/eurofit-logo.png" alt="Eurofit Logo" width={150} height={50} className="object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm">{t("heroSubtitle", "home")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              {t("contactInfo", "footer")}
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-sm">
              <li>
                <p className="text-muted-foreground">{t("location", "contact")}</p>
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
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              {t("nav", "nav", "sustainability")}
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/sustainability#energy" className="text-muted-foreground hover:text-accent">
                  {t("energyEfficiencyTitle", "sustainability")}
                </Link>
              </li>
              <li>
                <Link href="/sustainability#recycling" className="text-muted-foreground hover:text-accent">
                  {t("wasteRecyclingTitle", "sustainability")}
                </Link>
              </li>
              <li>
                <Link href="/sustainability#community" className="text-muted-foreground hover:text-accent">
                  {t("communityTitle", "sustainability")}
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              {/* Add other social links if needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("copyright", "footer")}</p>
        </div>
      </div>
    </footer>
  )
}
