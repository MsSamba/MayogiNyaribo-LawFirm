import { Link } from "react-router-dom"
import { Scale, Building, Home, Briefcase, Shield, MapPin, Banknote, Lightbulb, UserCheck } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Card, CardContent } from "../components/Card"

function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: MapPin,
      title: "Property Law and Conveyance",
      description:
        "The firm appreciates the need to safeguard the interests of every party to a transaction involving real property. We provide comprehensive property law services to protect our clients' interests.",
      services: [
        "Conduction of due diligence in real property",
        "Drawing and registration of charges on real property",
        "Lease and tenancy agreements",
        "Agreements for sale",
        "Joint venture and partnership agreements",
        "Agreements for Hire Purchase",
        "Cautions and caveats on land",
        "Consultancy in land use, subdivision and planning",
        "Consultancy in tax relating to sale and use of property",
      ],
    },
    {
      icon: Banknote,
      title: "Banking, Finance and Securities Law",
      description:
        "The world of commerce is quickly evolving, bringing in many forms of asset-financing and projects. We have positioned ourselves to appreciate these new developments as they play a great role in economic development.",
      services: [
        "Perfection and discharge of securities",
        "Consultancy in the financial services sector",
        "Asset-financing transactions",
        "Project financing",
        "Banking regulatory compliance",
        "Financial institution advisory services",
      ],
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property Law",
      description:
        "The firm offers a full range of services in registration, promotion and protection of intellectual property (IP) rights to safeguard your innovations and creative works.",
      services: [
        "Registration of trademarks and patents",
        "Industrial designs and utility models",
        "Public Policy, Regulatory Affairs & Compliance",
        "Enforcement of IP rights through Government Agencies",
        "Drafting of license agreements and deed of assignments",
        "Franchise agreements",
        "IP audits and valuation",
        "Due diligence on intellectual property",
      ],
    },
    {
      icon: Building,
      title: "Corporate Law",
      description:
        "Comprehensive business legal services including company formation, mergers and acquisitions, corporate governance, and regulatory compliance.",
      services: ["Company Formation", "Mergers & Acquisitions", "Corporate Governance", "Regulatory Compliance"],
    },
    {
      icon: Scale,
      title: "Civil Litigation",
      description:
        "Expert representation in civil disputes, contract disputes, commercial litigation, and alternative dispute resolution.",
      services: ["Contract Disputes", "Commercial Litigation", "Debt Recovery", "Alternative Dispute Resolution"],
    },
    {
      icon: Home,
      title: "Family Law and Succession",
      description:
        "Sensitive handling of family matters including divorce, child custody, adoption, and succession with compassionate approach.",
      services: ["Divorce Proceedings", "Child Custody", "Adoption", "Succession"],
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description:
        "Comprehensive employment legal services for both employers and employees including workplace disputes and policy development.",
      services: ["Employment Contracts", "Workplace Disputes", "Policy Development", "Termination Issues"],
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description:
        "Vigorous defense representation for criminal matters with experienced advocacy and strategic legal planning.",
      services: ["Criminal Defense", "Bail Applications", "Appeals", "Legal Representation"],
    },
    {
      icon: UserCheck,
      title: "Immigration Law",
      description:
        "Expert guidance on immigration matters including visa applications, work permits, and citizenship processes.",
      services: ["Visa Applications", "Work Permits", "Citizenship", "Immigration Appeals"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar activePage="practice-areas" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Practice Areas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, ensuring expert representation for
            all your legal needs with specialized expertise in each field.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <area.icon className="w-12 h-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{area.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{area.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Services Include:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Highlight */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Specialized Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Property & Real Estate</h3>
                <p className="text-gray-600">
                  Comprehensive property law services including due diligence, conveyancing, and land use consultancy.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Banknote className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Banking & Finance</h3>
                <p className="text-gray-600">
                  Expert guidance in modern financial transactions, securities, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Lightbulb className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Intellectual Property</h3>
                <p className="text-gray-600">
                  Full-service IP protection including registration, enforcement, and commercial IP transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Need Legal Assistance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experienced team is ready to help you navigate your legal challenges across all practice areas.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PracticeAreasPage
