"use client"
import { useLanguage } from "@/app/context/language-context"
import ContactForm from "@/app/components/contact/contact-form"
import ContactInfoSidebar from "@/app/components/contact/contact-info-sidebar"
import { motion } from "framer-motion"

export default function ContactPage() {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-4 text-center text-accent">{t("title", "contact")}</h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{t("formDesc", "contact")}</p>
      <div className="grid md:grid-cols-3 gap-12 bg-card p-8 md:p-12 rounded-lg shadow-xl">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">{t("getInTouch", "contact")}</h2>
          <ContactForm />
        </div>
        <div>
          <ContactInfoSidebar />
        </div>
      </div>
    </motion.div>
  )
}
