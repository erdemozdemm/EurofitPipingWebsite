"use client"

import { useLanguage } from "@/app/context/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source src="/videos/production-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
      <motion.div
        className="relative z-20 container px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block xl:inline">{t("heroTitle", "home")}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {t("heroSubtitle", "home")}
        </p>
        <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
            <Link href="/products">
              {t("exploreProducts", "common")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-300 hover:bg-white/10 hover:text-white w-full sm:w-auto"
          >
            <Link href="/about">{t("aboutUs", "common")}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
