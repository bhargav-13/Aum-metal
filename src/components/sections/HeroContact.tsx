export const HeroContact = () => {
  return (
    <section className="relative w-full flex items-center justify-center flex-col overflow-hidden">
      <div
        className="w-full h-full px-4 sm:px-6 md:content-padding py-16 lg:py-20 flex items-center"
        style={{
          background: "linear-gradient(180deg, #98012E 0%, #FFFFFF 64.93%)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Tagline/Breadcrumb */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex w-auto max-w-[95vw] sm:max-w-[90vw] h-auto min-h-[42px] sm:min-h-[42px] md:min-h-[45px] rounded-[110px] border border-white/50 py-2.5 sm:py-2.5 px-5 sm:px-6 md:px-7 items-center justify-center gap-2 opacity-100 bg-white/10 backdrop-blur-sm">
              <p className="text-white font-['Sansation'] font-normal text-[15px] xs:text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center">
                Reliable Brass Manufacturing Starts with a Conversation
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[96px] leading-tight tracking-tight">
          Let's Connect for Precision Brass Solutions
        </h1>
        </div>
      </div>
    </section>
  );
};
