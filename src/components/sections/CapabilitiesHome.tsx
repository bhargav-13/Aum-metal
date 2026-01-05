import { useState } from "react";
import precisionAlloyImg from "../../assets/Precision Alloy Control.png";
import dimensionalAccuracyImg from "../../assets/Dimensional Accuracy.png";
import consistentProductionImg from "../../assets/Consistent Production.png";
import customManufacturingImg from "../../assets/Custom Manufacturing.png";
import industrialReliabilityImg from "../../assets/Industrial Reliability.png";

export const CapabilitiesHome = () => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      title: "Precision Alloy Control",
      subtitle: "Advanced Processes for Precision Brass Production",
      description:
        "Engineered brass compositions maintained through controlled melting and casting for consistent strength and machinability.",
      image: precisionAlloyImg,
    },
    {
      title: "Dimensional Accuracy",
      subtitle: "Advanced Processes for Precision Brass Production",
      description:
        "Engineered brass compositions maintained through controlled melting and casting for consistent strength and machinability.",
      image: dimensionalAccuracyImg,
    },
    {
      title: "Consistent Production",
      subtitle: "Advanced Processes for Precision Brass Production",
      description:
        "Repeatable manufacturing processes deliver uniform quality across batches, supporting long-term and bulk requirements.",
      image: consistentProductionImg,
    },
    {
      title: "Custom Manufacturing",
      subtitle: "Advanced Processes for Precision Brass Production",
      description:
        "Repeatable manufacturing processes deliver uniform quality across batches, supporting long-term and bulk requirements.",
      image: customManufacturingImg,
    },
    {
      title: "Industrial Reliability",
      subtitle: "Advanced Processes for Precision Brass Production",
      description:
        "Flexible production capabilities to meet specific sizes, grades, and application-driven specifications.",
      image: industrialReliabilityImg,
    },
  ];

  return (
    <section
      id="capabilities-home"
      className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-white py-8 sm:py-10 md:py-12 overflow-hidden"
    >
      <div className="w-full h-full px-4 sm:px-6 md:content-padding flex flex-col">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8 shrink-0">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] mb-2 sm:mb-3 leading-none tracking-normal">
              Manufacturing Capability
            </h2>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] max-w-4xl mx-auto leading-[28px] sm:leading-[36px] tracking-[0.01em] px-4">
              Advanced Processes for Precision Brass Production
            </p>
          </div>

          {/* Tabs with Arrow Indicator */}
          <div className="mb-4 sm:mb-6 lg:mb-8 shrink-0">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {capabilities.map((capability, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 xs:px-4 sm:px-5 md:px-7 py-2.5 sm:py-2.5 md:py-3 rounded-full font-['DM_Sans'] font-medium text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] transition-all duration-300 min-h-[44px] ${
                    activeTab === index
                      ? "bg-[#98012E] text-white"
                      : "bg-white text-[#1A1A1A] border-2 border-[#E5E5E5] hover:border-[#98012E]"
                  }`}
                >
                  {capability.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area with Arrow Notch */}
          <div className="relative flex-1 min-h-0 overflow-hidden">
            {/* Arrow Indicator */}
            {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <div 
                className="transition-all duration-300"
                style={{
                  transform: `translateX(${(activeTab - 2) * 180}px)`,
                }}
              >
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0L30 16H0L15 0Z"
                    fill="#98012E"
                  />
                </svg>
              </div>
            </div> */}

            {/* Content with Border */}
            <div className="border-2 border-[#E5E5E5] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full items-start">
                {/* Left - Image */}
                <div className="w-full h-full min-h-[200px] xs:min-h-[250px] sm:min-h-[300px] lg:min-h-0 rounded-[15px] sm:rounded-[20px] overflow-hidden order-2 lg:order-1">
                  <img
                    src={capabilities[activeTab].image}
                    alt={capabilities[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right - Content */}
                <div className="order-1 lg:order-2 flex flex-col justify-start">
                  <h3 className="font-['DM_Sans'] font-black text-[#98012E] text-[22px] xs:text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] mb-2 sm:mb-3 md:mb-4 leading-tight">
                    {capabilities[activeTab].title}
                  </h3>
                  <p className="font-['Sansation'] font-normal text-[#DC6B8F] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px] mb-2 sm:mb-3 md:mb-5 leading-relaxed">
                    {capabilities[activeTab].subtitle}
                  </p>
                  <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] xs:text-[15px] sm:text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed">
                    {capabilities[activeTab].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
