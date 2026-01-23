import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About Us', href: '/about', isRoute: true },
    { label: 'Our Products', href: '/products', isRoute: true },
    { label: 'Grades', href: '/grades', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ]

  return (
    <header className="bg-[#98012E] text-white w-full pt-4" itemScope itemType="https://schema.org/WPHeader">
      <nav className="content-padding pt-4" aria-label="Main navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
        <div className="bg-[#C8778F] border border-[#FCB0C7] rounded-[30px] px-8 py-2 md:px-14 md:py-3">
          <div className="flex items-center justify-between gap-5 md:gap-[50px] lg:gap-[100px] xl:gap-[150px] 2xl:gap-[200px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mr-5 md:mr-[50px] lg:mr-[100px] xl:mr-[150px] 2xl:mr-[200px]"
            aria-label="Aum Metal Alloys - Home"
            itemProp="url"
          >
            <img
              src="/Frame 194 (2).svg"
              alt="Aum Metal Alloys - Brass Manufacturer India"
              className="h-7 sm:h-7 md:h-10 lg:h-12 w-auto object-contain"
              itemProp="logo"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8" role="menubar">
            {navItems.map(item => (
              <li key={item.href} role="none">
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="transition-opacity hover:opacity-80"
                    role="menuitem"
                    itemProp="url"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                <a
                  href={item.href}
                  className="transition-opacity hover:opacity-80"
                  role="menuitem"
                  itemProp="url"
                >
                  <span itemProp="name">{item.label}</span>
                </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(v => !v)}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              aria-hidden="true"
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              aria-hidden="true"
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
              isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
            aria-hidden={isMenuOpen ? "false" : "true"}
          >
            <ul className="flex flex-col gap-4 pb-4" role="menu">
              {navItems.map(item => (
                <li key={item.href} role="none">
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block transition-opacity hover:opacity-80"
                      role="menuitem"
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {item.label}
                    </Link>
                  ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block transition-opacity hover:opacity-80"
                    role="menuitem"
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}
