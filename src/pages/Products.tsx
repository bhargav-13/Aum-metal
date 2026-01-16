import { HeroProducts } from '../components/sections/HeroProducts';
import { ProductsContent } from '../components/sections/ProductsContent';
import { SEO } from '../components/SEO';

export const Products = () => {
  return (
    <>
      <SEO
        title="Our Products - Brass Rods, Ingots, Billets, Wires & Hollow | AUM Metal Alloys"
        description="Explore AUM Metal Alloys' comprehensive range of brass products including rods, ingots, billets, wires, hollow sections, and profiles. Available in Metric and Imperial dimensions for global applications."
        keywords="brass rods, brass ingots, brass billets, brass wires, brass hollow, brass sections, brass profiles, brass products catalog, brass dimensions, metric brass, imperial brass"
        ogTitle="Our Products - Brass Rods, Ingots, Billets, Wires & Hollow | AUM Metal Alloys"
        ogDescription="Comprehensive range of precision brass products: rods, ingots, billets, wires, hollow sections, and profiles. Available in Metric and Imperial dimensions."
      />
      <HeroProducts />
      <ProductsContent />
    </>
  );
};


