"use client";

import { useGlobal } from "@/hooks/useGlobal";
import React, { useState } from "react";
import { useLocaleContext } from "@/providers/LocaleProvider";
import MultiSelect from "@/components/shared/MultiSelect";

const RegisterEventForm = () => {
  const { locale } = useLocaleContext();
  const globalQuery = useGlobal(locale);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = globalQuery?.data || {};

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
      console.log("Form data:", formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-8.5 bg-[rgba(255,255,255,.05)] border-[rgba(255,255,255,.1)] rounded-2xl"
    >
      <div className="mb-6">
        <h3 className="text-white font-semibold text-2xl mb-2">
          Registration Form
        </h3>
        <p className="text-t3">
          May 25–27, 2026 · Ariyana Convention Centre, Da Nang
        </p>
      </div>

      {data?.form?.map((field, index) => (
        <div key={index}>
          {field?.label && (
            <label className="block text-sm font-bold text-t4 uppercase mb-2 mt-4">
              {field?.label}
            </label>
          )}

          {field?.type === "select" && field?.options ? (
            <MultiSelect
              options={field.options}
              value={formData[field?.label] || []}
              onChange={(newValue) =>
                setFormData((prev) => ({ ...prev, [field.label]: newValue }))
              }
              placeholder={field?.placeholder || "Select options"}
            />
          ) : (
            <input
              type={field?.type || "text"}
              name={field?.label}
              value={formData[field?.label] || ""}
              onChange={handleChange}
              placeholder={field?.placeholder}
              className="w-full px-4 py-2 text-white border border-border rounded-lg focus:border-red outline-0"
              required={field?.label ? true : false}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red text-white font-bold py-2 rounded-lg  transition mt-4 cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default RegisterEventForm;
