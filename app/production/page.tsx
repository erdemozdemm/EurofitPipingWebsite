"use client"
import { useLanguage } from "@/app/context/language-context"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ProductionPage() {
  const { t } = useLanguage()
  const productionSteps = ["step1", "step2", "step3", "step4", "step5"]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-accent">{t("title", "production")}</h1>

      <section className="mb-16 p-8 bg-card rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-accent">{t("coldPressTitle", "production")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("coldPressDesc", "production")}</p>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt={t("coldPressTitle", "production")}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">{t("stepsTitle", "production")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productionSteps.map((stepKey, index) => (
            <motion.div
              key={stepKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg shadow-md flex items-start space-x-4"
            >
              <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-1">
                  {index + 1}. {t(stepKey as any, "production")}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center p-8 bg-card rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-accent">{t("capacityTitle", "production")}</h2>
        <p className="text-xl text-muted-foreground">{t("capacityDesc", "production")}</p>
      </section>
    </motion.div>
  )
}
