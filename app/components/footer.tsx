"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/app/hooks/use-translation"
import LanguageSwitcher from "./language-switcher"
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { href: "/", labelKey: "navigation.home" },
    { href: "/about", labelKey: "navigation.about" },
    { href: "/products", labelKey: "navigation.products" },
    { href: "/cold-forming", labelKey: "navigation.coldForming" },
    { href: "/industries", labelKey: "navigation.industries" },
    { href: "/certificates", labelKey: "navigation.certificates" },
    { href: "/contact", labelKey: "navigation.contact" },
    { href: "/blog", labelKey: "navigation.blog" },
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-[#eaf3f9] pt-16 pb-10 text-dark-gray-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Eurofit Logo" width={50} height={50} />
              <span className="text-2xl font-bold text-industrial-blue">Eurofit Piping</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{t("homepage.heroSubtitle")}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Dil:</span>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-industrial-blue mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-industrial-blue transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-industrial-blue mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-industrial-blue mr-3 mt-0.5" />
                <span className="text-gray-600">{t("footer.address")}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-industrial-blue mr-3" />
                <a href={`tel:${t("footer.phone")}`} className="text-gray-600 hover:text-industrial-blue">
                  {t("footer.phone")}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-industrial-blue mr-3" />
                <a href={`mailto:${t("footer.email")}`} className="text-gray-600 hover:text-industrial-blue">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-industrial-blue mb-2">{t("footer.socialMedia")}</h4>
              <div className="flex gap-3">
                <a href="#" className="text-gray-500 hover:text-industrial-blue transition">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="text-gray-500 hover:text-industrial-blue transition">
                  <Youtube size={22} />
                </a>
                <a href="#" className="text-gray-500 hover:text-industrial-blue transition">
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-lg font-semibold text-industrial-blue mb-4">{t("footer.location")}</h3>
            <div className="rounded-md overflow-hidden shadow-sm bg-gray-200 aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5234567890123!2d29.1833333!3d40.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzAwLjAiTiAyOcKwMTEnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eurofit Piping Konum"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} Eurofit Piping. Tüm hakları saklıdır.</p>
          <p>
            POWERED BY{" "}
            <a
              href="https://novaprotech.com/"
              className="text-industrial-blue font-medium hover:text-opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOVA
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
