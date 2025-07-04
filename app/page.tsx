"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, DollarSign, Home, CheckCircle, Star, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { useState } from "react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/mvhb-logo.png"
              alt="Mission Valley Home Buyers"
              width={60}
              height={60}
              className="h-12 w-12"
            />
            <span className="text-lg md:text-2xl font-bold text-mvhb-navy">Mission Valley Home Buyers</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-mvhb-teal transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-mvhb-teal transition-colors cursor-pointer"
            >
              About Omar
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-mvhb-teal transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <Button className="bg-mvhb-navy hover:bg-mvhb-dark-navy">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+17867417160" className="text-white no-underline">
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-mvhb-navy"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 space-y-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-gray-600 hover:text-mvhb-teal transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-600 hover:text-mvhb-teal transition-colors py-2"
              >
                About Omar
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-600 hover:text-mvhb-teal transition-colors py-2"
              >
                Reviews
              </button>
              <Button className="w-full bg-mvhb-navy hover:bg-mvhb-dark-navy mt-4">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+17867417160" className="text-white no-underline">
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-mvhb-green/10 to-mvhb-teal/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-mvhb-green/20 text-mvhb-green border-mvhb-green/30 hover:bg-mvhb-green/20">
                    ✓ We Buy Houses Fast
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mvhb-navy leading-tight">
                    Sell Your House in
                    <span className="text-mvhb-teal"> 7 Days</span> or Less
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Get a fair cash offer for your house today. No repairs, no showings, no commissions. We buy houses
                    in any condition, anywhere we serve.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-mvhb-green">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">No Repairs Needed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-mvhb-green">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Cash Offers Only</span>
                  </div>
                  <div className="flex items-center space-x-2 text-mvhb-green">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Close in 7 Days</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-mvhb-teal hover:bg-mvhb-teal/90 text-lg px-8 py-4"
                    onClick={() => scrollToSection("contact-form")}
                  >
                    Get My Cash Offer
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 border-mvhb-navy text-mvhb-navy hover:bg-mvhb-navy hover:text-white bg-transparent"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    (786) 741-7160
                  </Button>
                </div>
              </div>

              {/* Lead Capture Form */}
              <div id="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-mvhb-navy/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-mvhb-navy mb-4">Proudly Serving Multiple States</h2>
              <p className="text-gray-600 mb-8">We buy houses across the Southeast and Mid-Atlantic regions</p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-mvhb-green/20">
                  <MapPin className="h-5 w-5 text-mvhb-teal" />
                  <span className="font-medium text-mvhb-navy">Florida</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-mvhb-green/20">
                  <MapPin className="h-5 w-5 text-mvhb-teal" />
                  <span className="font-medium text-mvhb-navy">Georgia</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-mvhb-green/20">
                  <MapPin className="h-5 w-5 text-mvhb-teal" />
                  <span className="font-medium text-mvhb-navy">Maryland</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-mvhb-green/20">
                  <MapPin className="h-5 w-5 text-mvhb-teal" />
                  <span className="font-medium text-mvhb-navy">& More</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mvhb-navy mb-4">
                Why Sell to Mission Valley Home Buyers?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We make selling your house simple, fast, and stress-free. No matter your situation, we can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="bg-mvhb-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <DollarSign className="h-8 w-8 text-mvhb-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-mvhb-navy">Fair Cash Offers</h3>
                  <p className="text-gray-600">
                    We provide competitive cash offers based on current market conditions and your property's value.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="bg-mvhb-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="h-8 w-8 text-mvhb-green" />
                  </div>
                  <h3 className="text-xl font-bold text-mvhb-navy">Close Fast</h3>
                  <p className="text-gray-600">
                    We can close in as little as 7 days, or on your timeline. You choose the closing date.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="bg-mvhb-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Home className="h-8 w-8 text-mvhb-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-mvhb-navy">Any Condition</h3>
                  <p className="text-gray-600">
                    We buy houses in any condition. No need to clean, repair, or renovate anything.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="bg-mvhb-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-mvhb-green" />
                  </div>
                  <h3 className="text-xl font-bold text-mvhb-navy">No Fees or Commissions</h3>
                  <p className="text-gray-600">
                    No realtor commissions, no closing costs, no hidden fees. What we offer is what you get.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="bg-mvhb-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-8 w-8 text-mvhb-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-mvhb-navy">Military Integrity</h3>
                  <p className="text-gray-600">
                    Founded by a Naval Academy graduate, we bring military values of honor and integrity to every deal.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="bg-mvhb-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-mvhb-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-mvhb-navy">Personal Service</h3>
                  <p className="text-gray-600">
                    Work directly with Omar and his team. No call centers or middlemen - just honest, personal service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-mvhb-navy/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mvhb-navy mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Our simple 3-step process makes selling your house easy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-mvhb-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-mvhb-navy mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Call us or fill out our form. Tell us about your property and situation.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mvhb-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-mvhb-navy mb-2">Get Your Offer</h3>
                <p className="text-gray-600">
                  We'll schedule a quick visit and present you with a fair cash offer within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mvhb-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-mvhb-navy mb-2">Close & Get Paid</h3>
                <p className="text-gray-600">
                  Accept our offer and we'll handle everything. Close in 7 days and get your cash.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Situations We Help With */}
        <section className="py-16 bg-mvhb-navy/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mvhb-navy mb-4">We Buy Houses in Any Situation</h2>
              <p className="text-xl text-gray-600">
                No matter what's happening in your life, we can help you sell your house quickly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Foreclosure",
                "Divorce",
                "Inherited Property",
                "Job Relocation",
                "Financial Hardship",
                "Downsizing",
                "Rental Property",
                "Damaged Property",
              ].map((situation) => (
                <Card
                  key={situation}
                  className="text-center p-4 hover:shadow-md transition-shadow bg-white border-mvhb-green/20"
                >
                  <CardContent>
                    <CheckCircle className="h-8 w-8 text-mvhb-green mx-auto mb-2" />
                    <h3 className="font-semibold text-mvhb-navy">{situation}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mvhb-navy mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600">Real stories from real people who sold their houses to us</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="flex text-mvhb-green">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Mission Valley Home Buyers was a great company to deal with. They made me a good offer and stuck to
                    the contract we agreed to. Considering the stress of moving, MVHB kept things on track. They were
                    pleasant people to deal with - from the owner to the office staff. I would recommend MVHB to anyone
                    seeking to quickly sell a house."
                  </p>
                  <div>
                    <p className="font-semibold text-mvhb-navy">Tim S.</p>
                    <p className="text-sm text-gray-500">Fort Lauderdale, FL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="flex text-mvhb-green">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "The whole process went smoothly and the company was very professional throughout. They accommodated
                    my schedule and followed my timeline perfectly. From showing the property to closing took just 7
                    days! They offered a fair price with no haggling. Mission Valley fully researched and evaluated fair
                    market value before making their offer. FIVE STARS."
                  </p>
                  <div>
                    <p className="font-semibold text-mvhb-navy">J. Reyes</p>
                    <p className="text-sm text-gray-500">Pensacola, FL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-mvhb-green/20">
                <CardContent className="space-y-4">
                  <div className="flex text-mvhb-green">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Mission Valley Home Buyers was a pleasure to work with. We look forward to working with them again
                    in the near future!"
                  </p>
                  <div>
                    <p className="font-semibold text-mvhb-navy">Jeremy J.</p>
                    <p className="text-sm text-gray-500">Punta Gorda, FL</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-mvhb-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your House Fast?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your no-obligation cash offer today. It takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-mvhb-teal hover:bg-mvhb-teal/90 text-lg px-8 py-4"
                onClick={() => scrollToSection("contact-form")}
              >
                Get My Cash Offer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-mvhb-navy text-lg px-8 py-4 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+17867417160" className="text-white no-underline">
                  (786) 741-7160
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-mvhb-dark-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xl font-bold">Mission Valley Home Buyers</span>
              </div>
              <p className="text-gray-300">
                We buy houses fast for cash in any condition. Founded by Naval Academy graduate Omar Messallam.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-mvhb-teal transition-colors cursor-pointer"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-mvhb-teal transition-colors cursor-pointer"
                  >
                    About Omar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-mvhb-teal transition-colors cursor-pointer"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <Link href="#" className="hover:text-mvhb-teal transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">We Buy Houses In</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Florida</li>
                <li>Georgia</li>
                <li>Maryland</li>
                <li>& More States</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(786) 741-7160</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">18117 Biscayne Blvd PMB 62273, Miami, FL 33160</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-mvhb-navy mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Mission Valley Home Buyers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
