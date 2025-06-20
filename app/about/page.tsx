"use client"

import type React from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import GallerySection from "@/app/components/gallery-section"
import PageWrapper from "@/app/components/page-wrapper"
import Image from "next/image"
import { CheckCircle, TrendingUp, Target } from "lucide-react"
import { motion } from "framer-motion"

interface TimelineItemProps {
  year: string
  titleKey: string
  descriptionKey: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, titleKey, descriptionKey }) => {
  const { t } = useTranslation()
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-px before:bg-medium-gray sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-industrial-blue after:border-4 after:box-content after:border-light-gray after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-industrial-blue bg-industrial-blue/10 rounded-full">
          {year}
        </time>
        <div className="text-xl font-bold text-dark-gray-text">{t(titleKey)}</div>
      </div>
      <div className="text-gray-600 sm:pl-[7.5rem]">{t(descriptionKey)}</div>
    </div>
  )
}

export default function AboutPage() {
  const { t } = useTranslation()

  const timelineEvents = [
    { year: "2017", titleKey: "aboutPage.timeline.founded", descriptionKey: "aboutPage.timeline.foundedDesc" },
    { year: "2019", titleKey: "aboutPage.timeline.coldPress", descriptionKey: "aboutPage.timeline.coldPressDesc" },
    { year: "2022", titleKey: "aboutPage.timeline.expansion", descriptionKey: "aboutPage.timeline.expansionDesc" },
  ]

  const facilityImages = [
    {
      id: "about-facility-1",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Eurofit Piping facility exterior",
      titleKey: "aboutPage.gallery.facility1",
    },
    {
      id: "about-facility-2",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Production floor",
      titleKey: "aboutPage.gallery.facility2",
    },
    {
      id: "about-team-1",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Our team",
      titleKey: "aboutPage.gallery.team1",
    },
    {
      id: "about-team-2",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Engineering team",
      titleKey: "aboutPage.gallery.team2",
    },
  ]

  return (
    <PageWrapper>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("aboutPage.title")} />
<section className="relative mb-16 md:mb-24 h-[500px] sm:h-[600px] lg:h-[700px]">
  {/* Background Image */}
  <Image
    src="/images/about-timeline-bg.jpg" // Make sure this is your landscape image path
    alt="Timeline background"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 z-0 object-cover"
    priority
  />
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>

  {/* Timeline Content */}
  <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
    <div className="max-w-3xl mx-auto w-full">
      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <TimelineItem
            year={event.year}
            titleKey={event.titleKey}
            descriptionKey={event.descriptionKey}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


          {/* What We Do Section */}
          <motion.section
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue mb-4">
                  {t("aboutPage.whatWeDoTitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">{t("aboutPage.whatWeDoContent")}</p>
                <ul className="mt-6 space-y-3">
                  {["Aluminum Fittings", "Stainless Steel Fittings", "CuNiFe Fittings", "Custom Parts Manufacturing"].map((item, idx) => (
                    <motion.li
                      key={item}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[1, 2].map((img, i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg?width=400&height=300"
                    alt={`Production Line ${i + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover w-full h-64"
                  />
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Mission & Vision Section */}
          <motion.section
            className="bg-gradient-to-br from-light-gray to-white p-8 md:p-12 rounded-lg mb-16 md:mb-24 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {[{
                icon: <Target className="h-8 w-8 text-industrial-blue mr-3" />, title: t("aboutPage.missionTitle"), content: t("aboutPage.missionContent")
              }, {
                icon: <TrendingUp className="h-8 w-8 text-industrial-blue mr-3" />, title: t("aboutPage.visionTitle"), content: t("aboutPage.visionContent")
              }].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="text-2xl font-semibold text-industrial-blue">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GallerySection
              title={t("aboutPage.galleryTitle")}
              subtitle={t("aboutPage.gallerySubtitle")}
              images={facilityImages}
            />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
