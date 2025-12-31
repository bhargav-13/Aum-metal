export const HeroHome = () => {
  return (
    <section
      id="hero-home"
      className="relative w-full flex items-start justify-center overflow-hidden h-[calc(100dvh-79px)] min-h-[calc(100vh-79px)]"
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
        className="absolute hidden md:block z-10"
        style={{
          left: '-20px',
          top: '120px',
          opacity: 1
        }}
      >
        <img 
          src="/src/assets/HeroHomeLeft.png" 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            maxWidth: 'none',
            aspectRatio: '937 / 634'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full content-padding pt-[90px] pb-4 sm:pb-6 md:pb-8 text-center flex flex-col items-center">
        {/* Welcome Badge */}
        <div className="inline-flex mb-3 sm:mb-4 md:mb-6 w-[416px] max-w-[90vw] h-[49px] rounded-[110px] border border-white py-2.5 px-8 items-center justify-center gap-2.5 opacity-100 bg-transparent">
          <p
            className="whitespace-nowrap text-[26px]"
            style={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "100%",
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
        <h1 className="w-[60%] font-['DM_Sans'] font-black text-[#98012E] text-center leading-none tracking-normal mx-auto px-4 text-[28px] sm:text-[40px] md:text-[60px] lg:text-[96px] mt-5 mb-5">
          Manufacturer of Brass Rods, <br />
          Ingots &amp; Billets
        </h1>

        {/* Description Paragraph */}
        <p className=" px-4 text-center text-[#616161] font-['Sansation'] font-normal tracking-[0.01em] leading-[1.6] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
          Aum Metal Alloys specializes in manufacturing high-quality{" "}
          <span className="text-[#FFAE00] font-bold">
            brass rods, ingots, and billets engineered
          </span>{" "}
          for superior strength, dimensional accuracy, and consistent
          metallurgical properties—serving industrial, engineering, and export
          markets.
        </p>

        {/* CTA Button */}
        <button 
          className="mt-14 border border-[#98012E] text-[#98012E] flex items-center justify-center hover:bg-[#98012E] hover:text-white transition-all duration-300"
          style={{
            width: '201px',
            height: '48px',
            borderRadius: '60px',
            padding: '8px 24px',
            gap: '10px',
            fontFamily: 'Sansation, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '1%',
            opacity: 1
          }}
        >
          <span>Explore more</span>
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12.2412 5.62579H0.625C0.45924 5.62579 0.300269 5.69164 0.183058 5.80885C0.0658481 5.92606 0 6.08503 0 6.25079C0 6.41655 0.0658481 6.57552 0.183058 6.69273C0.300269 6.80994 0.45924 6.87579 0.625 6.87579H12.2412L7.6825 11.4333C7.56514 11.5506 7.49921 11.7098 7.49921 11.8758C7.49921 12.0418 7.56514 12.2009 7.6825 12.3183C7.79986 12.4356 7.95903 12.5016 8.125 12.5016C8.29097 12.5016 8.45014 12.4356 8.5675 12.3183L14.1925 6.69329C14.2507 6.63523 14.2969 6.56626 14.3284 6.49033C14.3599 6.4144 14.3761 6.333 14.3761 6.25079C14.3761 6.16858 14.3599 6.08718 14.3284 6.01125C14.2969 5.93532 14.2507 5.86635 14.1925 5.80829L8.5675 0.183289C8.45014 0.065931 8.29097 0 8.125 0C7.95903 0 7.79986 0.065931 7.6825 0.183289C7.56514 0.300648 7.49921 0.45982 7.49921 0.625789C7.49921 0.791759 7.56514 0.950931 7.6825 1.06829L12.2412 5.62579Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
};
