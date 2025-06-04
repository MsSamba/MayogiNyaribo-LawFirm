"use client"

import { useState } from "react"
import { Users, Award, Clock, Target, Plus, X } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Card, CardContent } from "../components/Card"

function AboutPage() {
  const [flippedCards, setFlippedCards] = useState({})

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every case, ensuring the highest quality legal representation.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our professional dealings.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace modern legal practices and technology to serve our clients better.",
    },
    {
      icon: Clock,
      title: "Dedication",
      description: "We are committed to our clients' success and work tirelessly to achieve their goals.",
    },
  ]

  const team = [
    {
      name: "Mr. Brian Mayogi",
      position: "Partner",
      description:
        "Mr. Mayogi is an Advocate of the High Court of Kenya and the firm's managing partner. He holds a Bachelor of Laws (LL.B.) degree from Moi University and a Post-Graduate Diploma from the Kenya School of Law. He is a member of the Law Society of Kenya.",
      detailedInfo: {
        background:
          "Mr. Mayogi has worked with a number of reputable law firms in Nairobi engaging in civil litigation and commercial law. Prior to founding the firm, he was a senior associate at C&K Advocates LLP where he gained invaluable experience in civil litigation.",
        areasOfInterest: [
          "Commercial Law",
          "Property Law and Conveyance",
          "Banking, Finance and Securities Law",
          "Personal Injury and Insurance Law",
          "Consumer Protection",
        ],
      },
    },
    {
      name: "Mr. Sam Nyaribo",
      position: "Partner",
      description:
        "Mr. Nyaribo is an Advocate of the High Court of Kenya. He holds a Bachelor of Laws (LL.B.) degree from Moi University and a Post-Graduate Diploma from the Kenya School of Law. He is a member of the Law Society of Kenya.",
      detailedInfo: {
        background:
          "Mr. Nyaribo has worked with a number of reputable firms in Nairobi engaging in family law and employment matters. Prior to joining the firm, the was a Senior Associate at Auta Nyakundi and company Advocates, where he gained invaluable experience in family and employment law.",
        areasOfInterest: [
          "Family Law",
          "Employment Law",
          "Alternative Dispute Resolution",
          "Women's Rights",
          "Child Protection",
        ],
      },
    },
    {
      name: "Ms. June Imora",
      position: "Associate",
      description: "Ms. Imora is an Advocate of the High Court of Kenya. She holds a Bachelor of Laws (LL.B.) degree from University of Nairobi and a Post-Graduate Diploma from the Kenya School of Law. She is a member of the Law Society of Kenya.",
      detailedInfo: {
        background:
          "Ms. Imora has worked with a number of reputable firms in Nairobi engaging in criminal defense and constitutional law. Prior to joining the firm, she was an Associate at Mboya & Associates Advocates, where she gained invaluable experience in criminal litigation.",
        areasOfInterest: [
          "Criminal Defense",
          "Constitutional Law",
          "Human Rights",
          "Appeals and Reviews",
          "Bail Applications",
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar activePage="about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Firm</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Established with a commitment to excellence, we have been serving clients with integrity and expertise for
            over two decades.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Founded in 2020, Mayogi Nyaribo & Company Advocates has grown from a small practice to one of Kenya's
                most respected law firms. Our journey began with a simple mission: to provide exceptional legal services
                while maintaining the highest standards of professional integrity.
              </p>
              <p className="mb-6">
                Over the years, we have successfully represented clients across various sectors, from multinational
                corporations to individuals seeking justice. Our diverse team of legal professionals brings together
                decades of combined experience and a deep understanding of both local and international law.
              </p>
              <p>
                Today, we continue to evolve and adapt to meet the changing needs of our clients, embracing new
                technologies and legal innovations while staying true to our core values of excellence, integrity, and
                client service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative h-96 perspective-1000">
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of Card */}
                  <Card className="absolute inset-0 backface-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-800 text-center">{member.name}</h3>
                      <p className="text-amber-600 font-medium mb-3 text-center">{member.position}</p>
                      <p className="text-gray-600 text-center flex-grow">{member.description}</p>

                      {/* Plus Button */}
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={() => toggleCard(index)}
                          className="w-10 h-10 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back of Card */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
                        <button
                          onClick={() => toggleCard(index)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex-grow overflow-y-auto">
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.detailedInfo.background}</p>

                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                            {member.name.split(" ")[1]}'s areas of interest are in:
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {member.detailedInfo.areasOfInterest.map((area, areaIndex) => (
                              <li key={areaIndex} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 flex-shrink-0"></span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-amber-400 mb-2">20+</h3>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amber-400 mb-2">500+</h3>
              <p className="text-lg">Cases Won</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amber-400 mb-2">1000+</h3>
              <p className="text-lg">Satisfied Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amber-400 mb-2">15+</h3>
              <p className="text-lg">Legal Experts</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutPage
