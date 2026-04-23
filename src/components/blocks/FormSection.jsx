"use client";

import { useState } from "react";
import RandomGallery from "../RandomGallery";

export default function FormSection({ data }) {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Submit form data to backend
      console.log("Form data:", formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const qrcodeUrl =
    `${process.env.NEXT_PUBLIC_API_URL}${data?.qrcode?.url}` || null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Images */}
          <div className="space-y-4">
            <RandomGallery images={data?.images} />
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {data?.registerForm?.map((field, index) => (
              <div key={index}>
                {field?.label && (
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field?.label}
                  </label>
                )}

                {field?.type === "select" && field?.options ? (
                  <select
                    name={field?.label}
                    value={formData[field?.label] || ""}
                    onChange={handleChange}
                    placeholder={field?.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{field?.placeholder}</option>
                    {field?.options?.map((option, optIndex) => (
                      <option key={optIndex} value={option?.label}>
                        {option?.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field?.type || "text"}
                    name={field?.label}
                    value={formData[field?.label] || ""}
                    onChange={handleChange}
                    placeholder={field?.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required={field?.label ? true : false}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          <div className="form-footer">{data?.text}</div>
          <div className="form-footer">
            <img src={qrcodeUrl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
