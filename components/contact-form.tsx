"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await submitContactForm(formData)
      setResult(response)

      // If successful, reset form
      if (response.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-2xl border-mvhb-green/20">
      <CardHeader className="text-center bg-gradient-to-r from-mvhb-green/5 to-mvhb-teal/5">
        <CardTitle className="text-2xl text-mvhb-navy">Get Your Cash Offer</CardTitle>
        <CardDescription className="text-lg">Fill out the form below for a no-obligation cash offer</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        {result && (
          <Alert className={result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
            {result.success ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={result.success ? "text-green-800" : "text-red-800"}>
              {result.message}
            </AlertDescription>
          </Alert>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name *"
              required
              className="border-gray-300 focus:border-mvhb-teal focus:ring-mvhb-teal"
              disabled={isSubmitting}
            />
            <Input
              name="lastName"
              placeholder="Last Name *"
              required
              className="border-gray-300 focus:border-mvhb-teal focus:ring-mvhb-teal"
              disabled={isSubmitting}
            />
          </div>
          <Input
            name="phone"
            placeholder="Phone Number *"
            type="tel"
            required
            className="border-gray-300 focus:border-mvhb-teal focus:ring-mvhb-teal"
            disabled={isSubmitting}
          />
          <Input
            name="email"
            placeholder="Email Address *"
            type="email"
            required
            className="border-gray-300 focus:border-mvhb-teal focus:ring-mvhb-teal"
            disabled={isSubmitting}
          />
          <Input
            name="propertyAddress"
            placeholder="Property Address *"
            required
            className="border-gray-300 focus:border-mvhb-teal focus:ring-mvhb-teal"
            disabled={isSubmitting}
          />
          <Textarea
            name="situation"
            placeholder="Tell us about your situation (optional)"
            rows={3}
            className="border-gray-300 focus:border-mvhb-teal focus:ring-mvhb-teal"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="w-full bg-mvhb-green hover:bg-mvhb-green/90 text-lg py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get My Cash Offer Now"
            )}
          </Button>
          <p className="text-sm text-gray-500 text-center">
            We respect your privacy. Your information is secure and will never be shared.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
