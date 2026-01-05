import { useState } from "react";
import brassRodsImg from "../../assets/product/Round.png";
import brassIngotsImg from "../../assets/product/Square.png";
import brassBilletsImg from "../../assets/product/Rectangle.png";
import customBrassSolutionsImg from "../../assets/product/Hexagon.png";
import agricultureImg from "../../assets/AboutPage/Agriculture Equipment.png";
import automativeImg from "../../assets/AboutPage/Automative.png";
import electricalElectronicsImg from "../../assets/AboutPage/Electrical & Electronics.png";
import homeApplianceImg from "../../assets/AboutPage/Home Appliance.png";
import lockHardwareImg from "../../assets/AboutPage/Lock , Hardware.png";
import oilGasValveImg from "../../assets/AboutPage/Oil, Gas & Industrial Valve.png";
import plumbingImg from "../../assets/AboutPage/Plumbing.png";
import surgicalEquipmentImg from "../../assets/AboutPage/Surgical Equipment.png";
import watchImg from "../../assets/AboutPage/Watch.png";
import constructionImg from "../../assets/AboutPage/Construction.png";

export const ProductsContent = () => {
  const [activeTab, setActiveTab] = useState("brass-road");

  const industryData = [
    { name: "Agriculture Equipment", image: agricultureImg },
    { name: "Automative", image: automativeImg },
    { name: "Electrical & Electronics", image: electricalElectronicsImg },
    { name: "Home Appliance", image: homeApplianceImg },
    { name: "Lock , Hardware", image: lockHardwareImg },
    { name: "Oil, Gas & Industrial Valve", image: oilGasValveImg },
    { name: "Plumbing", image: plumbingImg },
    { name: "Surgical Equipment", image: surgicalEquipmentImg },
    { name: "Watch", image: watchImg },
    { name: "Construction", image: constructionImg },
  ];

  const productData = {
    "brass-road": {
      title: "Brass Product Range",
      description: `Brass rods are solid metal products manufactured in round, square, hexagonal, and other cross-sectional forms, widely used for machining, fabrication, and industrial applications requiring strength, precision, and reliability.

Aum Metal Alloys offers a wide range of brass rods in various diameters and across-flats (A/F) sizes to meet diverse industrial requirements. With consistent size availability and flexible production capabilities, we support diverse industrial needs while ensuring consistent quality, smooth surface finish, and excellent machinability. Our brass rods are supplied to both domestic and international markets.

We manufacture brass rods in standard and custom lengths, with cutting services available as per customer specifications. All products are available in both Metric and Imperial dimensions, ensuring compatibility with global standards and applications.`,
      products: [
        {
          name: "Round",
          image: brassRodsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
        {
          name: "Hexagon",
          image: customBrassSolutionsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
        {
          name: "Rectangle",
          image: brassBilletsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
        {
          name: "Square",
          image: brassIngotsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
      ],
      industries: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // All industries
    },
    wire: {
      title: "Brass Product Range",
      description: `Brass wires are solid metal products manufactured with a uniform cross-section along their entire length, designed to provide consistent strength, flexibility, and surface finish for industrial and engineering applications. They are suitable for use in machining, electrical, fastening, and general manufacturing processes.

Aum Metal Alloys offers brass wires in a wide range of sizes as per customer specifications. With flexible production capability and strict quality control, we ensure consistent dimensional accuracy and metallurgical properties across all wire products. Our brass wires are supplied to both domestic and global markets with reliable lead times.

We manufacture brass wires in standard and custom lengths, with cutting options available as per customer requirements. All products are available in Metric and Imperial dimensions, ensuring compatibility with diverse industrial standards and applications.`,
      products: [
        {
          name: "Round",
          image: brassRodsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
        {
          name: "Hexagon",
          image: customBrassSolutionsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
        {
          name: "Square",
          image: brassIngotsImg,
          metricSize: "Dia :- 6mm to 60mm",
          imperialSize: "Dia:- 0.25mm (I/4) to 5mm",
        },
      ],
      industries: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // All industries
    },
    ingots: {
      title: "Brass Product Range",
      description: `Brass ingots are cast metal blocks produced by melting brass alloys and solidifying them into a convenient shape for storage, transportation, and further processing. These ingots serve as a primary raw material for remelting, casting, extrusion, and manufacturing of semi-finished or finished brass products. Manufactured with controlled alloy composition, brass ingots ensure consistent metallurgical properties and reliable performance in downstream applications.

Aum Metal Alloys produces high-quality brass ingots using controlled melting and casting processes to maintain uniform structure and chemical consistency. Our ingots are suitable for various industrial and engineering applications, and our professional team is available to assist customers with specific material and alloy requirements. We supply brass ingots to both domestic and international markets.

We offer brass ingots in standard and customized sizes as per customer specifications. All ingots are available in Metric and Imperial dimensions, ensuring flexibility and compatibility with global manufacturing standards.`,
      products: [
        {
          name: "Brass Ingots (Square)",
          image: brassIngotsImg,
          metricSize: "A/F 73 mm",
          imperialSize: "A/F 2.87 (2 7I/8) Inches",
        },
      ],
      industries: [1, 6], // Automative, Plumbing
    },
    "section-profiles": {
      title: "Brass Product Range",
      description: `Brass sections and profiles are specially shaped metal products designed in various customized and irregular cross-sections, offering flexibility in height, thickness, and geometry. These profiles are widely used in engineering and industrial applications where standard shapes are not sufficient and customized solutions are required.

Aum Metal Alloys manufactures a wide range of brass sections and profiles developed as per customer drawings, samples, and technical specifications. With extensive experience in extrusion and profile development, we support diverse applications—from standard brass profiles to fully customized, customer-exclusive sections. Our products are supplied to both domestic and global markets with reliable delivery timelines.

We produce brass sections and profiles in standard and custom lengths, with cutting options available as per customer requirements. All products are available in both Metric and Imperial dimensions, ensuring compatibility with international standards and varied industrial applications.`,
      products: [
        {
          name: "Section & Profile",
          image: brassBilletsImg,
          metricSize: "Circumscribed Dia 2.5 to 80 mm",
          imperialSize: "Circumscribed Dia 0.10 (3/32) to 3.15 (3 5/32)",
        },
      ],
      industries: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // All industries
    },
    billet: {
      title: "Brass Product Range",
      description: `A brass billet is a semi-finished metal product with a round or square cross-section, produced directly through controlled casting processes. Billets are designed for further processing through extrusion, rolling, or drawing. Due to their refined grain structure and metallurgical consistency, brass billets allow precise downstream processing and are widely used in the manufacturing of rods, bars, profiles, and other brass components.

Aum Metal Alloys offers reliable supply and fast delivery of brass billets, supported by a professional technical and sales team ready to assist with specific alloy and application requirements. We supply to both domestic and international markets with dependable logistics.

We manufacture brass billets in standard and customized lengths, with cutting options available as per customer specifications. All billets are available in Metric and Imperial sizes, ensuring flexibility across global applications.`,
      products: [
        {
          name: "Brass Ingots (Sqaure)",
          image: brassBilletsImg,
          metricSize: "Dia 100, 104, 125 and 175",
          imperialSize: "Dia 3.93 (3 15/16), 5 and 6.89 (6 7/8)",
        },
      ],
      industries: [1], // Agriculture, Automative, Electrical, Home Appliance, Lock/Hardware
    },
  };

  const currentProduct = productData[activeTab as keyof typeof productData];

  return (
    <>
      <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="flex flex-col lg:flex-col gap-4 sm:gap-6 lg:gap-8">
            {/* Left Sidebar - Tabs */}
            <div className="">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                {/* Tabs - Scrollable on mobile */}
                <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 lg:overflow-visible">
                  <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 min-w-max lg:min-w-0">
                    <button
                      onClick={() => setActiveTab("brass-road")}
                      className={`px-4 xs:px-5 sm:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-full font-['DM_Sans'] font-medium text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                        activeTab === "brass-road"
                          ? "bg-[#98012E] text-white"
                          : "bg-white text-[#98012E] border-2 border-[#E5C4CC] hover:border-[#98012E]"
                      }`}
                    >
                      Brass Road
                    </button>
                    <button
                      onClick={() => setActiveTab("wire")}
                      className={`px-4 xs:px-5 sm:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-full font-['DM_Sans'] font-medium text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                        activeTab === "wire"
                          ? "bg-[#98012E] text-white"
                          : "bg-white text-[#98012E] border-2 border-[#E5C4CC] hover:border-[#98012E]"
                      }`}
                    >
                      Wire
                    </button>
                    <button
                      onClick={() => setActiveTab("ingots")}
                      className={`px-4 xs:px-5 sm:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-full font-['DM_Sans'] font-medium text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                        activeTab === "ingots"
                          ? "bg-[#98012E] text-white"
                          : "bg-white text-[#98012E] border-2 border-[#E5C4CC] hover:border-[#98012E]"
                      }`}
                    >
                      Ingots
                    </button>
                    <button
                      onClick={() => setActiveTab("section-profiles")}
                      className={`px-4 xs:px-5 sm:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-full font-['DM_Sans'] font-medium text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                        activeTab === "section-profiles"
                          ? "bg-[#98012E] text-white"
                          : "bg-white text-[#98012E] border-2 border-[#E5C4CC] hover:border-[#98012E]"
                      }`}
                    >
                      Section & Profiles
                    </button>
                    <button
                      onClick={() => setActiveTab("billet")}
                      className={`px-4 xs:px-5 sm:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-full font-['DM_Sans'] font-medium text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                        activeTab === "billet"
                          ? "bg-[#98012E] text-white"
                          : "bg-white text-[#98012E] border-2 border-[#E5C4CC] hover:border-[#98012E]"
                      }`}
                    >
                      Billet
                    </button>
                  </div>
                </div>
                {/* Description */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <p className="font-['Sansation'] text-[#7D7D7D] text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] leading-relaxed whitespace-pre-line">
                    {currentProduct.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              {/* Description */}

              {/* Product Cards */}
              {currentProduct.products.length === 1 ? (
                // Single Product - Horizontal Layout
                <div className="border-2 border-[#E5C4CC] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#FFF5F7] to-white mb-8 sm:mb-12">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                    {/* Product Image */}
                    <div className="w-full md:w-[45%] rounded-lg sm:rounded-xl overflow-hidden bg-white p-4 sm:p-6">
                      <img
                        src={currentProduct.products[0].image}
                        alt={currentProduct.products[0].name}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                      <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[22px] xs:text-[24px] sm:text-[26px] lg:text-[28px] xl:text-[32px] mb-4 sm:mb-6 lg:mb-8">
                        {currentProduct.products[0].name}
                      </h3>
                      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                        <div>
                          <p className="font-['DM_Sans'] font-bold text-[#98012E] text-[15px] xs:text-[16px] sm:text-[16px] lg:text-[18px] mb-1.5 sm:mb-2">
                            Metric Size
                          </p>
                          <p className="font-['Sansation'] text-[#7D7D7D] text-[14px] xs:text-[15px] sm:text-[15px] lg:text-[16px]">
                            {currentProduct.products[0].metricSize}
                          </p>
                        </div>
                        <div>
                          <p className="font-['DM_Sans'] font-bold text-[#98012E] text-[15px] xs:text-[16px] sm:text-[16px] lg:text-[18px] mb-1.5 sm:mb-2">
                            Imperial Size
                          </p>
                          <p className="font-['Sansation'] text-[#7D7D7D] text-[14px] xs:text-[15px] sm:text-[15px] lg:text-[16px]">
                            {currentProduct.products[0].imperialSize}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Multiple Products - Grid Layout
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-12 w-full">
                  {currentProduct.products.map((product, index) => (
                    <div
                      key={index}
                      className="border-2 border-[#E5C4CC] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 bg-gradient-to-b from-[#FFF5F7] to-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[16px] xs:text-[17px] sm:text-[18px] mb-3 sm:mb-4 text-center">
                        {product.name}
                      </h3>
                      <div className="space-y-2.5 sm:space-y-3">
                        <div>
                          <p className="font-['DM_Sans'] font-bold text-[#98012E] text-[14px] xs:text-[14px] sm:text-[15px] mb-1">
                            Metric Size
                          </p>
                          <p className="font-['Sansation'] text-[#7D7D7D] text-[13px] xs:text-[14px] sm:text-[14px]">
                            {product.metricSize}
                          </p>
                        </div>
                        <div>
                          <p className="font-['DM_Sans'] font-bold text-[#98012E] text-[14px] xs:text-[14px] sm:text-[15px] mb-1">
                            Imperial Size
                          </p>
                          <p className="font-['Sansation'] text-[#7D7D7D] text-[13px] xs:text-[14px] sm:text-[14px]">
                            {product.imperialSize}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Across Industries Section */}
      <section className="relative w-full bg-white flex items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
            Applications Across Industries
          </h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {currentProduct.industries.map((industryIndex, index) => {
              const industry = industryData[industryIndex];
              return (
                <div key={index} className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <div className="aspect-square w-full rounded-xl overflow-hidden border-2 border-[#E5C4CC] bg-gradient-to-br from-[#FFF5F7] to-white hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex items-center justify-center">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-['Sansation'] text-[#98012E] text-[13px] xs:text-[14px] sm:text-[14px] md:text-[15px] text-center leading-tight px-1">
                    {industry.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
