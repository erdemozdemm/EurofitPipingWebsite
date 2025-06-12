"use client"
import { useLanguage } from "@/app/context/language-context"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-accent">{t("title", "about")}</h1>
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-accent">{t("ourStoryTitle", "about")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t("ourStoryText", "about")}
          </p>
        </section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt={t("ourStoryTitle", "about")}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent">{t("missionTitle", "about")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("missionText", "about")}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent">{t("visionTitle", "about")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("visionText", "about")}</p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
