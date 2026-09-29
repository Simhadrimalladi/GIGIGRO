import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Call Us Directly",
      details: ["+44 (0)20 7946 0912 (UK)", "+1 (212) 555-0198 (US)"],
      desc: "Our support and sales teams are available from Mon-Fri, 9am to 6pm in local time zones."
    },
    {
      icon: <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Email Inquiries",
      details: ["hello@gigigro.com", "support@gigigro.com"],
      desc: "Drop us an email anytime. We typically respond to all inquiries within 24 business hours."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Visit Our HQ",
      details: ["24 Berkeley Square", "Mayfair, London W1J 6HE"],
      desc: "Looking for an in-person consultation? Reach out to schedule a meeting at our London headquarters."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Support Hours",
      details: ["24/7 Priority Support", "Standard: 9 AM - 6 PM"],
      desc: "For existing enterprise clients, our critical technical support line is operational 24/7/365."
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white border-b border-[#222222]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {contactDetails.map((info, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="mb-6 w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center border border-[#333333]">
              {info.icon}
            </div>
            <h3 className="text-[20px] font-bold mb-3 text-white">{info.title}</h3>
            <div className="mb-4">
              {info.details.map((detail, dIdx) => (
                <p key={dIdx} className="text-[#E5E5E5] text-[15px] font-semibold">{detail}</p>
              ))}
            </div>
            <p className="text-[#A3A3A3] text-[14px] leading-[1.6] font-light">{info.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
