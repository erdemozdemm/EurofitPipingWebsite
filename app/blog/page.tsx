"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, UserCircle, ArrowRight } from "lucide-react"
import { getAllPosts, type BlogPost } from "@/app/data/blog-posts"
import { motion } from "framer-motion"

export default function BlogPage() {
  const { t } = useTranslation()
  const posts: BlogPost[] = getAllPosts()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(t("locale") || "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <motion.div
      className="bg-gradient-to-b from-white via-light-gray to-light-gray py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <SectionTitle title={t("blogPage.title")} subtitle={t("blogPage.subtitle")} />
        </motion.div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-t-xl">
                    <div className="relative w-full h-56">
                      <Image
                        src={`/placeholder.svg?width=400&height=225&query=${post.imageQuery}`}
                        alt={t(post.titleKey)}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <CardHeader className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <CardTitle className="text-xl font-bold text-industrial-blue hover:underline">
                        {t(post.titleKey)}
                      </CardTitle>
                    </Link>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1.5" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <UserCircle className="h-4 w-4 mr-1.5" />
                        {t(post.authorKey)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-4 text-gray-700">
                    <CardDescription className="mb-6 line-clamp-3">
                      {t(post.excerptKey)}
                    </CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white transition-all"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        {t("blogPage.readTitle")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            className="text-center text-gray-600 text-lg mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("blogPage.noPosts")}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
