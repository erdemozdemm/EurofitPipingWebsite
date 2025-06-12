"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"
import { ArrowRight } from "lucide-react"

interface Post {
  slug: string
  title: string // Already translated
  excerpt: string
  date: string
  coverImage: string
}

interface BlogPostCardProps {
  post: Post
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { t, language } = useLanguage()
  const formattedDate = new Date(post.date).toLocaleDateString(language, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card className="h-full flex flex-col overflow-hidden bg-card hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`} className="block aspect-video relative w-full">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-primary-foreground hover:text-accent transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-3">{formattedDate}</p>
        <CardDescription className="text-muted-foreground line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="text-accent p-0">
          <Link href={`/blog/${post.slug}`}>
            {t("readMore", "blog")} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
