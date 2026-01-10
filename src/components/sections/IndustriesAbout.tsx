import oilGasValveImg from "../../assets/AboutPage/Oil, Gas & Industrial Valve.png";
import automativeImg from "../../assets/AboutPage/Automative.png";
import constructionImg from "../../assets/AboutPage/Construction.png";
import homeApplianceImg from "../../assets/AboutPage/Home Appliance.png";
import lockHardwareImg from "../../assets/AboutPage/Lock , Hardware.png";
import plumbingImg from "../../assets/AboutPage/Plumbing.png";
import watchImg from "../../assets/AboutPage/Watch.png";
import surgicalEquipmentImg from "../../assets/AboutPage/Surgical Equipment.png";
import electricalElectronicsImg from "../../assets/AboutPage/Electrical & Electronics.png";
import agricultureEquipmentImg from "../../assets/AboutPage/Agriculture Equipment.png";

export const IndustriesAbout = () => {
  const industries = [
    { name: "Agriculture Equipment", image: agricultureEquipmentImg },
    { name: "Automotive", image: automativeImg },
    { name: "Electrical & Electronics", image: electricalElectronicsImg },
    { name: "Home Appliance", image: homeApplianceImg },
    { name: "Lock, Hardware", image: lockHardwareImg },
    { name: "Oil, Gas & Industrial Valve", image: oilGasValveImg },
    { name: "Plumbing", image: plumbingImg },
    { name: "Watch", image: watchImg },
    { name: "Surgical Equipment", image: surgicalEquipmentImg },
    { name: "Construction", image: constructionImg },
  ];

  return (
    <section className="relative min-h-0 lg:min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 leading-tight">
            Where Our Brass Products Deliver Reliable Performance
          </h2>
          <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] max-w-5xl mx-auto px-4">
            As a Brass Rod and Ingot exporter, we've worked across industries
            like valves, sanitary ware, plumbing, hardware, automotive, and
            electrical—supporting customers looking for reliable sourcing...
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Image with border only */}
              <div className="w-full aspect-square   mb-3 sm:mb-4 flex items-center justify-center bg-white hover:shadow-lg transition-shadow duration-300">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Text label outside border */}
              <p className="font-['Sansation'] font-medium  text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px]">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
