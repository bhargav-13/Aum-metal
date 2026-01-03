export const IndustriesAbout = () => {
  const industries = [
    { name: 'Oil, Gas and Plumbing', image: '/src/assets/AboutPage/Oil, Gas & Industrial Valve.png' },
    { name: 'Automative', image: '/src/assets/AboutPage/Automative.png' },
    { name: 'Chemical & Petrochemical', image: '/src/assets/AboutPage/Construction.png' },
    { name: 'HVAC systems', image: '/src/assets/AboutPage/Home Appliance.png' },
    { name: 'Lock , Hardware', image: '/src/assets/AboutPage/Lock , Hardware.png' },
    { name: 'Oil, Gas & Industrial Valve', image: '/src/assets/AboutPage/Plumbing.png' },
    { name: 'Watch', image: '/src/assets/AboutPage/Watch.png' },
    { name: 'Surgical', image: '/src/assets/AboutPage/Surgical Equipment.png' },
    { name: 'Plumbing', image: '/src/assets/AboutPage/Electrical & Electronics.png' },
    { name: 'Agriculture', image: '/src/assets/AboutPage/Agriculture Equipment.png' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#FFF5F7] to-[#FFEEF3] flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 leading-tight">
            Where Our Brass Products Deliver Reliable Performance
          </h2>
          <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] max-w-5xl mx-auto">
            As a Brass Rod and Ingot exporter, we've worked across industries like valves, sanitary ware, plumbing, hardware, automotive, and electrical—supporting customers looking for reliable sourcing...
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 border border-[#E5C4CC]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-['Sansation'] font-medium text-[#98012E] text-[13px] sm:text-[14px] md:text-[15px]">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

