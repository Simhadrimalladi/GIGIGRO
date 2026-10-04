import React from "react";
import { Smartphone, Search, ShoppingCart, Package, CreditCard, Store } from "lucide-react";

export function EcommerceServices() {
  const services = [
    {
      icon: <Store className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Online Store Design",
      features: [
        "Create a professional storefront that reflects your brand and makes products easy to browse and understand."
      ]
    },
    {
      icon: <Package className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Product & Category Pages",
      features: [
        "Organise your products with clear categories, useful information, images and calls to action that help customers make informed decisions."
      ]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Shopping Cart & Checkout",
      features: [
        "Create a straightforward purchasing journey that reduces unnecessary steps and makes checkout easy to complete."
      ]
    },
    {
      icon: <CreditCard className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Payment Integration",
      features: [
        "Connect your store with suitable payment solutions so customers can complete transactions through supported payment methods."
      ]
    },
    {
      icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Order & Product Management",
      features: [
        "Build practical systems for managing products, prices, orders and other essential store information."
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Mobile Shopping Experience",
      features: [
        "Make sure customers can browse products and complete purchases comfortably across different screen sizes."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          OUR ECOMMERCE SOLUTIONS
        </p>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Everything Your Store Needs to Sell Online
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          We design and develop ecommerce experiences around the complete customer journey—from discovering a product to placing an order.
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
