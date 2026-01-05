import { useState } from 'react';
import brassIngotsImg from '../../assets/AboutPage/Brass Ingots.png';
import brassRodsImg from '../../assets/AboutPage/Brass Rods.png';
import brassBilletsImg from '../../assets/AboutPage/Brass Billets.png';
import customSolutionsImg from '../../assets/AboutPage/Custom Brass Solutions.png';

export const ProductsAbout = () => {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: 'brass-ingots',
      title: 'Brass Ingots',
      label: 'Brass Ingots',
      subtitle: 'Advanced Processes for Precision Brass Production',
      description:
        'Precision-cast brass ingots manufactured with controlled alloy composition, uniform structure, and consistent metallurgical properties. Ideal for remelting, casting, extrusion, and a wide range of industrial and manufacturing applications.',
      image: brassIngotsImg,
    },
    {
      id: 'brass-rods',
      title: 'Brass Rods',
      label: 'Brass Rods',
      subtitle: 'Advanced Processes for Precision Brass Production',
      description:
        'Our brass rods are manufactured with controlled alloy composition and precise dimensional accuracy. Designed for excellent machinability and strength, they are ideal for automotive, electrical, plumbing, and engineering applications.',
      image: brassRodsImg,
    },
    {
      id: 'brass-billets',
      title: 'Brass Billets',
      label: 'Brass Billets',
      subtitle: 'Advanced Processes for Precision Brass Production',
      description:
        'High-quality brass billets engineered for extrusion and forging processes. Our billets are manufactured with consistent composition and quality, ensuring optimal performance in industrial applications.',
      image: brassBilletsImg,
    },
    {
      id: 'custom-solutions',
      title: 'Custom Brass Solutions',
      label: 'Custom Brass Solutions',
      subtitle: 'Advanced Processes for Precision Brass Production',
      description:
        'Tailored brass products designed to meet your specific requirements. From custom alloy compositions to precise dimensions, we deliver solutions that match your unique industrial needs.',
      image: customSolutionsImg,
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:content-padding flex flex-col">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 shrink-0">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] mb-3 leading-tight px-4">
              Precision Brass Products Designed to Power Industrial Performance
            </h2>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] max-w-5xl mx-auto leading-relaxed px-4">
              We manufacture high-quality brass rods, bars, and billets engineered to deliver consistent strength, dimensional accuracy, and reliable performance across industrial and export applications.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-6 sm:mb-8 shrink-0">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 xs:px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-['DM_Sans'] font-medium text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] transition-all duration-300 min-h-[44px] ${
                    activeTab === index
                      ? 'bg-[#98012E] text-white shadow-lg'
                      : 'bg-white text-[#98012E] border-2 border-[#E5C4CC] hover:border-[#98012E]'
                  }`}
                >
                  {product.label}
                </button>
              ))}
            </div>
          </div>
          <div className="relative flex-1 min-h-0 overflow-hidden max-h-[550px]">
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
            <div className="border-2 border-[#E5E5E5] rounded-[30px] p-4 sm:p-6 md:p-8 lg:p-10 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full items-center">
                {/* Left - Image */}
                <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden order-2 lg:order-1 border border-[#98012E] flex items-center justify-center">
                  <img
                    src={products[activeTab].image}
                    alt={products[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right - Content */}
                <div className="order-1 lg:order-2 flex flex-col justify-start">
                  <h3 className="font-['DM_Sans'] font-black text-[#98012E] text-[24px] xs:text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] mb-3 sm:mb-4 leading-tight">
                    {products[activeTab].title}
                  </h3>
                  <p className="font-['Sansation'] font-normal text-[#DC6B8F] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px] mb-3 sm:mb-5 leading-relaxed">
                    {products[activeTab].subtitle}
                  </p>
                  <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[14px] xs:text-[15px] sm:text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed">
                    {products[activeTab].description}
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


