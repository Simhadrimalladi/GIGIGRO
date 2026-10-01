import React from "react";
import { Code2, Building2, ShoppingCart, Smartphone, Settings } from "lucide-react";

export function WebDevelopmentServices() {
  const services = [
    {
      icon: <Code2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "PHP Development",
      features: [
        "Harness the power of PHP's dynamic and flexible nature, ideal for creating diverse web applications tailored to specific business needs.",
        "Capitalise on PHP's vast ecosystem and extensive library support, ensuring rapid development and integration of functionalities.",
        "Leverage PHP's compatibility with various databases and platforms, guaranteeing seamless operations and interoperability."
      ]
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 0-7.3 16.8l5.2-12.2" />
          <path d="M10 20.3A10 10 0 0 0 22 12c0-1.4-.3-2.7-.8-3.9l-5.6 11.5" />
          <path d="M7 10.6l2.3 6.3 3.6-9.9" />
        </svg>
      ),
      title: "WordPress Development",
      features: [
        "Capitalise on the ease-of-use and extensive customisation options that WordPress offers, enabling a unique and personal website design.",
        "Boost your SEO with WordPress' built-in features and extensive SEO plugins to enhance your site's visibility.",
        "Easily manage content with the intuitive CMS interface of WordPress, keeping your site current and engaging."
      ]
    },
    {
      icon: <Building2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Enterprise Development",
      features: [
        "Enhance your business efficiency with tailor-made enterprise solutions designed to streamline processes and improve productivity.",
        "Improve data management with custom applications designed to handle complex business data efficiently and securely.",
        "Gain a competitive edge with innovative solutions that are scalable, flexible, and designed to evolve with your business."
      ]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ecommerce Development",
      features: [
        "Enhance your online store's functionality and user experience with Magento's or WooCommerce's extensive feature sets and customisation options.",
        "Improve your store's visibility on search engines with built-in SEO features, driving more traffic and conversions.",
        "Scale your ecommerce business effortlessly with Magento's or WooCommerce's robust and scalable platforms."
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Web Applications",
      features: [
        "Improve user interaction with customised web applications designed to meet specific business requirements and goals.",
        "Enhance accessibility with web applications that are available round-the-clock and accessible from any device.",
        "Drive business growth with web applications that improve operational efficiency, customer engagement, and overall user experience."
      ]
    },
    {
      icon: <Settings className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Javascript Development",
      features: [
        "Elevate user experiences with JavaScript's asynchronous capabilities, enabling dynamic content updates without page reloads.",
        "Tap into the expansive JavaScript ecosystem, benefiting from a plethora of libraries and frameworks like React, Vue, Node.js and Angular for tailored solutions.",
        "Harness the versatility of JavaScript for both frontend and backend development, ensuring cohesive and integrated web applications."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Web Development Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] max-w-[1200px] font-light">
          In an era dominated by the digital landscape, your online presence becomes a cornerstone of your business strategy. This is where Bird, an award-winning web development agency based in the UK, shines. Bird provides a transformative approach to web development, leveraging our exceptional technical acumen to bring your digital vision to life. We understand that every business has unique digital needs, and we endeavor to meet these with bespoke, high-quality solutions.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div
              key={index}
              className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="mb-8">
                {svc.icon}
              </div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">
                {svc.title}
              </h3>
              <ul className="space-y-6">
                {svc.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                    <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
