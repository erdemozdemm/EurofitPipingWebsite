"use client"

import { useState } from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import PageWrapper from "@/app/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { X, ZoomIn, Factory, Users, Cog } from "lucide-react"
import { motion } from "framer-motion"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "facility" | "production" | "team" | "products"
  titleKey: string
  descriptionKey?: string
}

const galleryImages: GalleryImage[] = [
  // ... [your same placeholder image array]
]

export default function GalleryPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { key: "all", labelKey: "galleryPage.categories.all", icon: null },
    { key: "facility", labelKey: "galleryPage.categories.facility", icon: <Factory className="h-4 w-4" /> },
    { key: "production", labelKey: "galleryPage.categories.production", icon: <Cog className="h-4 w-4" /> },
    { key: "team", labelKey: "galleryPage.categories.team", icon: <Users className="h-4 w-4" /> },
    { key: "products", labelKey: "galleryPage.categories.products", icon: <ZoomIn className="h-4 w-4" /> },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setIsModalOpen(false)
  }

  return (
    <PageWrapper>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("galleryPage.title")} subtitle={t("galleryPage.subtitle")} />

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.key
                    ? "bg-industrial-blue text-white"
                    : "border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                }`}
              >
                {category.icon}
                {t(category.labelKey)}
              </Button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="w-full"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => openModal(image)}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-dark-gray-text text-sm line-clamp-2">{t(image.titleKey)}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Modal for Image Preview */}
          {selectedImage && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-0">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold text-industrial-blue">
                      {t(selectedImage.titleKey)}
                    </DialogTitle>
                    <DialogClose asChild>
                      <Button variant="ghost" size="icon" onClick={closeModal}>
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
                <div className="relative">
                  <div className="relative aspect-video">
                    <Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain"
                      className="bg-gray-50"
                    />
                  </div>
                  {selectedImage.descriptionKey && (
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">{t(selectedImage.descriptionKey)}</p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}
