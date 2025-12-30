export const ProductHome = () => {
  const products = [
    {
      title: 'Brass Rods',
      description: 'High-quality brass rods with superior strength and dimensional accuracy for various industrial applications.',
    },
    {
      title: 'Brass Ingots',
      description: 'Premium brass ingots engineered for consistent metallurgical properties and excellent performance.',
    },
    {
      title: 'Brass Billets',
      description: 'Precision-manufactured brass billets designed for superior strength and consistent quality.',
    },
  ]

  return (
    <section 
      id="product-home" 
      className="min-h-screen w-full flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1A1A] mb-4">
            Our Products
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality brass products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#8B1A1A] mb-4">{product.title}</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

