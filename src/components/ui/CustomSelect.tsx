"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Check } from "lucide-react";

export interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  variant?: "dark" | "light";
}

export function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  className = "",
  variant = "dark",
}: CustomSelectProps) {
  const selectedOption = options.find((opt) => opt.value === value);

  const isDark = variant === "dark";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={`w-full h-12 rounded-lg px-4 flex items-center justify-between text-[14px] outline-none transition-all cursor-pointer ${
            isDark
              ? "bg-[#111111] border border-[#333333] text-white focus:border-[#38BDF8] data-[state=open]:border-[#38BDF8] data-[state=open]:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:border-[#555555]"
              : "bg-white border border-gray-300 text-black focus:border-[#38BDF8] data-[state=open]:border-[#38BDF8] data-[state=open]:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:border-gray-400"
          } ${className}`}
        >
          <span
            className={
              selectedOption
                ? isDark
                  ? "text-white font-medium"
                  : "text-black font-medium"
                : isDark
                ? "text-[#777777]"
                : "text-gray-400"
            }
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isDark ? "text-[#777777]" : "text-gray-400"
            }`}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={6}
          className={`z-[999] min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-xl shadow-2xl p-1.5 overflow-hidden transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 ${
            isDark
              ? "bg-[#161616] border border-[#333333] text-white shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
              : "bg-white border border-gray-200 text-black shadow-xl"
          }`}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <DropdownMenu.Item
                key={opt.value}
                onSelect={() => onChange(opt.value)}
                className={`px-4 py-3 rounded-lg text-[14px] outline-none cursor-pointer flex items-center justify-between transition-colors ${
                  isSelected
                    ? isDark
                      ? "bg-[#38BDF8]/20 text-[#38BDF8] font-bold border border-[#38BDF8]/30"
                      : "bg-[#e0f2fe] text-[#0ea5e9] font-bold border border-[#7dd3fc]"
                    : isDark
                    ? "text-[#EEEEEE] hover:bg-[#38BDF8]/15 hover:text-[#38BDF8] data-[highlighted]:bg-[#38BDF8]/20 data-[highlighted]:text-[#38BDF8]"
                    : "text-gray-700 hover:bg-[#e0f2fe] hover:text-[#0ea5e9] data-[highlighted]:bg-[#e0f2fe] data-[highlighted]:text-[#0ea5e9]"
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <Check
                    className={`w-4 h-4 ${
                      isDark ? "text-[#38BDF8]" : "text-[#0ea5e9]"
                    }`}
                  />
                )}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
