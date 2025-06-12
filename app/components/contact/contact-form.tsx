"use client"

import { useTransition } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useLanguage } from "@/app/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    startTransition(async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form data:", data)
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-primary-foreground">
          {t("name", "common")}
        </Label>
        <Input id="name" {...register("name")} className="mt-1 bg-background border-border focus:ring-accent" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="company" className="text-primary-foreground">
          {t("company", "common")} (Optional)
        </Label>
        <Input id="company" {...register("company")} className="mt-1 bg-background border-border focus:ring-accent" />
      </div>
      <div>
        <Label htmlFor="email" className="text-primary-foreground">
          {t("email", "common")}
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 bg-background border-border focus:ring-accent"
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="text-primary-foreground">
          {t("message", "common")}
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          className="mt-1 bg-background border-border focus:ring-accent"
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {isPending ? t("loading", "common") : t("submit", "common")}
      </Button>
    </form>
  )
}
