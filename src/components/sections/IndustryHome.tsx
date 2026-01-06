import electricalElectronicsIcon from '../../assets/Electrical & Electronics.svg';
import autoMobileIcon from '../../assets/Auto mobile.svg';
import plumbingIcon from '../../assets/Plumbing.svg';
import sanitarywareIcon from '../../assets/Sanitaryware.svg';
import constructionIcon from '../../assets/Construction.svg';
import oemManufacturingIcon from '../../assets/OEM Manufacturing.svg';
import autoComponentsIcon from '../../assets/Auto Components.svg';
import infrastructureIcon from '../../assets/Infrastructure.svg';
import hardwareManufacturingIcon from '../../assets/Hardware Manufacturing.svg';
import globalTradeIndustriesIcon from '../../assets/Global Trade Industries.svg';
import energyEquipmentIcon from '../../assets/Energy Equipment.svg';
import renewableComponentsIcon from '../../assets/Renewable Components.svg';
import industryImageBg from '../../assets/Industry Image.svg';

export const IndustryHome = () => {
  const industries = [
    {
      name: "Electrical & Electronics",
      icon: electricalElectronicsIcon,
    },
    { name: "Auto mobile", icon: autoMobileIcon },
    { name: "Plumbing", icon: plumbingIcon },
    { name: "Sanitaryware", icon: sanitarywareIcon },
    { name: "Construction", icon: constructionIcon },
    { name: "OEM Manufacturing", icon: oemManufacturingIcon },
    { name: "Auto Components", icon: autoComponentsIcon },
    { name: "Infrastructure", icon: infrastructureIcon },
    {
      name: "Hardware Manufacturing",
      icon: hardwareManufacturingIcon,
    },
    {
      name: "Global Trade Industries",
      icon: globalTradeIndustriesIcon,
    },
    { name: "Energy Equipment", icon: energyEquipmentIcon },
    {
      name: "Renewable Components",
      icon: renewableComponentsIcon,
    },
  ];

  return (
    <section
      id="industry-home"
      className="relative min-h-0 lg:min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 top-16 lg:top-0 right-10 lg:right-0">
        <img
          src={industryImageBg}
          alt=""
          className="w-full sm:w-[50vw] h-[40vh] xs:h-[50vh] sm:h-[80vh] md:h-full object-cover object-center sm:object-left opacity-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:content-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] mb-3 sm:mb-4 leading-none tracking-normal">
              Industry we serve
            </h2>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] max-w-4xl mx-auto leading-[26px] sm:leading-[32px] tracking-[0.01em] px-4">
              Supplying Precision Brass Solutions Across Diverse Sectors
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-6 justify-items-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[20px] border border-[#98012E] w-full max-w-full xs:max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] h-auto min-h-[120px] xs:h-[130px] sm:h-[140px] lg:h-[146px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl px-4 py-6 xs:px-5 xs:py-7 sm:px-[21px] sm:py-[31px]"
              >
                {/* Icon */}
                <div className="mb-2 xs:mb-2.5 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Industry Name */}
                <h3 className="font-['DM_Sans'] font-medium text-[#1A1A1A] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-tight">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
