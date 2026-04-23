"use client";

import React, { useState } from "react";

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
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-150"
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
        <form onSubmit={handleSubmit} className="px-10 py-9">
          <div className="space-y-4.5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold tracking-[0.06em] text-gray-500 uppercase mb-1.75">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600/10 outline-none transition-all duration-150"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-[0.06em] text-gray-500 uppercase mb-1.75">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600/10 outline-none transition-all duration-150"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold tracking-[0.06em] text-gray-500 uppercase mb-1.75">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600/10 outline-none transition-all duration-150"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-bold tracking-[0.06em] text-gray-500 uppercase mb-1.75">
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600/10 outline-none transition-all duration-150"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold tracking-[0.06em] text-gray-500 uppercase mb-1.75">
                Attendee Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border-[1.5px] border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600/10 outline-none transition-all duration-150"
                required
              >
                <option value="">Select a category</option>
                <option value="startup">Startup Founder</option>
                <option value="investor">Investor</option>
                <option value="sponsor">Sponsor</option>
                <option value="attendee">General Attendee</option>
              </select>
            </div>

            {/* Note */}
            <div className="px-4 py-3 bg-gray-100 rounded text-xs text-gray-600 flex gap-2">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0 mt-0.25 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Your information is secure and will only be used for DAVAS 2026
                communications.
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-red-600 text-white font-display font-bold text-sm tracking-[0.07em] px-3.75 py-3.75 rounded transition-all duration-180 hover:bg-red-700 hover:-translate-y-0.25 shadow-md hover:shadow-lg"
          >
            Complete Registration →
          </button>
        </form>
      </div>
    </div>
  );
}
