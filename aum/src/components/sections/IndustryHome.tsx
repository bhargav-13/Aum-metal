export const IndustryHome = () => {
  const industries = [
    'Automotive',
    'Construction',
    'Electrical & Electronics',
    'Marine',
    'Aerospace',
    'Manufacturing',
  ]

  return (
    <section 
      id="industry-home" 
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1A1A] mb-6">
            Industries We Serve
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-12 leading-relaxed">
            Our brass products are trusted across various industries for their reliability, 
            durability, and exceptional performance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#8B1A1A] transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

