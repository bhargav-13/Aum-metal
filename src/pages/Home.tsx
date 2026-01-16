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
        title="AUM Metal Alloys - Precision Brass Products Manufacturer & Exporter"
        description="AUM Metal Alloys is a leading manufacturer and exporter of precision brass rods, ingots, billets, wires, and hollow products. We deliver high-quality brass materials for automotive, plumbing, electrical, and industrial applications worldwide."
        keywords="brass rods, brass ingots, brass billets, brass wires, brass hollow, brass manufacturer, brass exporter, precision brass, industrial brass, automotive brass, plumbing brass, electrical brass"
        ogTitle="AUM Metal Alloys - Precision Brass Products Manufacturer & Exporter"
        ogDescription="Leading manufacturer and exporter of precision brass products. High-quality brass rods, ingots, billets, wires, and hollow products for global industries."
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

