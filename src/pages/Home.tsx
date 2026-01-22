import { HeroHome } from '../components/sections/HeroHome'
import { AboutHome } from '../components/sections/AboutHome'
import { ProductHome } from '../components/sections/ProductHome'
import { IndustryHome } from '../components/sections/IndustryHome'
import { WhyAumHome } from '../components/sections/WhyAumHome'
import { CapabilitiesHome } from '../components/sections/CapabilitiesHome'
import { TestimonialsHome } from '../components/sections/TestimonialsHome'
import { SEO } from '../components/SEO'

export const Home = () => {
  return (
    <>
      <SEO
        title="Aum Metal Alloys | #1 Brass Rods, Ingots, Billets Manufacturer & Exporter in India"
        description="Aum Metal Alloys - India's leading manufacturer & exporter of premium brass rods, brass ingots, brass billets, brass wires & hollow products. ISO certified brass manufacturer in Jamnagar, Gujarat. Get quality brass components for automotive, plumbing, electrical & industrial applications. Contact: +91 92650 39240"
        keywords="Aum Metal, Aum Metal Alloys, brass rods manufacturer India, brass ingots supplier, brass billets exporter, brass wires, brass hollow products, precision brass components, brass manufacturer Jamnagar, brass exporter Gujarat, industrial brass supplier, automotive brass parts, plumbing brass fittings, electrical brass components, C36000 brass, CuZn38Pb2, CW614N brass, CZ121, brass alloy grades, brass material supplier, high quality brass India, brass components exporter, brass products manufacturer, brass industry India, brass metal alloys, brass fabrication, brass casting, brass extrusion, brass tubes, brass bars, hexagon brass rods"
        ogTitle="Aum Metal Alloys | #1 Brass Manufacturer & Exporter in India"
        ogDescription="India's leading manufacturer & exporter of premium brass rods, ingots, billets, wires & hollow products. ISO certified brass manufacturer in Jamnagar, Gujarat. Quality brass for automotive, plumbing & industrial applications."
        canonicalUrl="/"
        pageType="website"
      />
      <HeroHome />
      <AboutHome />
      <ProductHome />
      <IndustryHome />
      <WhyAumHome />
      <CapabilitiesHome />
      <TestimonialsHome />
    </>
  )
}
