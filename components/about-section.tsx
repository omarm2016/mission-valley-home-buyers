import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, MapPin, TrendingUp } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mvhb-navy mb-4">Meet Our Founder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by integrity, experience, and a commitment to serving homeowners nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Image
                src="/images/omar-headshot.jpg"
                alt="Omar Messallam"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-2 border-mvhb-teal/20"
              />
              <div>
                <h3 className="text-2xl font-bold text-mvhb-navy mb-1">Omar Messallam</h3>
                <p className="text-lg text-mvhb-teal font-medium">Founder & CEO</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="h-6 w-6 text-mvhb-teal mt-1" />
                <div>
                  <h4 className="font-semibold text-mvhb-navy">Naval Academy Graduate</h4>
                  <p className="text-gray-600">
                    Graduated from the United States Naval Academy, bringing military discipline and integrity to every
                    transaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-mvhb-green mt-1" />
                <div>
                  <h4 className="font-semibold text-mvhb-navy">7+ Years Experience</h4>
                  <p className="text-gray-600">
                    Active in real estate since 2017, with deep market knowledge across multiple states.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-mvhb-teal mt-1" />
                <div>
                  <h4 className="font-semibold text-mvhb-navy">100+ Transactions Closed</h4>
                  <p className="text-gray-600">
                    Successfully closed over 100 real estate transactions in residential and commercial properties.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-mvhb-green mt-1" />
                <div>
                  <h4 className="font-semibold text-mvhb-navy">Multi-State Expertise</h4>
                  <p className="text-gray-600">
                    Extensive experience serving clients across the Southeast and Mid-Atlantic regions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-mvhb-teal/10 text-mvhb-teal border-mvhb-teal/20">Residential Expert</Badge>
              <Badge className="bg-mvhb-green/10 text-mvhb-green border-mvhb-green/20">Commercial Specialist</Badge>
              <Badge className="bg-mvhb-teal/10 text-mvhb-teal border-mvhb-teal/20">Naval Academy Graduate</Badge>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-mvhb-green/5 to-mvhb-teal/5 border-mvhb-green/20">
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-mvhb-navy">Omar Messallam</h3>
                <p className="text-mvhb-teal">Founder & CEO</p>
              </div>

              <blockquote className="text-center italic text-gray-700">
                "My mission is to serve homeowners with the same integrity and dedication I learned at the Naval
                Academy. Every transaction is an opportunity to make a positive impact in someone's life."
              </blockquote>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-mvhb-teal">100+</div>
                  <div className="text-sm text-gray-600">Transactions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-mvhb-green">7+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
