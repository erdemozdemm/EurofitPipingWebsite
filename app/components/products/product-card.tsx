"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"

interface Product {
  id: string
  name: string
  image: string
  specs: string
  useCase: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage()
  return (
    <Card className="h-full flex flex-col overflow-hidden bg-card hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-primary-foreground">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-1">
          <strong>{t("technicalSpecs", "products")}:</strong> {product.specs}
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>{t("useCases", "products")}:</strong> {product.useCase}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {/* Example: Link to a product detail page */}
        {/* <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <Link href={`/products/${product.category}/${product.id}`}>{t('viewDetails', 'common')}</Link>
        </Button> */}
        <Button
          variant="outline"
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          {t("viewDetails", "common")}
        </Button>
      </CardFooter>
    </Card>
  )
}
