"use client"
import { useLanguage } from "@/app/context/language-context"
import CertificateItem from "@/app/components/certificates/certificate-item"
import { motion } from "framer-motion"

const certificatesData = [
  { nameKey: "iso9001", fileUrl: "/certificates/iso-9001-2015.pdf" },
  { nameKey: "ce", fileUrl: "/certificates/ce-certificate.pdf" },
  { nameKey: "rohs", fileUrl: "/certificates/rohs-compliance.pdf" },
]

export default function CertificatesPage() {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-12 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-4 text-center text-accent">{t("title", "certificates")}</h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{t("desc", "certificates")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.nameKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertificateItem name={t(cert.nameKey as any, "certificates")} fileUrl={cert.fileUrl} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
