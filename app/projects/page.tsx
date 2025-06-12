"use client"
import { useLanguage } from "@/app/context/language-context"
import ProjectCard from "@/app/components/projects/project-card"
import { motion } from "framer-motion"

// Dummy data
const dummyProjects = (t: Function) => [
  {
    id: "proj1",
    title: "Major Pipeline Infrastructure",
    description:
      "Supplied critical cunife fittings for a large-scale offshore pipeline, ensuring longevity and corrosion resistance.",
    productsUsed: "Cunife Bends, Flanges",
    visuals: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
  },
  {
    id: "proj2",
    title: "Automotive Fluid Systems",
    description:
      "Provided high-precision aluminum fittings for advanced automotive cooling and fluid transfer systems.",
    productsUsed: "Aluminum Connectors, Custom Adapters",
    visuals: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
  },
  {
    id: "proj3",
    title: "Food & Beverage Processing Plant",
    description:
      "Delivered stainless steel fittings meeting stringent hygiene standards for a new food processing facility.",
    productsUsed: "Stainless Steel Sanitary Fittings",
    visuals: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
  },
]

export default function ProjectsPage() {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-4 text-center text-accent">{t("title", "projects")}</h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{t("desc", "projects")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyProjects(t).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
