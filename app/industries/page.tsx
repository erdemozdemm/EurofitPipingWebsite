"use client"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const industriesData = [
  {
    key: "maritime",
    imageQuery: "shipyard with large vessel under construction",
  },
  {
    key: "hvac",
    imageQuery: "industrial HVAC units on a rooftop",
  },
  {
    key: "industrial",
    imageQuery: "interior of a modern manufacturing plant",
  },
  {
    key: "oilAndGas",
    imageQuery: "oil and gas refinery at dusk",
  },
  {
    key: "renewable",
    imageQuery: "field of solar panels with wind turbines in background",
  },
]

export default function IndustriesPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t("industriesPage.title")} subtitle={t("industriesPage.subtitle")} />

        <div className="space-y-16">
          {industriesData.map((industry, index) => (
            <Card
              key={industry.key}
              className="overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className={`relative h-64 md:h-full ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={`/placeholder.svg?width=600&height=400&query=${industry.imageQuery}`}
                    alt={t(`industriesPage.industries.${industry.key}.title`)}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue mb-4">
                    {t(`industriesPage.industries.${industry.key}.title`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(`industriesPage.industries.${industry.key}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
