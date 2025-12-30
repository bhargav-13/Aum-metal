export const TestimonialsHome = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'ABC Industries',
      text: 'AUM Metal Alloys has been our trusted partner for years. Their products consistently meet our quality standards.',
    },
    {
      name: 'Sarah Johnson',
      company: 'XYZ Manufacturing',
      text: 'Excellent service and reliable supply. The brass rods we received exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      company: 'Global Engineering',
      text: 'Professional team and high-quality products. Highly recommended for any brass manufacturing needs.',
    },
  ]

  return (
    <section 
      id="testimonials-home" 
      className="min-h-screen w-full flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1A1A] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#8B1A1A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

