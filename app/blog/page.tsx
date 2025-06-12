"use client"
import { useLanguage } from "@/app/context/language-context"
import BlogPostCard from "@/app/components/blog/blog-post-card"
import { motion } from "framer-motion"

// Dummy data
const dummyPosts = (t: Function) => [
  {
    slug: "what-is-cunife",
    titleKey: "sampleTitle1",
    excerpt: "Explore the unique properties of Cunife alloys and their applications in demanding environments.",
    date: "2024-05-15",
    coverImage: "/placeholder.svg?height=200&width=350",
  },
  {
    slug: "benefits-of-cold-press",
    titleKey: "sampleTitle2",
    excerpt: "Learn how cold press manufacturing enhances the quality and efficiency of pipe fittings.",
    date: "2024-04-28",
    coverImage: "/placeholder.svg?height=200&width=350",
  },
  {
    slug: "corrosion-resistance",
    titleKey: "sampleTitle3",
    excerpt:
      "A deep dive into selecting the right materials for optimal corrosion resistance in various industrial settings.",
    date: "2024-03-10",
    coverImage: "/placeholder.svg?height=200&width=350",
  },
]

export default function BlogPage() {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-accent">{t("title", "blog")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyPosts(t).map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogPostCard post={{ ...post, title: t(post.titleKey as any, "blog") }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
