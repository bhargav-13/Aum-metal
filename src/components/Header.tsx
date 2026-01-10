import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About Us', href: '/about', isRoute: true },
    { label: 'Our Products', href: '/products', isRoute: true },
    { label: 'Industries', href: '#industry-home', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false },
  ]

  return (
    <header className="bg-[#98012E] text-white w-full pt-4">
      <nav className="content-padding pt-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center opacity-100 font-bold not-italic leading-none tracking-normal rounded text-white w-[80px] sm:w-[96px] h-[47px] md:w-24 md:h-[47px] hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            <span className="text-[24px] sm:text-[28px] md:text-[42px]">Logo</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <li key={item.href}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                ) : (
                <a
                  href={item.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {item.label}
                </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(v => !v)}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-4 pb-4">
            {navItems.map(item => (
              <li key={item.href}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                ) : (
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block transition-opacity hover:opacity-80"
                >
                  {item.label}
                </a>
                )}
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  )
}
