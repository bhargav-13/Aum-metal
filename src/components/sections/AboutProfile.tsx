export const AboutProfile = () => {
  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full h-full px-4 sm:px-6 md:content-padding py-12">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-6 leading-tight">
                Our Profile
              </h2>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-4">
                A certified Brass manufacturer in Jamnagar One of the driving forces behind Aum metal
                is our team of dedicated professionals, equipped with years of experience and technical
                expertise.
              </p>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-4">
                Our Operations:- in 42,000 sq.ft GIDC plot which is fully equipped with advanced machinery,
                quality testing infrastructure, and efficient logistics capabilities.
              </p>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                We operate with precision, ensuring every brass product we deliver meets the specific
                requirements and high standards of our clients.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg lg:max-w-none">
                <img
                  src="/src/assets/AboutPage/Our Profile.png"
                  alt="Our Manufacturing Facility"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

