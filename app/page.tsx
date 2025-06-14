"use client"

import HeroSection from "./components/home/hero-section"
import KeyFeaturesSection from "./components/home/key-features-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "./context/language-context"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <KeyFeaturesSection />
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">{t("exploreProducts", "common")}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our wide range of precision-engineered fittings designed for various industrial applications.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {/* Updated Link href to include the hash */}
            <Link href="/products#latest-products">
              {t("exploreProducts", "common")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </motion.div>
  )
}
