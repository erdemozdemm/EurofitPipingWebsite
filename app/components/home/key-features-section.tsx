"use client"

import { useLanguage } from "@/app/context/language-context"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Zap, Award, Factory } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Factory className="h-10 w-10 text-accent" />,
    titleKey: "feature1Title",
    descriptionKey: "feature1Desc",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    titleKey: "feature2Title",
    descriptionKey: "feature2Desc",
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    titleKey: "feature3Title",
    descriptionKey: "feature3Desc",
  },
]

export default function KeyFeaturesSection() {
  const { t } = useLanguage()

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-3 rounded-full bg-accent/10 mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t(feature.titleKey as any, "home")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <CardDescription className="text-foreground/90">
                    {t(feature.descriptionKey as any, "home")}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
