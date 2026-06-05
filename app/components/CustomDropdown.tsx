import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  options: any[];
  value: string;
  onChange: (value: any) => void;
}

export default function CustomDropdown({ options, value, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpwards] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => (opt.value || opt) === value);
  const displayLabel = selectedOption ? (selectedOption.label || selectedOption) : "Select an option";

  const handleToggle = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;

      if (spaceBelow < 180) {
        setOpenUpwards(true);
      } else {
        setOpenUpwards(false);
      }
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full p-2.5 bg-slate-100 border text-left text-sm font-medium rounded-xl flex items-center justify-between cursor-pointer transition-all ${
          isOpen ? "border-emerald-500 ring-2 ring-emerald-100" : "border-slate-200 hover:bg-slate-200"
        }`}
      >
        <span>{displayLabel}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div 
          className={`absolute z-50 w-full bg-white border border-slate-200 rounded-xl shadow-lg p-1.5 space-y-0.5 animate-in fade-in duration-100 ${
            openUpward 
              ? "bottom-full mb-2 slide-in-from-bottom-1"  
              : "top-full mt-2 slide-in-from-top-1"
          }`}
        >
          {options.map((opt, index) => {
            const optValue = opt.value || opt;
            const optLabel = opt.label || opt;
            const isSelected = optValue === value;

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onChange(optValue);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-2.5 text-sm rounded-lg transition-colors cursor-pointer block ${
                  isSelected
                    ? "bg-emerald-50 text-emerald-600 font-semibold" 
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900" 
                }`}
              >
                {optLabel}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}