import { useState } from "react";
import whyAumHomeImg from "../../assets/WhyAUMHome.jpg";

export const WhyAumHome = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const features = [
    {
      title: "Custom Sizes & Grades",
      description:
        "From standard stock to custom diameters, lengths, and alloy grades, we adapt production to meet specific engineering and application requirements.",
    },
    {
      title: "Comprehensive Brass Solutions",
      description:
        "We offer a complete range of brass products including rods, ingots, and billets manufactured with precision and quality control.",
    },
    {
      title: "Customization Capability",
      description:
        "Our flexible manufacturing process allows us to customize products according to your specific requirements and specifications.",
    },
    {
      title: "Flexible Production Volumes",
      description:
        "Whether you need small batches or large-scale production, we can accommodate your volume requirements efficiently.",
    },
    {
      title: "Strong Raw Material Sourcing",
      description:
        "We maintain reliable relationships with trusted suppliers to ensure consistent quality of raw materials for our production.",
    },
    {
      title: "Quality-Driven Manufacturing",
      description:
        "Our manufacturing processes are driven by stringent quality standards to deliver products that exceed expectations.",
    },
    {
      title: "Sustainable Manufacturing",
      description:
        "We are committed to sustainable practices in our manufacturing processes to minimize environmental impact.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="why-aum-home"
      className="min-h-0 lg:min-h-screen w-full flex items-center justify-center bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:content-padding">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] mb-3 leading-none tracking-normal text-center">
              Why Aum Metal Alloy
            </h2>
            <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] max-w-4xl mx-auto leading-[32px] sm:leading-[36px] tracking-[0.01em] text-center px-4">
              Built on Quality, Consistency, and Manufacturing Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* LEFT — Accordion */}
            <div className="space-y-2 order-2 lg:order-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-[#98012E] rounded-[20px] overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FFF5F7] transition"
                  >
                    <h3 className="font-['DM_Sans'] font-medium text-[#98012E] text-[16px] xs:text-[17px] sm:text-[18px] lg:text-[20px] pr-4">
                      {feature.title}
                    </h3>

                    {expandedIndex === index ? (
                      <span className="text-[#98012E] text-xl font-bold">
                        ×
                      </span>
                    ) : (
                      <span className="text-[#98012E] text-xl font-bold">
                        ⌄
                      </span>
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      expandedIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="px-4 pb-4">
                      <p className="font-['Sansation'] text-[#7D7D7D] text-[15px] xs:text-[16px] sm:text-[17px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — Image */}
            <div className="w-full h-full rounded-[20px] overflow-hidden order-1 lg:order-2">
              <img
                src={whyAumHomeImg}
                alt="Brass rods manufacturing"
                className="w-full h-full object-cover rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
