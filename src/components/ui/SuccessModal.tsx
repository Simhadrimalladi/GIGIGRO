import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle2, X } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export function SuccessModal({ 
  open, 
  onOpenChange,
  title = "Form Submitted Successfully",
  description = "Thank you for reaching out! Our team will get back to you shortly."
}: SuccessModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[110] w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] focus:outline-none">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 text-center shadow-2xl overflow-hidden">
            
            <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]">
              <X className="h-5 w-5" />
            </Dialog.Close>

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            
            <Dialog.Title className="text-2xl font-bold text-white mb-2">
              {title}
            </Dialog.Title>
            
            <Dialog.Description className="text-[15px] text-[#A0A0A0] leading-relaxed">
              {description}
            </Dialog.Description>

            <button
              onClick={() => onOpenChange(false)}
              className="mt-8 w-full rounded-xl bg-[#38BDF8] py-3 font-semibold text-black hover:bg-[#7DD3FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              Close
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
