export const CapabilitiesHome = () => {
  const capabilities = [
    {
      title: 'Manufacturing Capacity',
      description: 'State-of-the-art facilities with high production capacity to meet large-scale demands.',
    },
    {
      title: 'Quality Control',
      description: 'Advanced testing and quality assurance systems ensuring product excellence.',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored products designed to meet specific customer requirements and specifications.',
    },
    {
      title: 'Technical Support',
      description: 'Expert technical assistance and consultation for all your brass product needs.',
    },
  ]

  return (
    <section 
      id="capabilities-home" 
      className="min-h-screen w-full flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1A1A] mb-4">
              Our Capabilities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive manufacturing and service capabilities to support your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#8B1A1A]"
              >
                <h3 className="text-xl font-bold text-[#8B1A1A] mb-4">{capability.title}</h3>
                <p className="text-gray-700 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

