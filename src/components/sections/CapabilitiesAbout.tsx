import { useState } from 'react';

export const CapabilitiesAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      number: '01',
      title: 'TIMELY DELIVERY',
      description: 'We value our customers\' production schedules and ensure on-time delivery through planned manufacturing, consistent output, and reliable logistics.',
    },
    {
      number: '02',
      title: 'QUALITY',
      description: 'We source our products from reputable suppliers to ensure you receive only the best quality.',
    },
    {
      number: '03',
      title: 'EXPERT TEAMWORK',
      description: 'Our skilled technical team and production staff work together to maintain precision, consistency, and efficiency across every manufacturing stage.',
    },
    {
      number: '04',
      title: 'CUSTOMER SATISFACTION',
      description: 'We focus on understanding customer requirements and delivering brass products that meet exact specifications, quality standards, and performance expectations.',
    },
    {
      number: '05',
      title: '24/7 SUPPORT',
      description: 'Serving domestic and international clients, we provide responsive communication and support to ensure smooth coordination and timely assistance.',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {capabilities.map((capability, index) => (
            <button
              key={capability.number}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-xl sm:rounded-2xl border-2 p-4 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-xl text-left ${
                activeIndex === index
                  ? 'bg-[#98012E] border-[#98012E] lg:flex-[2]'
                  : 'bg-gradient-to-b from-[#FFF5F7] to-white border-[#E5C4CC] hover:border-[#98012E] lg:flex-[0.8]'
              } ${activeIndex === index ? 'min-h-[320px] xs:min-h-[360px] sm:min-h-[380px] lg:min-h-[450px]' : 'min-h-[240px] xs:min-h-[260px] sm:min-h-[280px] lg:min-h-[400px]'}`}
            >
              {/* Top Section */}
              <div>
                <h3
                  className={`font-['DM_Sans'] font-bold text-[16px] sm:text-[18px] lg:text-[20px] mb-1.5 sm:mb-2 ${
                    activeIndex === index ? 'text-white' : 'text-[#98012E]'
                  }`}
                >
                  {capability.number}
                </h3>
                <h4
                  className={`font-['DM_Sans'] font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-tight ${
                    activeIndex === index ? 'text-white' : 'text-[#98012E]'
                  }`}
                >
                  {capability.title}
                </h4>
              </div>

              {/* Bottom Section - Description or Icon */}
              <div className="flex justify-end items-end">
                {activeIndex === index ? (
                  <p className="font-['Sansation'] font-normal text-white text-[13px] xs:text-[14px] sm:text-[14px] lg:text-[15px] leading-relaxed w-full">
                    {capability.description}
                  </p>
                ) : (
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect 
                      x="0.292683" 
                      y="0.292683" 
                      width="23.4146" 
                      height="23.4146" 
                      rx="11.7073" 
                      stroke="#98012E" 
                      strokeWidth="0.585366"
                    />
                    <circle 
                      cx="12.1463" 
                      cy="12" 
                      r="5.85366" 
                      fill="#98012E" 
                      stroke="#98012E" 
                      strokeWidth="0.585366"
                    />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

