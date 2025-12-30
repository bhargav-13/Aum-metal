export const WhyAumHome = () => {
  const features = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every product meets the highest standards.',
    },
    {
      title: 'Expert Team',
      description: 'Our experienced team brings decades of industry knowledge and expertise.',
    },
    {
      title: 'Reliable Supply',
      description: 'Consistent production capacity to meet your business needs.',
    },
    {
      title: 'Global Reach',
      description: 'Serving customers worldwide with reliable export capabilities.',
    },
  ]

  return (
    <section 
      id="why-aum-home" 
      className="min-h-screen w-full flex items-center justify-center bg-[#8B1A1A] text-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose AUM Metal Alloys?
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              We stand out in the industry with our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

