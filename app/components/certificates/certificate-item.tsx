"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useLanguage } from "@/app/context/language-context"

interface CertificateItemProps {
  name: string
  fileUrl: string
}

export default function CertificateItem({ name, fileUrl }: CertificateItemProps) {
  const { t } = useLanguage()
  return (
    <Card className="bg-card hover:shadow-xl transition-shadow duration-300 text-center">
      <CardHeader>
        <FileText className="h-16 w-16 text-accent mx-auto mb-4" />
        <CardTitle className="text-xl font-semibold text-primary-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          asChild
          variant="outline"
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
            {t("download", "common")} <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
