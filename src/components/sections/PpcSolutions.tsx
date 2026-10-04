import React from "react";

export function PpcSolutions() {
  return (
    <section className="bg-[#FFFFFF] py-24 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-[900px] mx-auto">
        <p className="text-[#000000] text-[13px] font-mono tracking-widest uppercase mb-3 font-semibold">
          BEYOND THE CLICK
        </p>
        <h2 className="text-[32px] md:text-[52px] font-bold text-[#000000] tracking-tight leading-[1.2] mb-6">
          The Ad Is Only <span className="bg-[#38BDF8] px-2 py-1 leading-[1.4] box-decoration-clone">the Beginning</span>
        </h2>
        <p className="text-[#333333] text-[15px] md:text-[16px] leading-[1.8] font-light max-w-[800px] mx-auto mb-6">
          A person clicking your advertisement does not automatically mean the campaign has succeeded. What happens after the click matters just as much. That is why we consider the complete journey from search to conversion.
        </p>
        <p className="text-[#000000] text-[16px] font-semibold leading-[1.6] p-4 bg-[#F5F5F5] border-l-4 border-[#38BDF8] max-w-[800px] mx-auto text-left">
          A click has value when it leads to the right next step.
        </p>
      </div>
    </section>
  );
}
