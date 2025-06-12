"use client"
import { useLanguage } from "@/app/context/language-context"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This is a placeholder. In a real app, you'd fetch post data based on slug.
// For now, we'll use a generic structure.
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { t, language } = useLanguage()
  const { slug } = params

  // Dummy content - replace with actual data fetching for the slug
  const postTitle = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  const postDate = new Date().toLocaleDateString(language, { year: "numeric", month: "long", day: "numeric" })
  const postContent = `
    <p>This is placeholder content for the blog post titled "${postTitle}". In a real application, this content would be fetched based on the slug "${slug}" and could include rich text, images, and other media.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <h3 class="text-xl font-semibold my-4 text-primary-foreground">A Subheading</h3>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <figure class="my-6">
      <img src="/placeholder.svg?height=400&width=700" alt="Technical Diagram" class="rounded-lg mx-auto shadow-md" />
      <figcaption class="text-center text-sm text-muted-foreground mt-2">A placeholder image for illustrative purposes.</figcaption>
    </figure>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  `

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("title", "blog")}
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary-foreground">{postTitle}</h1>
        <p className="text-muted-foreground mb-8">
          {t("common", "common", "loading") /* Replace with actual author/date */} Published on {postDate}
        </p>

        <div
          className="prose prose-invert prose-lg max-w-none text-foreground prose-headings:text-primary-foreground prose-a:text-accent prose-strong:text-primary-foreground"
          dangerouslySetInnerHTML={{ __html: postContent }}
        />
      </div>
    </motion.div>
  )
}
