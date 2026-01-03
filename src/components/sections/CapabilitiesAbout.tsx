export const CapabilitiesAbout = () => {
  const capabilities = [
    {
      number: '01',
      title: 'TIMELY DELIVERY',
      description: 'We value our customers\' production schedules and ensure on-time delivery through planned manufacturing, consistent output, and reliable logistics.',
      isActive: true,
    },
    {
      number: '02',
      title: 'QUALITY',
      description: 'Every brass rod, ingot, and billet undergoes rigorous quality checks to meet international standards and client specifications.',
      isActive: false,
    },
    {
      number: '03',
      title: 'EXPERT TEAMWORK',
      description: 'Our skilled professionals bring years of experience in brass manufacturing, ensuring precision at every stage.',
      isActive: false,
    },
    {
      number: '04',
      title: 'CUSTOMER SATISFACTION',
      description: 'We prioritize long-term partnerships by delivering consistent quality and responsive service.',
      isActive: false,
    },
    {
      number: '05',
      title: '24/7 SUPPORT',
      description: 'Our team is always available to address your queries and provide technical assistance.',
      isActive: false,
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className={`relative rounded-2xl border-2 p-6 lg:p-8 flex flex-col justify-between min-h-[380px] lg:min-h-[450px] transition-all duration-300 hover:shadow-xl ${
                capability.isActive
                  ? 'bg-[#98012E] border-[#98012E]'
                  : 'bg-gradient-to-b from-[#FFF5F7] to-white border-[#E5C4CC] hover:border-[#98012E]'
              }`}
            >
              {/* Top Section */}
              <div>
                <h3
                  className={`font-['DM_Sans'] font-bold text-[20px] lg:text-[24px] mb-2 ${
                    capability.isActive ? 'text-white' : 'text-[#98012E]'
                  }`}
                >
                  {capability.number}
                </h3>
                <h4
                  className={`font-['DM_Sans'] font-bold text-[18px] lg:text-[20px] mb-6 leading-tight ${
                    capability.isActive ? 'text-white' : 'text-[#98012E]'
                  }`}
                >
                  {capability.title}
                </h4>
                {capability.isActive && (
                  <p className="font-['Sansation'] font-normal text-white text-[15px] lg:text-[16px] leading-relaxed">
                    {capability.description}
                  </p>
                )}
              </div>

              {/* Bottom Icon */}
              <div className="flex justify-end items-end">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    capability.isActive
                      ? 'bg-white/20'
                      : 'bg-[#98012E]/10'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      capability.isActive ? 'bg-white' : 'bg-[#98012E]'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

