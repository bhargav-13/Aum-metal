import { useState } from 'react';

export const ProductsAbout = () => {
  const [activeTab, setActiveTab] = useState('brass-rods');

  const tabs = [
    { id: 'brass-rods', label: 'Brass Rods' },
    { id: 'hexa-rods', label: 'Hexagon Rods' },
    { id: 'brass-coils', label: 'Brass Coils' },
    { id: 'custom-cut', label: 'Custom Made Cut' },
  ];

  return (
    <section className="relative w-full h-screen min-h-screen bg-gradient-to-br from-[#FFF5F7] to-[#FFEEF3] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 leading-tight">
            Precision Brass Products Designed to Power Industrial Performance
          </h2>
          <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] max-w-5xl mx-auto">
            In addition to the versatile brass rods, AUM also offers brass rod coasters — compact and durable to resist, to preserve heat for your cup
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-['Sansation'] font-medium text-[14px] sm:text-[16px] transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#98012E] text-white shadow-lg'
                  : 'bg-white text-[#98012E] hover:bg-[#98012E]/10 border border-[#E5C4CC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5C4CC] max-w-md">
              <img
                src="/src/assets/AboutPage/Brass Ingots.png"
                alt="Brass Ingots"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[28px] sm:text-[32px] md:text-[36px] mb-4">
              Brass Ingots
            </h3>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] leading-relaxed mb-4">
              AUM Metal offers high-quality brass ingots, manufactured with precision and consistency
              to meet diverse industrial needs. Our ingots are made from carefully selected raw
              materials, ensuring exceptional purity and optimal performance.
            </p>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] leading-relaxed">
              Whether for forging, extrusion, or casting, our brass ingots deliver reliable results
              across applications in automotive, electronics, plumbing, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

