export const FooterHome = () => {
  return (
    <footer 
      id="footer-home" 
      className="w-full bg-gray-800 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AUM Metal Alloys</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading manufacturer of high-quality brass rods, ingots, and billets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#hero-home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-home" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#product-home" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#product-home" className="hover:text-white transition-colors">Brass Rods</a></li>
              <li><a href="#product-home" className="hover:text-white transition-colors">Brass Ingots</a></li>
              <li><a href="#product-home" className="hover:text-white transition-colors">Brass Billets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@aummetal.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Industrial Area, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AUM Metal Alloys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

