import { CTAButton } from "../CTAButton";
import productHomeRightImg from "../../assets/ProductHomeRight.png";

export const ProductHome = () => {
  return (
    <section
      id="product-home"
      className="relative min-h-0 lg:min-h-screen w-full block items-center justify-center overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 md:content-padding">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-[3fr_2fr] flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 lg:pr-8 text-center lg:text-left items-center lg:items-start">
              {/* Heading */}
              <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[36px] xs:text-[40px] sm:text-[44px] md:text-[48px] lg:text-[56px] xl:text-[64px] mb-10 sm:mb-14 leading-tight">
                Our Product Range
              </h2>

              {/* First Paragraph */}
              <p className="font-['Sansation'] font-normal text-[#616161] text-[16px] xs:text-[17px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-relaxed mb-4 sm:mb-5 md:mb-6">
                Aum Metal Alloys offers a comprehensive range of brass rods,
                Ingots, and billets manufactured with controlled alloy
                composition and precision processes. Our products are designed
                to deliver consistent strength, excellent machinability, and
                reliable performance across industrial, engineering, and export
                applications.
              </p>

              {/* Second Paragraph */}
              <p className="font-['Sansation'] font-normal text-[#616161] text-[16px] xs:text-[17px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-relaxed mb-10 sm:mb-14">
                Each product is produced with strict quality control to ensure
                dimensional accuracy, uniform structure, and smooth surface
                finish. From standard specifications to customized sizes and
                grades, we provide brass solutions tailored to meet diverse
                application requirements.
              </p>

              {/* CTA Button */}
              <div>
                <CTAButton />
              </div>
            </div>

            {/* Right Side - Image (Mobile: absolute with opacity, Desktop: absolute normal) */}
            <div className="absolute right-0 bottom-0 flex items-center justify-center order-1 lg:order-2 lg:absolute lg:right-0 lg:bottom-16 z-10 lg:z-auto">
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] opacity-80 lg:opacity-100">
                <img
                  src={productHomeRightImg}
                  alt="Brass rods and cylinders - Our product range"
                  className="w-full h-auto object-contain max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] xl:max-h-[550px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
