import { HeroProducts } from '../components/sections/HeroProducts';
import { SEO } from '../components/SEO';

export const Products = () => {
  return (
    <>
      <SEO
        title="Brass Products - Rods, Ingots, Billets, Wires & Hollow | Aum Metal Alloys"
        description="Explore Aum Metal Alloys' complete range of brass products: precision brass rods, high-purity brass ingots, custom brass billets, quality brass wires, and brass hollow tubes. Available in C36000, CuZn38Pb2, CW614N, CZ121 grades. Metric & Imperial dimensions. Export quality brass products from India."
        keywords="brass rods, brass ingots, brass billets, brass wires, brass hollow tubes, brass sections, brass profiles, brass products catalog, brass dimensions, metric brass, imperial brass, C36000 brass rods, CuZn38Pb2 brass, CW614N brass products, CZ121 brass, free cutting brass, leaded brass, brass bars, hexagon brass, square brass, round brass rods, brass tubes manufacturer, brass pipe, brass extrusions, brass forgings, Aum Metal products, brass supplier India, brass exporter"
        ogTitle="Brass Products - Rods, Ingots, Billets, Wires & Hollow | Aum Metal Alloys"
        ogDescription="Complete range of precision brass products from Aum Metal Alloys: rods, ingots, billets, wires, hollow sections. Available in multiple grades and Metric/Imperial dimensions."
        canonicalUrl="/products"
        pageType="website"
      />
      <HeroProducts />
    </>
  );
};
