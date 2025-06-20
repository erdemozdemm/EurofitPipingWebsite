"use client"

import { useActionState, useEffect, useRef } from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import PageWrapper from "@/app/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react"
import { submitContactForm, type ContactFormState } from "./action"
import { motion } from "framer-motion"

const initialState: ContactFormState = {
  success: false,
  message: "",
}

export default function ContactPage() {
  const { t } = useTranslation()
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6 text-industrial-blue" />,
      labelKey: "contactPage.directContact.email",
      value: t("footer.email"),
      href: `mailto:${t("footer.email")}`,
    },
    {
      icon: <Phone className="h-6 w-6 text-industrial-blue" />,
      labelKey: "contactPage.directContact.phone",
      value: t("footer.phone"),
      href: `tel:${t("footer.phone")}`,
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-industrial-blue" />,
      labelKey: "contactPage.directContact.whatsapp",
      value: t("footer.phone"),
      href: `https://wa.me/${t("footer.phone").replace(/\s+/g, "")}`,
    },
  ]

  return (
    <PageWrapper>
      <motion.div
        className="bg-white py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("contactPage.title")} subtitle={t("contactPage.subtitle")} />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industrial-blue">{t("contactPage.form.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} action={formAction} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-dark-gray-text">
                        {t("contactPage.form.name")}
                      </Label>
                      <Input id="name" name="name" required placeholder={t("contactPage.form.namePlaceholder")} className="mt-1" />
                      {state?.errors?.name && (
                        <p className="text-sm text-red-600 mt-1">{state.errors.name.join(", ")}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-dark-gray-text">
                        {t("contactPage.form.email")}
                      </Label>
                      <Input id="email" name="email" type="email" required placeholder={t("contactPage.form.emailPlaceholder")} className="mt-1" />
                      {state?.errors?.email && (
                        <p className="text-sm text-red-600 mt-1">{state.errors.email.join(", ")}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject" className="text-dark-gray-text">
                        {t("contactPage.form.subject")}
                      </Label>
                      <Input id="subject" name="subject" required placeholder={t("contactPage.form.subjectPlaceholder")} className="mt-1" />
                      {state?.errors?.subject && (
                        <p className="text-sm text-red-600 mt-1">{state.errors.subject.join(", ")}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-dark-gray-text">
                        {t("contactPage.form.message")}
                      </Label>
                      <Textarea id="message" name="message" required rows={5} placeholder={t("contactPage.form.messagePlaceholder")} className="mt-1" />
                      {state?.errors?.message && (
                        <p className="text-sm text-red-600 mt-1">{state.errors.message.join(", ")}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div>
                      <Button type="submit" className="w-full bg-industrial-blue text-white hover:bg-opacity-90 flex items-center justify-center" disabled={isPending}>
                        {isPending ? (
                          <>
                            <Send className="mr-2 h-4 w-4 animate-pulse" />
                            {t("contactPage.form.submitting")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t("contactPage.form.submit")}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Result */}
                    {state?.message && (
                      <p className={`text-sm mt-2 text-center ${state.success ? "text-green-600" : "text-red-600"}`} role="alert">
                        {t(state.message)}
                      </p>
                    )}
                    {state?.errors?._form && (
                      <p className="text-sm text-red-600 mt-2 text-center" role="alert">
                        {state.errors._form.join(", ")}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industrial-blue">{t("contactPage.directContact.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-industrial-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-gray-text">{t("contactPage.directContact.address")}</h4>
                      <p className="text-gray-600">{t("contactPage.directContact.addressDetails")}</p>
                    </div>
                  </div>
                  {contactDetails.map((detail) => (
                    <div key={detail.labelKey} className="flex items-center">
                      {detail.icon}
                      <div className="ml-3">
                        <h4 className="font-semibold text-dark-gray-text">{t(detail.labelKey)}</h4>
                        <a href={detail.href} className="text-gray-600 hover:text-industrial-blue transition-colors">
                          {detail.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industrial-blue">{t("contactPage.mapTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-w-16 aspect-h-9 bg-medium-gray rounded-md overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5234567890123!2d29.1833333!3d40.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzAwLjAiTiAyOcKwMTEnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Eurofit Piping Location in Kartal, İstanbul"
                      className="rounded-md"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <strong>Getting Here:</strong> Our facility is easily accessible from both European and Asian sides of İstanbul via the E-5 highway and public transportation.
                    </p>
                    <p>
                      <strong>Parking:</strong> On-site parking available for visitors and clients.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  )
}
