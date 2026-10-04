import React from "react";
import { LifeBuoy, ShieldCheck, Database, Zap, Wrench, Headset } from "lucide-react";

export function WebsiteSupportServices() {
  const services = [
    {
      icon: <LifeBuoy className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "24/7 Monitoring",
      features: ["Round-the-clock: We monitor your site continuously to prevent downtime.", "Uptime guarantees: Ensuring your website is always available to visitors.", "Instant alerts: We act immediately if any critical issues arise."]
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Security Patches",
      features: ["Proactive updates: Keeping your CMS, plugins, and themes up to date.", "Vulnerability checks: Regular scans to identify and fix security gaps.", "Hack prevention: Robust firewalls and malware protection."]
    },
    {
      icon: <Database className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Automated Backups",
      features: ["Daily snapshots: We backup your database and files automatically.", "Quick recovery: Rapid restoration processes in case of data loss.", "Offsite storage: Keeping your backups secure in separate cloud environments."]
    },
    {
      icon: <Zap className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Performance Tuning",
      features: ["Speed optimization: Improving load times for better user experience.", "Database cleanup: Removing overhead to keep your site fast.", "Caching setup: Implementing advanced caching strategies."]
    },
    {
      icon: <Wrench className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Bug Fixing",
      features: ["Rapid response: Quick turnaround on essential bug fixes.", "Cross-browser testing: Ensuring compatibility across all devices.", "UI corrections: Fixing broken layouts and display issues."]
    },
    {
      icon: <Headset className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Dedicated Helpdesk",
      features: ["Direct access: Reach our technical team via ticket, email or phone.", "Monthly reporting: Detailed breakdown of updates and site health.", "Consultation: Strategic advice for future website improvements."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Website Support Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          Protect your digital investment with 24/7 technical monitoring, guaranteed SLA response times, proactive CMS security patching, and rapid bug resolution. Our dedicated web engineers ensure your site stays fast, secure, and zero-downtime compliant.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div key={index} className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors">
              <div className="mb-8">{svc.icon}</div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">{svc.title}</h3>
              <ul className="space-y-6">
                {svc.features.map((feature, idx) => {
                  const [boldPart, restPart] = feature.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                      <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                        {restPart ? (<><span className="text-[#E5E5E5] font-normal">{boldPart}:</span> {restPart}</>) : (feature)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
