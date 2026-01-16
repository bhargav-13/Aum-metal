import { useState } from 'react';
import copyIcon from '../../assets/copy.svg';
import addressIcon from '../../assets/address.svg';
import whatsappIcon from '../../assets/whatsapp.svg';

// Web3Forms - Free 250 submissions/month, no backend needed
const WEB3FORMS_ACCESS_KEY = '4de0d260-bce1-420c-824c-f4c96218616f';

export const ContactContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contact Form: ${formData.subject}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('aummetalalloy@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16">
      <div className="content-padding">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">

          {/* Direct Email Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-[#98012E] font-['Sansation'] font-normal text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.01em]">
              Direct Email
            </h2>
            <div className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex justify-between items-center">
              <span className="font-['Sansation'] font-normal text-[#1E1E1E] text-[14px] sm:text-[15px] md:text-[16px]">
                aummetalalloy@gmail.com
              </span>
              <button
                onClick={copyEmail}
                className="p-1.5 sm:p-2 hover:bg-[#98012E]/10 rounded-lg transition-colors"
                title={copied ? "Copied!" : "Copy email"}
              >
                {copied ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="#98012E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <img src={copyIcon} alt="Copy" className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Other Ways Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-[#98012E] font-['Sansation'] font-normal text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.01em]">
              Other Ways
            </h2>

            {/* WhatsApp and GSTIN Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919265039240"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-4 sm:py-5 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1.5">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-['Sansation'] font-normal text-[#98012E] text-[15px] sm:text-[16px] md:text-[18px]">
                    Whatsapp
                  </span>
                </div>
                <span className="font-['Sansation'] font-normal text-[#878787] text-[12px] sm:text-[14px] md:text-[15px]">
                  +91 92650 39240
                </span>
              </a>

              {/* GSTIN Card */}
              <div className="bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-4 sm:py-5 flex flex-col items-center justify-center gap-2 sm:gap-3">
                <span className="font-['Sansation'] font-normal text-[#98012E] text-[15px] sm:text-[16px] md:text-[18px]">
                  GSTIN
                </span>
                <span className="font-['Sansation'] font-normal text-[#878787] text-[12px] sm:text-[14px] md:text-[15px]">
                  07AAECR2971C1Z
                </span>
              </div>

              {/* Address Card - Full width on mobile, normal on desktop */}
              <a
                href="https://maps.google.com/?q=Plot+No+3640+Phase+III+Dared+Jamnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 sm:col-span-1 bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-4 sm:px-5 py-4 sm:py-5 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1.5">
                  <img src={addressIcon} alt="Address" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-['Sansation'] font-normal text-[#98012E] text-[15px] sm:text-[16px] md:text-[18px]">
                    Address
                  </span>
                </div>
                <span className="font-['Sansation'] font-normal text-[#878787] text-[12px] sm:text-[13px] md:text-[14px] text-center leading-snug">
                  PL No. 3640, Phase III, Dared, Jamnagar
                </span>
              </a>
            </div>
          </div>

          {/* Get In Touch Form Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-[#98012E] font-['Sansation'] font-normal text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.01em]">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
              {/* First Row - First Name & Last Name - Always 2 columns */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[13px] sm:text-[15px] text-[#1E1E1E] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#98012E]/50"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[13px] sm:text-[15px] text-[#1E1E1E] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#98012E]/50"
                />
              </div>

              {/* Second Row - Email & Phone - Always 2 columns */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[13px] sm:text-[15px] text-[#1E1E1E] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#98012E]/50"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Contact"
                  className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[13px] sm:text-[15px] text-[#1E1E1E] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#98012E]/50"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[13px] sm:text-[15px] text-[#1E1E1E] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#98012E]/50"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write an message.."
                rows={4}
                className="w-full bg-[#FFFBFC] border border-[#98012E] rounded-[12px] sm:rounded-[16px] px-3 sm:px-5 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[13px] sm:text-[15px] text-[#1E1E1E] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#98012E]/50 resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#98012E] text-white rounded-[12px] sm:rounded-[16px] px-4 py-3 sm:py-3.5 font-['Sansation'] font-normal text-[14px] sm:text-[16px] hover:bg-[#7a0125] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-[12px] px-4 py-3 font-['Sansation'] text-[14px]">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-[12px] px-4 py-3 font-['Sansation'] text-[14px]">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>

          {/* Get Location Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-[#98012E] font-['Sansation'] font-normal text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.01em]">
              Get Location
            </h2>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-[12px] sm:rounded-[16px] border border-[#98012E] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.0!3d22.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzEyLjAiTiA3MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AUM Metal Alloy Location"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
