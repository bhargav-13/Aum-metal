import { HeroContact } from '../components/sections/HeroContact';
import { ContactContent } from '../components/sections/ContactContent';
import { SEO } from '../components/SEO';

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - AUM Metal Alloys | Get in Touch"
        description="Contact AUM Metal Alloys for inquiries about our brass products, custom manufacturing, pricing, and export services. Our team is ready to assist with your brass material requirements."
        keywords="contact AUM Metal Alloys, brass product inquiry, brass manufacturer contact, brass export inquiry, custom brass manufacturing"
        ogTitle="Contact Us - AUM Metal Alloys | Get in Touch"
        ogDescription="Get in touch with AUM Metal Alloys for brass product inquiries, custom manufacturing, and export services."
      />
      <HeroContact />
      <ContactContent />
    </>
  );
};
