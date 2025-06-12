"use client"

import { useLanguage } from "@/app/context/language-context"
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"

export default function ContactInfoSidebar() {
  const { t } = useLanguage()

  const contactItems = [
    { icon: <MapPin className="h-5 w-5 text-accent" />, labelKey: "address", value: t("location", "contact") }, // Uses updated translation
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      labelKey: "phone",
      value: "+90 232 XXX XX XX", // Keep phone generic or update if specific to Kartal
      href: "tel:+90232XXXXXXX",
    },
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      labelKey: "email",
      value: "info@eurofitpiping.com",
      href: "mailto:info@eurofitpiping.com",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-primary-foreground">{t("getInTouch", "contact")}</h3>
        {contactItems.map((item) => (
          <div key={item.labelKey} className="flex items-start space-x-3 mb-3">
            {item.icon}
            <div>
              <p className="text-sm font-medium text-muted-foreground">{t(item.labelKey as any, "contact")}</p>
              {item.href ? (
                <a href={item.href} className="text-primary-foreground hover:text-accent">
                  {item.value}
                </a>
              ) : (
                <p className="text-primary-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-primary-foreground">{t("officeHours", "contact")}</h3>
        <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM (GMT+3)</p>
      </div>

      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48224.7070280804!2d29.17008481881167!3d40.92087972969079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4f0f2d8f9e7%3A0xc95c92973249ca73!2sKartal%2F%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1700000000000" // Updated src for Kartal, Istanbul
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title="Eurofit Location in Kartal, İstanbul"
        ></iframe>
      </div>

      <div className="flex space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <Linkedin className="h-7 w-7" /> <span className="sr-only">LinkedIn</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <Instagram className="h-7 w-7" /> <span className="sr-only">Instagram</span>
        </a>
      </div>
    </div>
  )
}
