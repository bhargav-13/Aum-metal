import aboutHomeIcon from '../../assets/AboutHome.svg';

export const AboutHome = () => {
  const features = [
    {
      title: "Dimensional Accuracy",
      description:
        "Precision-controlled casting and finishing processes ensure tight tolerances, smooth surfaces, and consistent cross-sections across every rod, bar, and billet.",
      highlighted: true,
    },
    {
      title: "Metallurgical Consistency",
      description:
        "Optimized alloy composition and controlled cooling deliver uniform grain structure, strength, and performance throughout the material",
      highlighted: false,
    },
    {
      title: "Custom Sizes & Grades",
      description:
        "From standard stock to custom diameters, lengths, and alloy grades, we adapt production to meet specific engineering and application requirements.",
      highlighted: false,
    },
    {
      title: "Reliable Bulk Supply",
      description:
        "Consistent production capacity, and streamlined logistics enable us to fulfill bulk orders with dependable lead times and uniform quality across every batch",
      highlighted: false,
    },
  ];

  return (
    <section
      id="about-home"
      className="min-h-0 lg:min-h-screen w-full flex items-center justify-center bg-white pt-6 sm:pt-12 md:pt-16 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24"
    >
      <div className="w-full px-4 sm:px-6 md:content-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-1">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] mb-2 sm:mb-3 md:mb-4 leading-none tracking-normal text-center">
              About Aum Metal Alloy
            </h2>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] max-w-3xl mx-auto leading-[28px] sm:leading-[32px] tracking-[0.01em] text-center px-4">
              How we transform raw brass into precision-engineered rods, bars &
              billets
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-14">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  relative rounded-[20px] p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col items-start justify-between overflow-hidden
                  transition-all duration-300 hover:shadow-xl min-h-[280px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[400px]
                  ${
                    feature.highlighted
                      ? "bg-[#98012E] text-white border-2 border-[#98012E]"
                      : "bg-[#FFF5F7] text-[#98012E] border-2 border-[#FFE5EB] hover:border-[#98012E]"
                  }
                `}
              >
                {/* Background Icon - Absolutely Positioned */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
                    <img
                      src={aboutHomeIcon}
                      alt=""
                      className="w-full h-full object-contain"
                      style={{
                        filter: feature.highlighted
                          ? "brightness(0) invert(1) opacity(2)"
                          : "opacity(1)",
                      }}
                    />
                  </div>
                </div>

                {/* Content - Positioned above the icon */}
                <div className="relative z-10 flex flex-col h-full justify-between w-full gap-2">
                  {/* Title */}
                  <h3
                    className={`font-['DM_Sans'] font-medium text-[22px] xs:text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-tight tracking-normal ${
                      feature.highlighted ? "text-white" : "text-[#98012E]"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-['Sansation'] font-normal text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[32px] tracking-[0.01em] ${
                      feature.highlighted ? "text-white" : "text-[#616161]"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
