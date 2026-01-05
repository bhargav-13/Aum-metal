export const Footer = () => {
  return (
    <footer className="bg-[#98012E] pt-12 overflow-hidden relative pb-0">
      {/* Footer Content Card */}
      <div className="z-10 max-w-[95%] lg:max-w-[90%] mx-auto mb-6">
        <div className="bg-[#FFF5F7] rounded-[30px] px-6 sm:px-8 md:px-12 lg:px-16 pt-10 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 mb-8 sm:mb-10">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex-shrink-0">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="12" r="4" fill="#98012E"/>
                    <circle cx="12" cy="28" r="4" fill="#98012E"/>
                    <circle cx="28" cy="28" r="4" fill="#98012E"/>
                    <path d="M20 16L12 24M20 16L28 24" stroke="#98012E" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[18px] sm:text-[20px] lg:text-[22px] leading-tight">
                  Aum Metal Alloy
                </h3>
              </div>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[12px] sm:text-[13px] leading-relaxed">
                Delivering consistent quality, precise dimensions, and reliable brass solutions.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[15px] sm:text-[16px] lg:text-[18px] mb-3 sm:mb-4">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {["Home", "Products", "About", "Grades", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[15px] sm:text-[16px] lg:text-[18px] mb-3 sm:mb-4">
                Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {["Rods", "Ingots", "Billets", "Hexagon Rods"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/products/${item.toLowerCase().replace(" ", "-")}`}
                      className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[15px] sm:text-[16px] lg:text-[18px] mb-3 sm:mb-4">
                Social
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[#98012E] text-[15px] sm:text-[16px] lg:text-[18px] mb-3 sm:mb-4">
                Connect
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <a
                    href="tel:+919265039240"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200"
                  >
                    +91 92650 39240
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:aummetalalloy@gmail.com"
                    className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] hover:text-[#98012E] transition-colors duration-200 break-words"
                  >
                    aummetalalloy@gmail.com
                  </a>
                </li>
                <li>
                  <p className="font-['Sansation'] font-normal text-[#A05370] text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
                    Plot No:- 3640, G.I.D.C,<br />
                    Phase III, Dared,<br />
                    Jamnagar 31004
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E5C4CC] mb-6"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="font-['Sansation'] font-normal text-[#98012E] text-[11px] sm:text-[12px] lg:text-[13px]">
              © {new Date().getFullYear()} Aum Metal Alloy — All Copyright Reserved
            </p>
            <p className="font-['Sansation'] font-normal text-[#98012E] text-[11px] sm:text-[12px] lg:text-[13px]">
              Powered By - <span className="font-medium">Codelix IT Solutions Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Large Background Text - Centered and At Bottom */}
      <div className="w-full flex justify-center items-end pb-0 overflow-hidden">
        <div className="max-w-[95%] lg:max-w-[90%] w-full">
          <h2 className="font-['DM_Sans'] font-black text-[24px] xs:text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] opacity-50 text-center leading-none text-[#B8124A] translate-y-[20%]">
            AUM METAL ALLOY
          </h2>
        </div>
      </div>
    </footer>
  );
};
