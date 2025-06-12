"use client"
import { useLanguage } from "@/app/context/language-context"
import ProductCard from "@/app/components/products/product-card"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dummy data - replace with actual data fetching
const productCategories = ["aluminum", "stainlessSteel", "cunife", "carbonSteel"] as const
type ProductCategory = (typeof productCategories)[number]

const dummyProducts = (category: ProductCategory, t: Function) => [
  {
    id: `${category}-1`,
    name: `${t(category, "products", "categories")} Product 1`,
    image: `/placeholder.svg?height=300&width=400&query=${category}+fitting+1`,
    specs: "Spec A, Spec B",
    useCase: "Industrial Application X",
    category,
  },
  {
    id: `${category}-2`,
    name: `${t(category, "products", "categories")} Product 2`,
    image: `/placeholder.svg?height=300&width=400&query=${category}+fitting+2`,
    specs: "Spec C, Spec D",
    useCase: "Commercial Application Y",
    category,
  },
  {
    id: `${category}-3`,
    name: `${t(category, "products", "categories")} Product 3`,
    image: `/placeholder.svg?height=300&width=400&query=${category}+fitting+3`,
    specs: "Spec E, Spec F",
    useCase: "Specialized Use Z",
    category,
  },
]

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-accent">{t("title", "products")}</h1>

      <Tabs defaultValue="aluminum" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {productCategories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {t(cat, "products", "categories")}
            </TabsTrigger>
          ))}
        </TabsList>

        {productCategories.map((category) => (
          <TabsContent key={category} value={category}>
            <h2 className="text-2xl font-semibold mb-6 text-accent">{t(category, "products", "categories")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dummyProducts(category, t).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  )
}
