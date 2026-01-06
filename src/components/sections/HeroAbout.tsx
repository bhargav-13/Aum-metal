export const HeroAbout = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-b from-[#98012E] via-[#C84A6A] to-[#FFE5EB] overflow-hidden h-[calc(100vh-80px)] min-h-[calc(100vh-80px)]">
      <div className="w-full h-full px-4 sm:px-6 md:content-padding py-16 lg:py-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Tagline/Breadcrumb */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block">
              <div className="border-2 border-white/80 rounded-full px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-3 xs:py-3.5 sm:py-4 md:py-5">
                <p className="font-['Sansation'] font-normal text-white text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] leading-relaxed text-center">
                  Precision Brass Manufacturing Built on Quality, Consistency & Trust
                </p>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[96px] leading-tight tracking-tight">
            About Aum Metal Alloy
          </h1>
        </div>
      </div>
    </section>
  );
};


