import { CTAButton } from "../CTAButton";
import heroHomeLeftImg from "../../assets/HeroHomeLeft.png";

export const HeroHome = () => {
  return (
    <section 
      id="hero-home" 
      className="relative w-full flex items-center justify-center overflow-hidden h-[calc(100vh-80px)] min-h-[calc(100vh-80px)]"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Metal background pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
              linear-gradient(135deg, #4a5568 0%, #2d3748 25%, #1a202c 50%, #2d3748 75%, #4a5568 100%),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.05) 2px,
                rgba(255,255,255,0.05) 4px
              )
            `,
            backgroundSize: "100% 100%, 100% 100%, 100% 100%, 20px 20px",
            filter: "blur(1px) brightness(0.6) contrast(1.2)",
          }}
        />
        {/* Gradient overlay from dark red to white */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #98012E 0%, #FFFFFF 64.93%)",
          }}
        />
      </div>

      {/* Decorative Hero Image - Left Side */}
      <div
        className="absolute z-10 w-[150px] h-[102px] xs:w-[200px] xs:h-[135px] sm:w-[280px] sm:h-[190px] md:w-[350px] md:h-[237px] lg:w-[450px] lg:h-[305px] xl:w-[600px] xl:h-[406px] 2xl:w-[750px] 2xl:h-[508px]"
        style={{
          left: "0px",
          bottom: "0px",
          opacity: 0.85,
        }}
      >
        <img
          src={heroHomeLeftImg}
          alt=""
          className="w-full h-full object-cover"
          style={{
            maxWidth: "none",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:content-padding py-4 sm:py-6 md:py-8 lg:py-6 text-center flex flex-col items-center justify-center">
        {/* Welcome Badge */}
        <div className="inline-flex mb-3 sm:mb-3 md:mb-4 lg:mb-3 w-auto max-w-[95vw] sm:max-w-[90vw] h-auto min-h-[42px] sm:min-h-[42px] md:min-h-[45px] lg:min-h-[42px] rounded-[110px] border border-white py-2.5 sm:py-2.5 px-5 sm:px-5 md:px-7 items-center justify-center gap-2 opacity-100 bg-transparent">
          <p
            className="whitespace-normal text-center sm:whitespace-nowrap text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]"
            style={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: "0%",
              background: "linear-gradient(90deg, #FFFFFF 0%, #FCB0C7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome to, AUM Metal Alloy
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="w-full sm:w-[85%] md:w-[75%] lg:w-[75%] xl:w-[60%] font-['DM_Sans'] font-black text-[#98012E] text-center leading-none tracking-normal mx-auto px-4 text-[30px] xs:text-[32px] sm:text-[34px] md:text-[46px] lg:text-[56px] xl:text-[96px] mt-3 mb-3 sm:mt-2.5 sm:mb-2.5 md:mt-3 md:mb-3 lg:mt-3 lg:mb-3">
          Manufacturer of Brass Rods, <br />
          Ingots &amp; Billets
        </h1>

        {/* Description Paragraph */}
        <p className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] max-w-5xl px-4 sm:px-6 text-center text-[#616161] font-['Sansation'] font-normal tracking-[0.01em] leading-relaxed text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] mb-4 sm:mb-4 md:mb-5 lg:mb-5">
          Aum Metal Alloys specializes in manufacturing high-quality{" "}
          <span className="text-[#FFAE00] font-bold">
            brass rods, ingots, and billets engineered
          </span>{" "}
          for superior strength, dimensional accuracy, and consistent
          metallurgical properties—serving industrial, engineering, and export
          markets.
        </p>

        {/* CTA Button */}
        <CTAButton />
      </div>
    </section>
  );
};
