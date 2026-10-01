import React from "react";
import { Search, Menu } from "lucide-react";

export function WebDesignCMS() {
  return (
    <section className="bg-[#000000] text-[#FFFFFF] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Phone Wireframe Image/Graphic */}
        <div className="relative w-full aspect-[4/3] bg-[#E8E8E8] rounded-lg overflow-hidden flex items-end justify-center pt-16">
          {/* Subtle curve at bottom right */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#D8D8D8] rounded-full opacity-50"></div>
          
          {/* Phone Frame */}
          <div className="relative z-10 w-[240px] h-[340px] bg-white border-[4px] border-[#333] rounded-t-[24px] rounded-b-none flex flex-col items-center pt-8 px-5 shadow-2xl">
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
              <span className="text-[#333] font-bold text-lg">LOGO</span>
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-[#333]" />
                <Menu className="w-4 h-4 text-[#333]" />
              </div>
            </div>
            
            {/* Body */}
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-[#333] font-bold text-xl">About us</h3>
              <p className="text-[#333] font-bold text-[10px] leading-snug">
                Lorem ipsum dolor sit amet platea dolore tristique adipiscing elit quam facilisis vel ut sed.
              </p>
              
              {/* Width Indicator */}
              <div className="mt-4 flex items-center justify-between border-t border-b border-[#333] py-2 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#333] text-[10px]">{"<"}</div>
                <div className="w-full text-center text-[#333] text-[8px] font-bold">390px</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#333] text-[10px]">{">"}</div>
              </div>
              
              {/* Video Placeholder */}
              <div className="mt-4 flex flex-col items-center justify-center text-[#333]">
                <div className="w-10 h-[10px] border-b border-l border-r border-[#333] rounded-b-full mb-1"></div>
                <span className="text-[10px] font-bold">Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col">
          <h2 className="text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.1] mb-8">
            <span className="text-[#38BDF8]">Custom CMS</span> VS<br/>
            WordPress
          </h2>
          
          <div className="space-y-6 text-[#A3A3A3] text-[14px] md:text-[15px] leading-[1.7] font-light">
            <p>
              When considering the choice between custom CMS solutions and popular platforms like <span className="underline decoration-[#737373] underline-offset-4">WordPress</span> for UK clients, it&apos;s essential to examine the benefits each option brings to the table.
            </p>
            <p>
              Custom CMS solutions offer a tailored approach, allowing for greater flexibility and control over the website&apos;s features and functionality. This customisation ensures a highly personalised experience that caters to the specific requirements of each business. By opting for a custom CMS, clients can achieve a more streamlined and efficient website, with the potential to integrate unique features or custom applications that may not be readily available on popular platforms.
            </p>
            <p>
              In contrast, popular platforms such as WordPress come with a wealth of benefits that cater to a broad range of businesses. The extensive library of plugins and themes available for WordPress enables businesses to quickly and cost-effectively implement desired features, often without the need for extensive custom development. Additionally, the platform&apos;s ease of use makes it accessible to users with varying levels of technical expertise, while the supportive community ensures that businesses can find answers to common questions or seek help when required.
            </p>
            <p>
              Ultimately, the decision between custom CMS solutions and popular platforms like WordPress depends on the specific needs, resources, and objectives of each UK-based client. A custom CMS might be the right choice for businesses seeking a high degree of control and customisation, while WordPress could be a better fit for those seeking a more cost-effective, user-friendly option with a wide range of available features.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-[18px] text-[#FFFFFF] font-light">
              Wanna get in touch? <a href="#" className="text-[#38BDF8] border-b border-[#38BDF8] pb-1 hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors">Let&apos;s talk</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
