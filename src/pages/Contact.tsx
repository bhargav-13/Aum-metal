import { HeroContact } from '../components/sections/HeroContact';
import { ContactContent } from '../components/sections/ContactContent';
import { SEO } from '../components/SEO';

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Aum Metal Alloys | Brass Manufacturer Inquiry - Jamnagar, Gujarat, India"
        description="Contact Aum Metal Alloys for brass product inquiries, custom manufacturing quotes, and export services. Phone: +91 92650 39240 | Email: aummetalalloy@gmail.com | Location: Jamnagar, Gujarat, India. Get in touch for brass rods, ingots, billets, wires & hollow products."
        keywords="contact Aum Metal Alloys, Aum Metal phone number, brass product inquiry, brass manufacturer contact India, brass export inquiry, custom brass manufacturing quote, brass supplier Jamnagar, brass company Gujarat, +91 92650 39240, aummetalalloy@gmail.com, brass factory address, brass dealer contact, bulk brass order, brass price inquiry"
        ogTitle="Contact Aum Metal Alloys | Brass Manufacturer Inquiry"
        ogDescription="Get in touch with Aum Metal Alloys for brass product inquiries, quotes, and export services. Phone: +91 92650 39240 | Email: aummetalalloy@gmail.com | Jamnagar, Gujarat, India"
        canonicalUrl="/contact"
        pageType="website"
      />
      <HeroContact />
      <ContactContent />
    </>
  );
};
