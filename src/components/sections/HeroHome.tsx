export const HeroHome = () => {
  return (
    <section 
      id="hero-home" 
      className="relative w-full flex items-start justify-center overflow-hidden"
      style={{ height: 'calc(100dvh - 79px)', minHeight: 'calc(100vh - 79px)' }}
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
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 20px 20px',
            filter: 'blur(1px) brightness(0.6) contrast(1.2)',
          }}
        />
        {/* Gradient overlay from dark red to white */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg, #98012E 0%, #FFFFFF 64.93%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full content-padding pt-[90px] pb-4 sm:pb-6 md:pb-8 text-center flex flex-col items-center max-w-full">
        {/* Welcome Badge */}
        <div className="inline-block bg-white rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-6 shadow-lg">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">Welcome to, AUM Metal Alloy</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#8B1A1A] mb-3 sm:mb-4 md:mb-6 max-w-4xl mx-auto leading-tight px-2">
          Manufacturer of Brass Rods, Ingots & Billets
        </h1>

        {/* Description Paragraph */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
          Aum Metal Alloys specializes in manufacturing high-quality{' '}
          <span className="text-[#FF8C42] font-semibold">brass rods, Ingots, and billets engineered</span>
          {' '}for superior strength, dimensional accuracy, and consistent metallurgical properties—serving industrial, engineering, and export markets.
        </p>

        {/* CTA Button */}
        <button className="bg-white border-2 border-[#8B1A1A] text-[#8B1A1A] px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#8B1A1A] hover:text-white transition-all duration-300 shadow-lg">
          Explore more →
        </button>
      </div>
    </section>
  )
}

