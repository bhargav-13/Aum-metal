export const HeroProducts = () => {
  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden h-[calc(100vh-80px)] min-h-[calc(100vh-80px)]"
    >
      {/* Simple Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #98012E 0%, #E8B4C6 50%, #FFFFFF 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:content-padding py-4 sm:py-6 md:py-8 lg:py-6 text-center flex flex-col items-center justify-center">
        {/* Welcome Badge */}
        <div className="inline-flex mb-6 sm:mb-8 w-auto max-w-[95vw] sm:max-w-[90vw] h-auto min-h-[42px] sm:min-h-[42px] md:min-h-[45px] rounded-[110px] border border-white/50 py-2.5 sm:py-2.5 px-5 sm:px-6 md:px-7 items-center justify-center gap-2 opacity-100 bg-white/10 backdrop-blur-sm">
          <p className="text-white font-['Sansation'] font-normal text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center">
            Reliable Brass Materials for Domestic and Global Markets
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="w-full sm:w-[85%] md:w-[75%] lg:w-[75%] xl:w-[70%] font-['DM_Sans'] font-black text-[#98012E] text-center leading-none tracking-normal mx-auto px-4 text-[32px] xs:text-[36px] sm:text-[42px] md:text-[56px] lg:text-[72px] xl:text-[96px]">
          Brass Product Range
        </h1>
      </div>
    </section>
  );
};

