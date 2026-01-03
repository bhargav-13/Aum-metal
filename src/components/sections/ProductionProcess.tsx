export const ProductionProcess = () => {
  const processes = [
    { step: '01', name: 'Raw Material Selection', icon: '/src/assets/AboutPage/Raw Material Selection.svg' },
    { step: '02', name: 'Melting', icon: '/src/assets/AboutPage/Melting.svg' },
    { step: '03', name: 'Chemical Analysis', icon: '/src/assets/AboutPage/Chemical Analysis.svg' },
    { step: '04', name: 'Billet Casting', icon: '/src/assets/AboutPage/Billet Casting.svg' },
    { step: '05', name: 'Pre-Heating', icon: '/src/assets/AboutPage/Pre Heating.svg' },
    { step: '06', name: 'Hot Extrusion', icon: '/src/assets/AboutPage/Hot Extrusion.svg' },
    { step: '07', name: 'Straightening', icon: '/src/assets/AboutPage/Straightening.svg' },
    { step: '08', name: 'Cold Drawing', icon: '/src/assets/AboutPage/Cold Drawing.svg' },
    { step: '09', name: 'Heat Treatment', icon: '/src/assets/AboutPage/Heat Treatment.svg' },
    { step: '10', name: 'Cold / Hot Wash', icon: '/src/assets/AboutPage/Melting.svg' },
    { step: '11', name: 'Picking', icon: '/src/assets/AboutPage/Picking.svg' },
    { step: '12', name: 'Rod Inspection', icon: '/src/assets/AboutPage/Rod Inspection.svg' },
    { step: '13', name: 'Weighing', icon: '/src/assets/AboutPage/Weighing.svg' },
    { step: '14', name: 'Packing', icon: '/src/assets/AboutPage/Packing.svg' },
  ];

  return (
    <section className="relative w-full h-screen min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
            Advanced Production Process
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {processes.map((process) => (
            <div
              key={process.step}
              className="bg-gradient-to-br from-[#FFF5F7] to-[#FFEEF3] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-[#E5C4CC]"
            >
              {/* Step Number */}
              <div className="font-['DM_Sans'] font-bold text-[#98012E] text-[20px] mb-4">
                {process.step}
              </div>
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={process.icon}
                  alt={process.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Name */}
              <h3 className="font-['Sansation'] font-medium text-[#98012E] text-[15px] sm:text-[16px]">
                {process.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

