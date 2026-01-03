export const ClientTestimonials = () => {
  return (
    <section className="relative w-full h-screen min-h-screen bg-gradient-to-br from-[#FFF5F7] to-[#FFEEF3] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 leading-tight">
            Trusted by Our Clients
          </h2>
          <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl mx-auto">
            Hear from partners who trust our precision and manufacturing reliability.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-[#E5C4CC] p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left - Client Info */}
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="bg-gradient-to-br from-[#FFE5EB] to-[#FFF5F7] rounded-xl p-6 mb-4">
                  <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[24px] mb-2">
                    Ankit Mungra
                  </h3>
                  <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px]">
                    Procurement Head
                  </p>
                </div>
                <div className="bg-[#FFB8CC] rounded-xl p-4 w-full">
                  <div className="flex justify-center lg:justify-start gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#98012E] text-[20px]">★</span>
                    ))}
                  </div>
                  <p className="font-['Sansation'] font-normal text-[#98012E] text-[14px]">
                    Parmeshwari Brass
                  </p>
                </div>
              </div>

              {/* Right - Testimonial */}
              <div className="lg:w-2/3 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#98012E] rounded-full flex items-center justify-center">
                    <span className="text-white text-[24px] font-serif">"</span>
                  </div>
                </div>
                <blockquote className="font-['Sansation'] font-normal text-[#98012E] text-[18px] lg:text-[20px] leading-relaxed">
                  "Aum Metal Alloys consistently delivers high-quality brass rods and billets with precise
                  dimensions. Their reliability and process discipline make them a trusted supplier for our
                  production requirements."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          <button className="w-3 h-3 rounded-full bg-[#98012E]" aria-label="Testimonial 1"></button>
          <button className="w-3 h-3 rounded-full bg-[#E5C4CC]" aria-label="Testimonial 2"></button>
          <button className="w-3 h-3 rounded-full bg-[#E5C4CC]" aria-label="Testimonial 3"></button>
        </div>
      </div>
    </section>
  );
};

