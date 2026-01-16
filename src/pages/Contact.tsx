import { Section } from '../components/Section'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'

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
      <Section id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            />
          </div>
          <div className="text-center">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </Section>
    </>
  )
}

