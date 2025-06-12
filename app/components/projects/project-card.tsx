"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"

interface Project {
  id: string
  title: string
  description: string
  productsUsed: string
  visuals: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()
  return (
    <Card className="h-full flex flex-col overflow-hidden bg-card hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        {project.visuals[0] && (
          <div className="aspect-video relative w-full mb-4">
            <Image
              src={project.visuals[0] || "/placeholder.svg"}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-primary-foreground">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground mb-2">{project.description}</CardDescription>
        <p className="text-sm text-foreground">
          <strong>{t("productsUsed", "projects")}:</strong> {project.productsUsed}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-accent p-0">
          {t("learnMore", "common")}
        </Button>
      </CardFooter>
    </Card>
  )
}
