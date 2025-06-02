function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Physical Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Physical Address</h3>
            <div className="w-16 h-0.5 bg-amber-400 mb-6"></div>
            <div className="space-y-2 text-gray-300">
              <p>Hurlingham Plaza</p>
              <p>2nd Floor</p>
              <p>Argwings Kodhek Road - Kilimani</p>
              <p>Nairobi, Kenya.</p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Phone Number & E-Mail</h3>
            <div className="w-16 h-0.5 bg-amber-400 mb-6"></div>
            <div className="space-y-2 text-gray-300">
              <p>Phone: +254 723 638 182</p>
              <p>P.O.Box: 2314-00505, Nairobi</p>
              <p>Email: info@mayoginyaribo.co.ke</p>
            
            </div>
          </div>
        </div>

        {/* Logo and Firm Name */}
        <div className="flex items-center justify-center space-x-3 mb-6 pt-8 border-t border-slate-700">
          <img src="/logo.png" alt="Mayogi Nyaribo & Company Advocates" className="w-[50px] h-[50px]" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-white">MAYOGI NYARIBO</h3>
            <p className="text-amber-400 font-medium">& COMPANY ADVOCATES</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} - Mayogi Nyaribo & Company Advocates. All Rights Reserved | Designed By
            <span className="text-white"> Michelle Samba</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
