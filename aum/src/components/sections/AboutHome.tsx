export const AboutHome = () => {
  return (
    <section 
      id="about-home" 
      className="min-h-screen w-full flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1A1A] mb-6">
            About AUM Metal Alloys
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            AUM Metal Alloys is a leading manufacturer specializing in high-quality brass products. 
            With years of industry experience, we deliver precision-engineered brass rods, ingots, 
            and billets that meet the highest standards of quality and performance.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            Our commitment to excellence and customer satisfaction has made us a trusted partner 
            for industrial, engineering, and export markets worldwide.
          </p>
          <button className="bg-[#8B1A1A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7A1515] transition-colors">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  )
}

