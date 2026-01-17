import rawMaterialSelectionIcon from "../../assets/AboutPage/Raw Material Selection.svg";
import meltingIcon from "../../assets/AboutPage/Melting.svg";
import chemicalAnalysisIcon from "../../assets/AboutPage/Chemical Analysis.svg";
import billetCastingIcon from "../../assets/AboutPage/Billet Casting.svg";
import preHeatingIcon from "../../assets/AboutPage/Pre Heating.svg";
import hotExtrusionIcon from "../../assets/AboutPage/Hot Extrusion.svg";
import straighteningIcon from "../../assets/AboutPage/Straightening.svg";
import coldDrawingIcon from "../../assets/AboutPage/Cold Drawing.svg";
import heatTreatmentIcon from "../../assets/AboutPage/Heat Treatment.svg";
import pickingIcon from "../../assets/AboutPage/Picking.svg";
import rodInspectionIcon from "../../assets/AboutPage/Rod Inspection.svg";
import weighingIcon from "../../assets/AboutPage/Weighing.svg";
import packingIcon from "../../assets/AboutPage/Packing.svg";

export const ProductionProcess = () => {
  const processes = [
    {
      step: "01",
      name: "Raw Material Selection",
      icon: rawMaterialSelectionIcon,
    },
    { step: "02", name: "Melting", icon: meltingIcon },
    { step: "03", name: "Chemical Analysis", icon: chemicalAnalysisIcon },
    { step: "04", name: "Billet Casting", icon: billetCastingIcon },
    { step: "05", name: "Pre-Heating", icon: preHeatingIcon },
    { step: "06", name: "Hot Extrusion", icon: hotExtrusionIcon },
    { step: "07", name: "Straightening", icon: straighteningIcon },
    { step: "08", name: "Cold Drawing", icon: coldDrawingIcon },
    { step: "09", name: "Heat Treatment", icon: heatTreatmentIcon },
    { step: "10", name: "Cold / Hot Wash", icon: meltingIcon },
    { step: "11", name: "Picking", icon: pickingIcon },
    { step: "12", name: "Rod Inspection", icon: rodInspectionIcon },
    { step: "13", name: "Weighing", icon: weighingIcon },
    { step: "14", name: "Packing", icon: packingIcon },
  ];

  return (
    <section className="relative min-h-0 lg:min-h-screen w-full bg-white flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 md:px-0 lg:px-0 w-full">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
            Advanced Production Process
          </h2>
          <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] max-w-3xl mx-auto px-4">
            A Structured Workflow Ensuring Consistent Quality and Performance{" "}
          </p>
        </div>

        {/* Process Grid */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-0 justify-items-center items-center w-full">
            {processes.map((process) => (
              <div
                key={process.step}
                className="flex flex-col items-center justify-center w-full h-full p-2 sm:p-3 md:p-4 lg:p-5"
              >
                {/* Step Number and Icon Container - Aligned */}
                <div className="relative w-full flex items-start justify-center mb-1 sm:mb-1.5">
                  {/* Step Number - Positioned on the left, aligned with icon */}
                  <div className="absolute left-0 font-['DM_Sans'] font-bold text-[#98012E] text-[16px] xs:text-[18px] sm:text-[20px]">
                    {process.step}
                  </div>

                {/* Icon - Centered */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img
                    src={process.icon}
                    alt={process.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

                {/* Name - Below icon, centered, black color */}
                <h3 className="font-['Sansation'] font-medium text-black text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-center w-full">
                  {process.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
