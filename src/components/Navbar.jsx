"use client"

import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useLocalStorage } from "../hooks/useLocalStorage"

function Navbar({ activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useLocalStorage("navbar_mobileMenuOpen", false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="bg-slate-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Mayogi Nyaribo & Company Advocates" className="w-[50px] h-[50px]" />
          <div>
            <h1 className="text-xl font-bold">MAYOGI NYARIBO</h1>
            <p className="text-sm text-amber-400">& COMPANY ADVOCATES</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={activePage === "home" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}>
            Home
          </Link>
          <Link
            to="/practice-areas"
            className={activePage === "practice-areas" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
          >
            Practice Areas
          </Link>
          <Link
            to="/about"
            className={activePage === "about" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className={activePage === "careers" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className={activePage === "contact" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={activePage === "home" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/practice-areas"
              className={activePage === "practice-areas" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              to="/about"
              className={activePage === "about" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className={activePage === "careers" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={activePage === "contact" ? "text-amber-400" : "hover:text-amber-400 transition-colors"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
