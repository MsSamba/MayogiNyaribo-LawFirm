import { Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { Card, CardContent } from "../components/Card"

function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement paths",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with experienced professionals in a supportive team setting",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Regular training programs and professional development opportunities",
    },
    {
      icon: Briefcase,
      title: "Competitive Benefits",
      description: "Comprehensive benefits package including health insurance and retirement plans",
    },
  ]

  const openings = [
    {
      title: "Senior Associate - Corporate Law",
      department: "Corporate Department",
      type: "Full-time",
      experience: "5-8 years",
      description: "We are seeking an experienced corporate lawyer to join our growing corporate department.",
    },
    {
      title: "Junior Associate - Litigation",
      department: "Litigation Department",
      type: "Full-time",
      experience: "2-4 years",
      description: "Opportunity for a junior associate to develop litigation skills in a dynamic environment.",
    },
    {
      title: "Legal Intern",
      department: "Various Departments",
      type: "Internship",
      experience: "Law Student",
      description: "Internship program for law students to gain practical legal experience.",
    },
    {
      title: "Paralegal",
      department: "Support Services",
      type: "Full-time",
      experience: "1-3 years",
      description: "Support role for legal research, document preparation, and case management.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar activePage="careers" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Build your legal career with us. We offer exciting opportunities for growth and development in a dynamic
            legal environment.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Our Culture</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Mayogi Nyaribo & Company Advocates, we foster a culture of excellence, collaboration, and continuous
              learning. Our team members are our greatest asset, and we invest in their professional development and
              well-being.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Mentorship</h3>
                <p className="text-gray-600">
                  Every team member is paired with experienced mentors who provide guidance and support throughout their
                  career journey.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We believe in maintaining a healthy work-life balance and offer flexible working arrangements when
                  possible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Innovation</h3>
                <p className="text-gray-600">
                  We encourage innovative thinking and provide opportunities to work on cutting-edge legal matters and
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Current Openings</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-slate-800">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span>📍 {job.department}</span>
                        <span>⏰ {job.type}</span>
                        <span>🎓 {job.experience}</span>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Process */}
      {/* <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-300">Send your CV and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Review</h3>
              <p className="text-gray-300">We review your application</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview</h3>
              <p className="text-gray-300">Meet with our team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Welcome Aboard</h3>
              <p className="text-gray-300">Join our team</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CareersPage
