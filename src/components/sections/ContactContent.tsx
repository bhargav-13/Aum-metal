import { useState } from 'react';
import copyIcon from '../../assets/copy.svg';
import addressIcon from '../../assets/address.svg';

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-7.94 7.94c0 1.4.36 2.77 1.06 3.98L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8.97h.01A7.94 7.94 0 0 0 20 11.94 7.88 7.88 0 0 0 17.6 6.32zM12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 0 1-1.01-3.5 6.59 6.59 0 0 1 6.6-6.6c1.76 0 3.42.69 4.67 1.94a6.58 6.58 0 0 1 1.93 4.67 6.6 6.6 0 0 1-6.6 6.58zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.51.64-.62.77-.12.13-.23.15-.43.05a5.44 5.44 0 0 1-2.7-2.35c-.2-.35.2-.33.58-1.08.06-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24s-.68.66-.68 1.62c0 .95.7 1.87.8 2 .1.13 1.36 2.08 3.3 2.92 1.23.53 1.7.58 2.32.49.37-.06 1.17-.48 1.33-.94.17-.47.17-.86.12-.94-.05-.08-.18-.13-.38-.23z" fill="#98012E"/>
  </svg>
);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
                  <WhatsAppIcon />
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
