"use client"

import Link from "next/link"
import { useTranslation } from "@/app/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ShoppingCart, Settings, MessageSquare, Download } from "lucide-react"
import Image from "next/image"
import SectionTitle from "./components/section-title"
import PageWrapper from "./components/page-wrapper"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function HomePage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const ctaCards = [
    {
      titleKey: "homepage.ourProducts",
      href: "/products",
      icon: <ShoppingCart className="h-8 w-8 text-industrial-blue mb-4" />,
    },
    {
      titleKey: "homepage.whyColdPress",
      href: "/cold-forming",
      icon: <Settings className="h-8 w-8 text-industrial-blue mb-4" />,
    },
    {
      titleKey: "homepage.contactUs",
      href: "/contact",
      icon: <MessageSquare className="h-8 w-8 text-industrial-blue mb-4" />,
    },
  ]

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-50 to-white py-28 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="/images/eurofit-team-photo.jpg"
            alt="Eurofit Piping team members"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-10 text-center relative z-10">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-4 mb-20 max-w-3xl mx-auto"
          >
            <input
              type="text"
              placeholder={t("homepage.searchPlaceholder") || "Search by material, size or name"}
              className="w-full px-5 py-4 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-industrial-blue text-lg bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              onClick={handleSearch}
              className="bg-industrial-blue text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-opacity-90"
            >
              {t("homepage.searchButton") || "Search"}
            </Button>
          </motion.div>

          {/* Hero Text */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-industrial-blue mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("homepage.onlyColdFormerInTurkey")}
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("homepage.heroTitle")}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("homepage.sinceTitle")}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t("homepage.heroSubtitle")}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full bg-industrial-blue text-white hover:bg-opacity-90 text-lg px-8 py-4 h-auto">
              <Link href="/about">
                {t("homepage.learnMore")} <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white text-lg px-8 py-4 h-auto">
              <Link href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
                {t("homepage.downloadCatalog")} <Download className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ctaCards.map((card, index) => (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="text-center p-6 border border-industrial-blue rounded-xl bg-white shadow hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    {card.icon}
                    <CardTitle className="text-2xl font-semibold text-industrial-blue mt-2">{t(card.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                    >
                      <Link href={card.href}>
                        {t("homepage.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
