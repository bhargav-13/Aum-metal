import { HeroHome } from '../components/sections/HeroHome'
import { AboutHome } from '../components/sections/AboutHome'
import { ProductHome } from '../components/sections/ProductHome'
import { IndustryHome } from '../components/sections/IndustryHome'
import { WhyAumHome } from '../components/sections/WhyAumHome'
import { CapabilitiesHome } from '../components/sections/CapabilitiesHome'
import { TestimonialsHome } from '../components/sections/TestimonialsHome'
import { FooterHome } from '../components/sections/FooterHome'

export const Home = () => {
  return (
    <>
      <HeroHome />
      <AboutHome />
      <ProductHome />
      <IndustryHome />
      <WhyAumHome />
      <CapabilitiesHome />
      <TestimonialsHome />
      <FooterHome />
    </>
  )
}

