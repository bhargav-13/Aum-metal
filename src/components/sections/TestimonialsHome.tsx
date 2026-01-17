import { CTAButton } from "../CTAButton";
import trustRightHomeImgWeb from "../../assets/TrustRightHomeWeb.png";
import trustRightHomeImgMobile from "../../assets/TrustRightHomeMobile.png";
import trustedHomeImg from "../../assets/trustedHome.png";
import vectorFooterImg from "../../assets/Vector footer.svg";
import { useEffect, useState } from "react";

export const TestimonialsHome = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ankit Mungra",
      role: "Procurement Head",
      company: "Parmeshwari Brass",
      quote: "Aum Metal Alloys consistently delivers high-quality brass rods and billets with precise dimensions. Their reliability and process discipline make them a trusted supplier for our production requirements.",
    },
    {
      name: "Rajesh Kumar",
      role: "Production Manager",
      company: "Precision Manufacturing Co.",
      quote: "Excellent quality and on-time delivery. Aum Metal Alloys has been our preferred supplier for brass materials. Their products meet our exact specifications every time.",
    },
    {
      name: "Priya Sharma",
      role: "Quality Assurance Lead",
      company: "Industrial Solutions Ltd.",
      quote: "The consistency in quality and dimensional accuracy of their brass rods is outstanding. We've been working with Aum Metal Alloys for years and they never disappoint.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Set initial value immediately
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality - change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Section 1: Trusted Partner */}
      <section
        id="trust-home"
        className="relative h-[75vh] lg:h-[90vh]   w-full flex  items-start lg:items-center justify-center bg-white overflow-hidden"
      >
        {/* Image - Attached to right side 100%, overlapping text on mobile */}
        <div className="absolute right-0 bottom-0 flex items-end justify-end z-0 opacity-80 lg:opacity-100">
          <div className="relative">
            <img
              src={isMobile ? trustRightHomeImgMobile : trustRightHomeImgWeb}
              alt="Precision brass rods"
              className="w-auto h-[300px] xs:h-[340px] sm:h-[400px] md:h-[420px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] object-contain translate-x-[10%] md:translate-x-0"
            />
          </div>
        </div>

        <div className="w-full h-full px-4 sm:px-6 md:content-padding py-8 lg:py-0 flex items-start lg:items-center">
          <div className="max-w-7xl mx-auto w-full relative">
            {/* Left Side - Content */}
            <div className="relative z-10 flex flex-col justify-center lg:pr-12 text-left lg:max-w-2xl w-full lg:w-auto">
              {/* Main Heading */}
              <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                Your Trusted Partner for Precision Brass Rods, Ingots & Billets
              </h2>

              {/* Description */}
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] xs:text-[17px] sm:text-[18px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed mb-5 sm:mb-6 md:mb-7 lg:mb-8 relative z-20 pr-8 sm:pr-12 md:pr-0">
                Looking for reliable brass materials with consistent quality and
                precise specifications? Aum Metal Alloys delivers
                high-performance brass rods, bars, and billets tailored to your
                industrial and export requirements.
              </p>

              {/* CTA Button */}
              <div className="relative z-20">
                <CTAButton text="Contact now" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Client Testimonials */}
      <section
        id="testimonials-home"
        className="h-[85vh] lg:h-full w-full flex items-center justify-center bg-[#FAFAFA] py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="w-full px-4 sm:px-6 md:content-padding flex flex-col items-center justify-between h-full">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
              <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] mb-3 sm:mb-4 md:mb-5 leading-none tracking-normal">
                Trusted by Our Clients
              </h2>
              <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] max-w-4xl mx-auto leading-relaxed tracking-normal px-4">
                Hear from partners who trust our precision and manufacturing
                reliability.
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="hidden lg:block relative max-w-6xl mx-auto mb-20">
              <div className="flex flex-row transition-all duration-500">
                <div className="lg:w-[40%]">
                  <div className="bg-gradient-to-b from-[#FFE5EB] to-[#FFF5F7] border border-[#E5C4CC] flex flex-col justify-between min-h-[450px] rounded-l-[20px]">
                    <div className="p-10">
                      <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[30px] leading-tight mb-2 transition-all duration-500">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] transition-all duration-500">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>

                    <div className="bg-[#FFB8CC] rounded-bl-[15px] p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#98012E] text-[20px]">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="font-['Sansation'] font-normal text-[#98012E] text-[16px] transition-all duration-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-0 lg:w-[64.8%]">
                  <img src={trustedHomeImg} alt="" className="w-auto h-auto" />
                  <div className="bg-[#FFF4F8] border border-[#E5C4CC] p-12 pl-14 min-h-[450px] flex flex-col justify-center rounded-r-[20px] relative overflow-hidden">
                    {/* Background Image - Centered behind text */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                      <img 
                        src={vectorFooterImg} 
                        alt="" 
                        className="h-full w-auto object-contain opacity-100"
                      />
                    </div>
                    
                    {/* Content with z-index to appear above background */}
                    <div className="relative z-10">
                      <div className="mb-8">
                        <div className="w-14 h-14 bg-[#98012E] rounded-full flex items-center justify-center">
                          <span className="text-white text-[28px] font-serif">
                            "
                          </span>
                        </div>
                      </div>
                      <blockquote className="font-['Sansation'] font-normal text-[#98012E] text-[22px] xl:text-[24px] leading-relaxed transition-all duration-500">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden relative max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <div className="flex flex-row transition-all duration-500">
                <div className="w-[90%]">
                  <div className="bg-gradient-to-b from-[#FFE5EB] to-[#FFF5F7] border border-[#E5C4CC] flex flex-col justify-between h-auto min-h-[120px] xs:h-[135.92px]">
                    <div className="p-3 xs:p-4 sm:p-6">
                      <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[16px] xs:text-[18px] sm:text-[20px] leading-tight mb-1 sm:mb-2 transition-all duration-500">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] xs:text-[15px] sm:text-[15px] transition-all duration-500">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-[69.8%] flex flex-row items-start">
                  <img src={trustedHomeImg} alt="" className="w-auto h-auto" />
                  <div className="bg-[#FFF4F8] border border-[#E5C4CC] min-h-[320px] xs:min-h-[350px] sm:min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                    {/* Background Image - Centered behind text */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                      <img 
                        src={vectorFooterImg} 
                        alt="" 
                        className="h-full w-auto object-contain opacity-100"
                      />
                    </div>
                    
                    {/* Content with z-index to appear above background */}
                    <div className="relative z-10 mb-3 xs:mb-4 sm:mb-6 p-3 xs:p-4 sm:p-6">
                      <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-[#98012E] rounded-full flex items-center justify-center">
                        <span className="text-white text-[14px] xs:text-[16px] sm:text-[20px] font-serif">
                          "
                        </span>
                      </div>
                    </div>
                    <blockquote className="relative z-10 font-['Sansation'] font-normal text-[#98012E] text-[14px] xs:text-[15px] sm:text-[15px] leading-relaxed p-3 xs:p-4 sm:p-6 transition-all duration-500">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="relative z-10 bg-[#FFB8CC] p-2.5 xs:p-3 sm:p-4">
                      <div className="flex gap-0.5 sm:gap-1 mb-1.5 xs:mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-[#98012E] text-[14px] xs:text-[15px] sm:text-[16px]"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="font-['Sansation'] font-normal text-[#98012E] text-[14px] xs:text-[15px] sm:text-[15px] transition-all duration-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-[#98012E]"
                    : "bg-[#E5C4CC] hover:bg-[#98012E]"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
