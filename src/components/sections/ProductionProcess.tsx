import rawMaterialSelectionIcon from '../../assets/AboutPage/Raw Material Selection.svg';
import meltingIcon from '../../assets/AboutPage/Melting.svg';
import chemicalAnalysisIcon from '../../assets/AboutPage/Chemical Analysis.svg';
import billetCastingIcon from '../../assets/AboutPage/Billet Casting.svg';
import preHeatingIcon from '../../assets/AboutPage/Pre Heating.svg';
import hotExtrusionIcon from '../../assets/AboutPage/Hot Extrusion.svg';
import straighteningIcon from '../../assets/AboutPage/Straightening.svg';
import coldDrawingIcon from '../../assets/AboutPage/Cold Drawing.svg';
import heatTreatmentIcon from '../../assets/AboutPage/Heat Treatment.svg';
import pickingIcon from '../../assets/AboutPage/Picking.svg';
import rodInspectionIcon from '../../assets/AboutPage/Rod Inspection.svg';
import weighingIcon from '../../assets/AboutPage/Weighing.svg';
import packingIcon from '../../assets/AboutPage/Packing.svg';

export const ProductionProcess = () => {
  const processes = [
    { step: '01', name: 'Raw Material Selection', icon: rawMaterialSelectionIcon },
    { step: '02', name: 'Melting', icon: meltingIcon },
    { step: '03', name: 'Chemical Analysis', icon: chemicalAnalysisIcon },
    { step: '04', name: 'Billet Casting', icon: billetCastingIcon },
    { step: '05', name: 'Pre-Heating', icon: preHeatingIcon },
    { step: '06', name: 'Hot Extrusion', icon: hotExtrusionIcon },
    { step: '07', name: 'Straightening', icon: straighteningIcon },
    { step: '08', name: 'Cold Drawing', icon: coldDrawingIcon },
    { step: '09', name: 'Heat Treatment', icon: heatTreatmentIcon },
    { step: '10', name: 'Cold / Hot Wash', icon: meltingIcon },
    { step: '11', name: 'Picking', icon: pickingIcon },
    { step: '12', name: 'Rod Inspection', icon: rodInspectionIcon },
    { step: '13', name: 'Weighing', icon: weighingIcon },
    { step: '14', name: 'Packing', icon: packingIcon },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
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
              <div className="font-['DM_Sans'] font-bold text-[#98012E] text-[18px] xs:text-[20px] mb-4">
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
              <h3 className="font-['Sansation'] font-medium text-[#98012E] text-[14px] xs:text-[15px] sm:text-[16px]">
                {process.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

