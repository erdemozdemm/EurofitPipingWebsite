"use client"
import { useLanguage } from "@/app/context/language-context"
import { motion } from "framer-motion"
import { Zap, Recycle, Users } from "lucide-react"
import Image from "next/image"

export default function SustainabilityPage() {
  const { t } = useLanguage()
  const sections = [
    {
      id: "energy",
      icon: <Zap className="h-12 w-12 text-accent" />,
      titleKey: "energyEfficiencyTitle",
      descKey: "energyEfficiencyDesc",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "recycling",
      icon: <Recycle className="h-12 w-12 text-accent" />,
      titleKey: "wasteRecyclingTitle",
      descKey: "wasteRecyclingDesc",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "community",
      icon: <Users className="h-12 w-12 text-accent" />,
      titleKey: "communityTitle",
      descKey: "communityDesc",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-accent">{t("title", "sustainability")}</h1>
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`md:order-${index % 2 === 0 ? 1 : 2}`}>
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-3xl font-semibold ml-4 text-foreground">
                  {t(section.titleKey as any, "sustainability")}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(section.descKey as any, "sustainability")}
              </p>
            </div>
            <div className={`md:order-${index % 2 === 0 ? 2 : 1}`}>
              <Image
                src={section.image || "/placeholder.svg"}
                alt={t(section.titleKey as any, "sustainability")}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  )
}
