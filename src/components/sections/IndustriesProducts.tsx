import { useState } from 'react';
import agricultureImg from '../../assets/AboutPage/Agriculture Equipment.png';
import automativeImg from '../../assets/AboutPage/Automative.png';
import electricalElectronicsImg from '../../assets/AboutPage/Electrical & Electronics.png';
import homeApplianceImg from '../../assets/AboutPage/Home Appliance.png';
import lockHardwareImg from '../../assets/AboutPage/Lock , Hardware.png';
import oilGasValveImg from '../../assets/AboutPage/Oil, Gas & Industrial Valve.png';
import plumbingImg from '../../assets/AboutPage/Plumbing.png';
import surgicalEquipmentImg from '../../assets/AboutPage/Surgical Equipment.png';
import watchImg from '../../assets/AboutPage/Watch.png';
import constructionImg from '../../assets/AboutPage/Construction.png';

export const IndustriesProducts = () => {
  const [activeTab] = useState('brass-road');

  const industriesByProduct: { [key: string]: string[] } = {
    'brass-road': [agricultureImg, automativeImg, electricalElectronicsImg, homeApplianceImg, lockHardwareImg, oilGasValveImg, plumbingImg, surgicalEquipmentImg, watchImg, constructionImg],
    'wire': [agricultureImg, automativeImg, electricalElectronicsImg, homeApplianceImg, lockHardwareImg, oilGasValveImg, plumbingImg, surgicalEquipmentImg, watchImg, constructionImg],
    'ingots': [automativeImg, plumbingImg],
    'section-profiles': [agricultureImg, automativeImg, electricalElectronicsImg, homeApplianceImg, lockHardwareImg, oilGasValveImg, plumbingImg, surgicalEquipmentImg, watchImg, constructionImg],
    'billet': [agricultureImg, automativeImg, electricalElectronicsImg, homeApplianceImg, lockHardwareImg],
  };

  const industries = industriesByProduct[activeTab] || industriesByProduct['brass-road'];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center mb-12 leading-tight">
          Applications Across Industries
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden border-2 border-[#E5C4CC] bg-gradient-to-br from-[#FFF5F7] to-white hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center"
            >
              <img
                src={industry}
                alt={`Industry ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


