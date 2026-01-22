import { HeroAbout } from '../components/sections/HeroAbout'
import { AboutProfile } from '../components/sections/AboutProfile'
import { ProductsAbout } from '../components/sections/ProductsAbout'
import { TeamAbout } from '../components/sections/TeamAbout'
import { IndustriesAbout } from '../components/sections/IndustriesAbout'
import { ProductionProcess } from '../components/sections/ProductionProcess'
import { ClientTestimonials } from '../components/sections/ClientTestimonials'
import { SEO } from '../components/SEO'

export const About = () => {
  return (
    <>
      <SEO
        title="About Aum Metal Alloys | Leading Brass Manufacturer in Jamnagar, Gujarat, India"
        description="Learn about Aum Metal Alloys - India's trusted brass manufacturer since 2010. Discover our state-of-the-art manufacturing facility in Jamnagar, Gujarat, our production process, quality control systems, and expert team. We specialize in brass rods, ingots, billets, wires & hollow products for global industries."
        keywords="about Aum Metal Alloys, Aum Metal company profile, brass manufacturer Jamnagar, brass factory Gujarat, brass production process India, brass manufacturing capabilities, brass company team, brass quality control, brass industry leaders, brass exporter India, precision brass manufacturer, industrial brass supplier, Mr Rajesh Patel, Mr Aum Patel, brass melting, billet casting, hot extrusion, cold drawing, heat treatment brass"
        ogTitle="About Aum Metal Alloys | Leading Brass Manufacturer in Gujarat, India"
        ogDescription="Discover Aum Metal Alloys - India's trusted brass manufacturer. State-of-the-art facility in Jamnagar, Gujarat with expertise in brass rods, ingots, billets, wires & hollow products."
        canonicalUrl="/about"
        pageType="website"
      />
      <HeroAbout />
      <AboutProfile />
      <ProductsAbout />
      <TeamAbout />
      <IndustriesAbout />
      <ProductionProcess />
      <ClientTestimonials />
    </>
  )
}
