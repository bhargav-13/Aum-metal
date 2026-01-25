import { Link } from 'react-router-dom';
import vectorFooterImg from "../assets/Vector footer.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#98012E] pt-12 overflow-hidden relative pb-0" itemScope itemType="https://schema.org/WPFooter">
      {/* Footer Content Card */}
      <div className="z-10 max-w-[95%] lg:max-w-[90%] mx-auto mb-6">
        <div className="bg-[#FFF5F7] rounded-[30px] px-6 sm:px-8 md:px-12 lg:px-16 pt-10 pb-8 relative overflow-hidden">
          {/* Background Image - Centered behind text */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <img
              src={vectorFooterImg}
              alt=""
              aria-hidden="true"
              className="h-full w-auto object-contain opacity-100"
            />
          </div>

          {/* Main Footer Content */}
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 mb-8 sm:mb-10">
            {/* Left Side - Brand Section with Local Business Schema */}
            <div className="w-full text-center lg:text-left" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Aum Metal Alloys" />
              <meta itemProp="url" content="https://aummetalalloys.com" />
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-3">
                <img
                  src="/Frame 194 (3).svg"
                  alt="Aum Metal Alloys - Brass Manufacturer Logo"
                  itemProp="logo"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] sm:text-[14px] lg:text-[13px] leading-relaxed max-w-md" itemProp="description">
                Delivering consistent quality, precise dimensions,<br className="hidden sm:block" /> and reliable brass solutions.
              </p>
            </div>

            {/* Right Side - Four Columns Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-3">

            {/* Company Links - Navigation */}
            <nav aria-label="Company navigation">
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[16px] sm:text-[17px] lg:text-[18px] mb-3 sm:mb-4">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Our Products', href: '/products' },
                  { label: 'Grades', href: '/grades' },
                  { label: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solutions Links - Products Navigation */}
            <nav aria-label="Products navigation">
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[16px] sm:text-[17px] lg:text-[18px] mb-3 sm:mb-4">
                Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  { label: 'Brass Rods', product: 'brass-road' },
                  { label: 'Brass Bars', product: 'ingots' },
                  { label: 'Brass Billets', product: 'billet' },
                  { label: 'Section & Profiles', product: 'section-profiles' },
                  { label: 'Brass Hollow', product: 'hollow' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={`/products?product=${item.product}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[16px] sm:text-[17px] lg:text-[18px] mb-3 sm:mb-4">
                Social
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <a
                    href="https://www.instagram.com/aummetalalloys"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Aum Metal Alloys on Instagram"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/aum-metal-alloys"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Aum Metal Alloys on LinkedIn"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section - Contact Info with Schema */}
            <address className="not-italic" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Aum Metal Alloys" />
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[16px] sm:text-[17px] lg:text-[18px] mb-2 sm:mb-3">
                Connect
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <a
                    href="tel:+919265039240"
                    itemProp="telephone"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                  >
                    +91 92650 39240
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:aummetalalloy@gmail.com"
                    itemProp="email"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200 break-all"
                  >
                    aummetalalloy@gmail.com
                  </a>
                </li>
                <li itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="font-['Sansation'] font-normal text-[#A05370] text-[14px] sm:text-[14px] lg:text-[14px] leading-relaxed">
                    <span itemProp="streetAddress">Plot No:- 3640, G.I.D.C,<br />Phase III, Dared</span>,<br />
                    <span itemProp="addressLocality">Jamnagar</span> <span itemProp="postalCode">361004</span>
                    <meta itemProp="addressRegion" content="Gujarat" />
                    <meta itemProp="addressCountry" content="India" />
                  </p>
                </li>
              </ul>
            </address>
            </div>
          </div>

          {/* Divider */}
          <div className="relative z-10 border-t border-[#E5C4CC] mb-6"></div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="font-['Sansation'] font-normal text-[#98012E] text-[13px] sm:text-[13px] lg:text-[13px]">
              © {new Date().getFullYear()} Aum Metal Alloys — All Rights Reserved
            </p>
            <p className="font-['Sansation'] font-normal text-[#98012E] text-[13px] sm:text-[13px] lg:text-[13px]">
              Powered By - <a href="https://www.codelixitsolutions.com/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline transition-all duration-200">Codelix IT Solutions Pvt. Ltd.</a>
            </p>
          </div>
        </div>
      </div>

      {/* Large Background Text - Centered and At Bottom */}
      <div className="w-full flex justify-center items-end pb-0 overflow-hidden" aria-hidden="true">
        <div className="max-w-[95%] lg:max-w-[90%] w-full">
          <p className="font-['DM_Sans'] font-black text-[20px] xs:text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[80px] 2xl:text-[100px] opacity-50 text-center leading-none text-[#B8124A] translate-y-[20%] tracking-[3px] xs:tracking-[4px] sm:tracking-[6px] md:tracking-[8px] lg:tracking-[12px] xl:tracking-[16px] 2xl:tracking-[18px] whitespace-nowrap overflow-hidden">
              AUM METAL ALLOYS
          </p>
      </div>
      </div>
    </footer>
  );
};
