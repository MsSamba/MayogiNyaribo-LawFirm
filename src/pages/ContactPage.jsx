import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Input from "../components/Input"
import Textarea from "../components/Textarea"
import { Card, CardContent } from "../components/Card"

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar activePage="contact" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our legal experts. We're here to help you with all your legal needs and provide
            professional consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Phone</h3>
                <p className="text-gray-600">+254 723 638 182</p>
                {/* <p className="text-gray-600">+254 711 111 111</p> */}
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Mail className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Email</h3>
                <p className="text-gray-600">info@mayoginyariboadvocates.co.ke</p>
                {/* <p className="text-gray-600">legal@mayoginyaribo.co.ke</p> */}
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Address</h3>
                <p className="text-gray-600">Hurlingham Plaza, 2nd Floor</p>
                <p className="text-gray-600">Argwings Kodhek Road, Nairobi</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Office Hours</h3>
                <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                {/* <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p> */}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Send us a Message</h2>
                <form action="" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input type="tel" placeholder="+254 700 000 000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Legal Matter Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="">Select a practice area</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="litigation">Civil Litigation</option>
                      <option value="family">Family Law</option>
                      <option value="employment">Employment Law</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="immigration">Immigration Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea placeholder="Please describe your legal matter or question..." rows={5} required />
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
               {/* Interactive Google Map */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-80 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176449076!2d36.78234731475394!3d-1.2846481990637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22c5d8c5d%3A0x8b8b8b8b8b8b8b8b!2sHurlingham%20Plaza%2C%20Argwings%20Kodhek%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1703123456789!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mayogi Nyaribo & Company Advocates Office Location"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="flex items-center gap-2 text-slate-800">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="font-semibold">Our Office Location</p>
                        <p className="text-sm text-gray-600">
                          Hurlingham Plaza, 2nd Floor, Argwings Kodhek Road, Kilimani, Nairobi
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directions Card */}
              {/* <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">Getting to Our Office</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        1
                      </span>
                      <p>
                        <strong>By Car:</strong> Take Argwings Kodhek Road in Kilimani. Hurlingham Plaza is easily
                        accessible with ample parking available.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        2
                      </span>
                      <p>
                        <strong>By Public Transport:</strong> Take a matatu to Kilimani or Hurlingham area. The plaza is
                        a short walk from the main road.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        3
                      </span>
                      <p>
                        <strong>Landmark:</strong> Look for Hurlingham Plaza building on Argwings Kodhek Road. We're
                        located on the 2nd Floor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Emergency Contact */}
              <Card className="bg-slate-800 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Emergency Legal Assistance</h3>
                  <p className="mb-4">
                    For urgent legal matters outside office hours, please call our emergency hotline:
                  </p>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <Phone className="w-5 h-5" />
                    <span>+254 723 638 182</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">Available for emergency legal situations</p>
                </CardContent>
              </Card>

              {/* Consultation Info */}
              {/* <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">Free Consultation</h3>
                  <p className="text-gray-700 mb-4">
                    We offer a free 30-minute consultation for new clients to discuss your legal needs and how we can
                    assist you.
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Schedule Consultation</Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage
