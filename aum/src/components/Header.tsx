import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#8B1A1A] text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">Logo</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center">
            <li><a href="#hero-home" className="hover:opacity-80 transition-opacity">Home</a></li>
            <li><a href="#about-home" className="hover:opacity-80 transition-opacity">About Us</a></li>
            <li><a href="#product-home" className="hover:opacity-80 transition-opacity">Our Products</a></li>
            <li><a href="#industry-home" className="hover:opacity-80 transition-opacity">Industries</a></li>
            <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <li><a href="#hero-home" className="block hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about-home" className="block hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#product-home" className="block hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>Our Products</a></li>
            <li><a href="#industry-home" className="block hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>Industries</a></li>
            <li><a href="#contact" className="block hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  )
}

