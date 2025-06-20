"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import { useLanguage } from "@/app/context/language-context"
import SectionTitle from "@/app/components/section-title"
import PageWrapper from "@/app/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import Image from "next/image"
import { ArrowRight, Settings, Layers, CheckSquare, Info, Download } from "lucide-react"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"


type Translation = {
  en: string
  tr: string
  nl: string
}

interface Product {
  id: string
  categoryKey: string
  imageQuery: string
  materials: Translation[]
  sizes: string[]
  standards: string[]
  useCases: Translation[]
  materialCategory: string[]
}


const productsData: Product[] = [
  {
    id: "stainless-elbows",
    categoryKey: "productsPage.categories.elbows",
    imageQuery: "technical drawing of stainless steel pipe elbow",
    materials: [
  {
    en: "Stainless Steel 316L",
    tr: "Paslanmaz Çelik 316L",
    nl: "Roestvrij staal 316L"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  }
],
    sizes: ["DN15 - DN200", '1/2" - 8"'],
    standards: ["DIN 2605", "ASME B16.9"],
    useCases: [
  {
    en: "Changing pipe direction",
    tr: "Boru yönünü değiştirme",
    nl: "Verander de pijprichting"
  },
  {
    en: "Fluid transport systems",
    tr: "Sıvı taşıma sistemleri",
    nl: "Vloeistoftransportsystemen"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-elbows",
    categoryKey: "productsPage.categories.elbows",
    imageQuery: "technical drawing of aluminum pipe elbow",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083"
  },
  {
    en: "Aluminum 6082",
    tr: "Alüminyum 6082",
    nl: "Aluminium 6082"
  }],
    sizes: ["DN15 - DN200", '1/2" - 8"'],
    standards: ["DIN 2605", "ASME B16.9"],
    useCases: [
  {
    en: "Changing pipe direction",
    tr: "Boru yönünü değiştirme",
    nl: "Verander de pijprichting"
  },
  {
    en: "Fluid transport systems",
    tr: "Sıvı taşıma sistemleri",
    nl: "Vloeistoftransportsystemen"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-elbows",
    categoryKey: "productsPage.categories.elbows",
    imageQuery: "technical drawing of CuNiFe pipe elbow",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: ["DN15 - DN200", '1/2" - 8"'],
    standards: ["DIN 2605", "ASME B16.9"],
    useCases: [
  {
    en: "Marine applications",
    tr: "Denizcilik uygulamaları",
    nl: "Toepassingen in de scheepvaart"
  },
  {
    en: "Corrosion resistant systems",
    tr: "Korozyona dayanıklı sistemler",
    nl: "Corrosiebestendige systemen"
  }
],
    materialCategory: ["cunife"],
  },
  {
    id: "stainless-tees",
    categoryKey: "productsPage.categories.tees",
    imageQuery: "technical drawing of stainless steel pipe tee",
    materials: [
  {
    en: "Stainless Steel 316L",
    tr: "Paslanmaz Çelik 316L",
    nl: "Roestvrij staal 316L"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  }
],
    sizes: ["DN15 - DN150", '1/2" - 6"'],
    standards: ["DIN 2615", "ASME B16.9"],
    useCases: [
  {
    en: "Branching pipe lines",
    tr: "Boru hatlarını dallandırma",
    nl: "Aftakken van leidingen"
  },
  {
    en: "Distribution manifolds",
    tr: "Dağıtım kollektörleri",
    nl: "Distributiespruitstukken"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-tees",
    categoryKey: "productsPage.categories.tees",
    imageQuery: "technical drawing of aluminum pipe tee",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083"
  }],
    sizes: ["DN15 - DN150", '1/2" - 6"'],
    standards: ["DIN 2615", "ASME B16.9"],
    useCases: [
  {
    en: "Branching pipe lines",
    tr: "Boru hatlarını dallandırma",
    nl: "Aftakken van leidingen"
  },
  {
    en: "Distribution manifolds",
    tr: "Dağıtım kollektörleri",
    nl: "Distributiespruitstukken"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-tees",
    categoryKey: "productsPage.categories.tees",
    imageQuery: "technical drawing of CuNiFe pipe tee",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: ["DN15 - DN150", '1/2" - 6"'],
    standards: ["DIN 2615", "ASME B16.9"],
    useCases: [
  {
    en: "Marine branching systems",
    tr: "Denizcilik boru dallandırma sistemleri",
    nl: "Aftaksystemen voor maritieme toepassingen"
  },
  {
    en: "Seawater applications",
    tr: "Deniz suyu uygulamaları",
    nl: "Toepassingen met zeewater"
  }
],
    materialCategory: ["cunife"],
  },
  {
    id: "stainless-reducers",
    categoryKey: "productsPage.categories.reducers",
    imageQuery: "technical drawing of stainless steel pipe reducer",
    materials: [
  {
    en: "Stainless Steel 316Ti",
    tr: "Paslanmaz Çelik 316Ti",
    nl: "Roestvrij staal 316Ti"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  }
],

    sizes: ["DN20/15 - DN200/150"],
    standards: ["DIN 2616", "ASME B16.9"],
    useCases: [
  {
    en: "Connecting pipes of different diameters",
    tr: "Farklı çaplarda boruları birleştirme",
    nl: "Pijpen met verschillende diameters verbinden"
  },
  {
    en: "Flow regulation",
    tr: "Akış düzenlemesi",
    nl: "Stroomregeling"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-reducers",
    categoryKey: "productsPage.categories.reducers",
    imageQuery: "technical drawing of aluminum pipe reducer",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 6082",
    tr: "Alüminyum 6082",
    nl: "Aluminium 6082"
  }],
    sizes: ["DN20/15 - DN200/150"],
    standards: ["DIN 2616", "ASME B16.9"],
    useCases: [
  {
    en: "Connecting pipes of different diameters",
    tr: "Farklı çaplarda boruları birleştirme",
    nl: "Pijpen met verschillende diameters verbinden"
  },
  {
    en: "Flow regulation",
    tr: "Akış düzenlemesi",
    nl: "Stroomregeling"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-reducers",
    categoryKey: "productsPage.categories.reducers",
    imageQuery: "technical drawing of CuNiFe pipe reducer",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: ["DN20/15 - DN200/150"],
    standards: ["DIN 2616", "ASME B16.9"],
    useCases: [
  {
    en: "Marine diameter transitions",
    tr: "Denizcilik çap geçişleri",
    nl: "Overgangen in pijpdiameters voor maritieme toepassingen"
  },
  {
    en: "Corrosion resistant flow control",
    tr: "Korozyona dayanıklı akış kontrolü",
    nl: "Corrosiebestendige stroomregeling"
  }
],
    materialCategory: ["cunife"],
  },
  {
    id: "stainless-custom",
    categoryKey: "productsPage.categories.custom",
    imageQuery: "custom designed stainless steel pipe fitting",
    materials: [
  {
    en: "Stainless Steel 316L",
    tr: "Paslanmaz Çelik 316L",
    nl: "Roestvrij staal 316L"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  },
  {
    en: "Stainless Steel 316Ti",
    tr: "Paslanmaz Çelik 316Ti",
    nl: "Roestvrij staal 316Ti"
  }
],

    sizes: [{
    en: "As required",
    tr: "İhtiyaca göre",
    nl: "Indien vereist"
  }],
    standards: [{
    en: "Customer specific",
    tr: "Müşteri özel",
    nl: "Klant specifiek"
  },
  {
    en: "EN, ASTM",
    tr: "EN, ASTM",
    nl: "EN, ASTM"
  }],
    useCases: [
  {
    en: "Specialized applications",
    tr: "Özel uygulamalar",
    nl: "Gespecialiseerde toepassingen"
  },
  {
    en: "Unique system requirements",
    tr: "Benzersiz sistem gereksinimleri",
    nl: "Unieke systeemeisen"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-custom",
    categoryKey: "productsPage.categories.custom",
    imageQuery: "custom designed aluminum pipe fitting",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083"
  },
  {
    en: "Aluminum 6082",
    tr: "Alüminyum 6082",
    nl: "Aluminium 6082"
  }],
    sizes: [{
    en: "As required",
    tr: "İhtiyaca göre",
    nl: "Indien vereist"
  }],
    standards: [{
    en: "Customer specific",
    tr: "Müşteri özel",
    nl: "Klant specifiek"
  },
  {
    en: "EN, ASTM",
    tr: "EN, ASTM",
    nl: "EN, ASTM"
  }],
    useCases: [
  {
    en: "Specialized applications",
    tr: "Özel uygulamalar",
    nl: "Gespecialiseerde toepassingen"
  },
  {
    en: "Lightweight solutions",
    tr: "Hafif çözümler",
    nl: "Lichtgewicht oplossingen"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-custom",
    categoryKey: "productsPage.categories.custom",
    imageQuery: "custom designed CuNiFe pipe fitting",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: [{
    en: "As required",
    tr: "İhtiyaca göre",
    nl: "Indien vereist"
  }],
    standards: [{
    en: "Customer specific",
    tr: "Müşteri özel",
    nl: "Klant specifiek"
  },
  {
    en: "Marine standards",
    tr: "Denizcilik standartları",
    nl: "Maritieme normen"
  }],
    useCases: [
  {
    en: "Marine specialized applications",
    tr: "Denizcilik için özel uygulamalar",
    nl: "Gespecialiseerde toepassingen voor de scheepvaart"
  },
  {
    en: "Extreme corrosion resistance",
    tr: "Aşırı korozyon direnci",
    nl: "Uiterste corrosiebestendigheid"
  }
],
    materialCategory: ["cunife"],
  },
]

const materialCategories = [
  { id: "all", labelKey: "productsPage.categories.all" },
  { id: "stainless", labelKey: "productsPage.categories.stainless" },
  { id: "aluminum", labelKey: "productsPage.categories.aluminum" },
  { id: "cunife", labelKey: "productsPage.categories.cunife" },
  { id: "steel", labelKey: "productsPage.categories.steel" },
]

export default function ProductsPage() {
  const { t } = useTranslation()
  const { locale } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTermInput, setSearchTermInput] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams?.get("search")?.toLowerCase() || ""

  const handleSearch = () => {
    if (searchTermInput.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchTermInput.trim())}`)
    }
  }

  useEffect(() => {
    setSearchTermInput(searchTerm)
  }, [searchTerm])

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((product) =>
          product.materialCategory.includes(selectedCategory)
        )

  const finalFilteredProducts = filteredProducts.filter((product) => {
    const matchInMaterials = product.materials.some((mat) =>
      (mat[locale] || mat.en).toLowerCase().includes(searchTerm)
    )
    const matchInSizes = product.sizes.some((size) => {
      const value = typeof size === "string" ? size : (size[locale] ?? size.en)
      return value.toLowerCase().includes(searchTerm)
    })
    const matchInStandards = product.standards.some((std) => {
      const value = typeof std === "string" ? std : (std[locale] ?? std.en)
      return value.toLowerCase().includes(searchTerm)
    })
    const matchInName = t(product.categoryKey).toLowerCase().includes(searchTerm)
    return matchInMaterials || matchInSizes || matchInStandards || matchInName
  })

  return (
    <PageWrapper>
      <motion.div
        className="bg-white py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("productsPage.title")}
                        subtitle={t("productsPage.subtitle")} />

          <motion.section
            className="py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="text"
                  placeholder={t("homepage.searchPlaceholder") || "Search by material, size or name"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                  value={searchTermInput}
                  onChange={(e) => setSearchTermInput(e.target.value)}
                />
                <Button onClick={handleSearch} className="bg-industrial-blue text-white px-6 py-2">
                  {t("homepage.searchButton") || "Search"}
                </Button>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {materialCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-4 py-2 text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-industrial-blue text-white shadow-lg"
                    : "border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                }`}
              >
                {t(category.labelKey)}
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-industrial-blue text-white hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center gap-2 px-6 py-3 h-auto text-base md:text-lg"
            >
              <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                {t("productsPage.downloadCatalog")}
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {finalFilteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <Image
                      src={`/placeholder.svg?width=300&height=200&query=${product.imageQuery}`}
                      alt={t(product.categoryKey)}
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover w-full h-48"
                    />
                    <CardTitle className="mt-4 text-lg md:text-xl font-semibold text-industrial-blue">
                      {t(product.categoryKey)}
                    </CardTitle>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {product.materialCategory.map((material) => (
                        <span
                          key={material}
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            material === "stainless" || material === "steel"
                              ? "bg-gray-100 text-gray-700"
                              : material === "aluminum"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {t(`productsPage.categories.${material}`)}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription className="text-sm text-gray-600 mb-4">
                      {`${t("productsPage.exploreRange", { productType: t(product.categoryKey).toLowerCase() })} ${product.materials.slice(0, 2).map(m => m[locale] ?? m.en).join(", ")}.`}
                    </CardDescription>
                    <Button
                      onClick={() => openModal(product)}
                      className="w-full bg-industrial-blue text-white hover:bg-opacity-90 transition-all duration-300"
                    >
                      {t("productsPage.details")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {finalFilteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t("productsPage.noProductsFound")}</p>
            </div>
          )}

          {/* Product Modal unchanged */}
          {selectedProduct && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="w-[90vw] max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] bg-white">
                {/* ...modal content remains unchanged */}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </motion.div>
    </PageWrapper>
  )
}
