import { HeroAbout } from '../components/sections/HeroAbout'
import { CapabilitiesAbout } from '../components/sections/CapabilitiesAbout'
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
        title="About Us - AUM Metal Alloys | Brass Manufacturing Excellence"
        description="Learn about AUM Metal Alloys - our company profile, manufacturing capabilities, production process, team, and commitment to delivering precision brass products with consistent quality and reliable performance."
        keywords="about AUM Metal Alloys, brass manufacturer profile, brass production process, brass manufacturing capabilities, brass company team, brass quality control"
        ogTitle="About Us - AUM Metal Alloys | Brass Manufacturing Excellence"
        ogDescription="Discover AUM Metal Alloys - our manufacturing capabilities, production process, and commitment to precision brass products."
      />
      <HeroAbout />
      <CapabilitiesAbout />
      <AboutProfile />
      <ProductsAbout />
      <TeamAbout />
      <IndustriesAbout />
      <ProductionProcess />
      <ClientTestimonials />
    </>
  )
}

