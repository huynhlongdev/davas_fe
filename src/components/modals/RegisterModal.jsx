"use client";

import React, { useState } from "react";
import RegisterEventForm from "@/components/shared/Form";

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[500] bg-gray-900/70 backdrop-blur-sm flex items-center justify-center p-5 transition-opacity duration-250 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-2xl w-full max-w-[520px] relative overflow-hidden max-h-[90vh] overflow-y-auto transition-transform duration-250 ${
          isOpen ? "scale-100 translate-y-0" : "scale-98 translate-y-5"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-150 cursor-pointer"
        >
          ✕
        </button>
        {/* Header */}
        <div className="px-10 pt-10 pb-7 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div
            className="absolute -top-15 -right-15 w-50 h-50 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200, 16, 46, 0.3) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-[0.13em] text-orange-300 uppercase mb-2.5">
              Register Now
            </div>
            <h2 className="font-display text-[26px] font-bold text-white mb-1">
              Join DAVAS 2026
            </h2>
            <p className="text-sm text-white/45">
              Secure your spot at Vietnam's premier innovation summit
            </p>
          </div>
        </div>
        {/* Form */}
        <RegisterEventForm />
      </div>
    </div>
  );
}
