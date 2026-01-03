import { HeroAbout } from '../components/sections/HeroAbout'
import { CapabilitiesAbout } from '../components/sections/CapabilitiesAbout'
import { AboutProfile } from '../components/sections/AboutProfile'
import { ProductsAbout } from '../components/sections/ProductsAbout'
import { TeamAbout } from '../components/sections/TeamAbout'
import { IndustriesAbout } from '../components/sections/IndustriesAbout'
import { ProductionProcess } from '../components/sections/ProductionProcess'
import { ClientTestimonials } from '../components/sections/ClientTestimonials'

export const About = () => {
  return (
    <>
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

