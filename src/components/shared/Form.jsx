"use client";

import { useGlobal } from "@/hooks/useGlobal";
import React, { useState, useEffect } from "react";
import { useLocaleContext } from "@/providers/LocaleProvider";
import MultiSelect from "@/components/shared/MultiSelect";

const RegisterEventForm = () => {
  const { locale } = useLocaleContext();
  const globalQuery = useGlobal(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const data = globalQuery?.data || {};

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data?.form && Array.isArray(data.form) && data.form.length > 0) {
      const initialData = {};
      data.form.forEach((field) => {
        if (field?.label) {
          const fieldName = field?.name || "";
          initialData[fieldName] = field.type === "select" ? [] : "";
        }
      });
      setFormData(initialData);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Tự động validate dựa trên field required từ API
  const validateForm = () => {
    const requiredFields =
      data?.form?.filter((field) => field.required === true) || [];

    for (const field of requiredFields) {
      const fieldName = field.name;
      const value = formData[fieldName];

      // Check cho cả array và string
      if (field.type === "select") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          setSubmitStatus({
            type: "error",
            message: `Please select at least one option for ${field.label}`,
          });
          return false;
        }
      } else {
        if (!value || (typeof value === "string" && value.trim() === "")) {
          setSubmitStatus({
            type: "error",
            message: `Please fill in ${field.label} field`,
          });
          return false;
        }
      }
    }

    // Auto validate email nếu field type là email
    const emailField = data?.form?.find((field) => field.type === "email");
    if (emailField) {
      const emailFieldName = emailField.name;
      const email = formData[emailFieldName];
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setSubmitStatus({
          type: "error",
          message: `Please enter a valid email address for ${emailField.label}`,
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const submissionData = { data: {} };

      data?.form?.forEach((field) => {
        if (field?.label) {
          const fieldName = field.name;
          let value = formData[fieldName];

          if (field.type === "select") {
            if (Array.isArray(value)) {
              value = value.join(", ");
            }
          } else if (typeof value === "string") {
            value = value.trim();
          }

          submissionData.data[fieldName] = value || "";
        }
      });

      const response = await fetch(
        "http://localhost:1337/api/register-events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        },
      );

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Registration successful!",
        });

        // Reset form
        const resetData = {};
        data?.form?.forEach((field) => {
          if (field?.label) {
            const fieldName = field.name;
            resetData[fieldName] = field.type === "select" ? [] : "";
          }
        });
        setFormData(resetData);

        setTimeout(() => {
          setSubmitStatus({ type: "", message: "" });
        }, 3000);
      } else {
        const errorMessage =
          result.error?.message || result.message || "Submission failed.";
        setSubmitStatus({ type: "error", message: errorMessage });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8.5 bg-[rgba(255,255,255,.05)] border-[rgba(255,255,255,.1)] rounded-2xl"
    >
      {/* Dynamic form fields - hoàn toàn từ API */}
      {data?.form && Array.isArray(data.form) && data.form.length > 0 ? (
        data.form.map((field, index) => {
          const fieldName = field?.name || "";

          return (
            <div key={index} className="mb-4">
              {field.label && (
                <label className="block text-sm font-bold text-t4 uppercase mb-2">
                  {field.label}
                  {field.required && <span className="text-red ml-1">*</span>}
                </label>
              )}

              {field.type === "select" && field.options ? (
                <MultiSelect
                  options={field.options}
                  value={formData[fieldName] || []}
                  onChange={(newValue) =>
                    setFormData((prev) => ({ ...prev, [fieldName]: newValue }))
                  }
                  placeholder={field.placeholder || "Select options"}
                />
              ) : field.type === "textarea" ? (
                <textarea
                  name={fieldName}
                  value={formData[fieldName] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows={field.rows || 4}
                  className="w-full px-4 py-2 text-white border border-border rounded-lg focus:border-red outline-0 resize-y"
                />
              ) : (
                <input
                  type={field.type || "text"}
                  name={fieldName}
                  value={formData[fieldName] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 text-white border border-border rounded-lg focus:border-red outline-0"
                />
              )}
            </div>
          );
        })
      ) : (
        <div className="text-center text-gray-400 py-8">
          Loading form fields...
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red text-white font-bold py-2 rounded-lg transition mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {submitStatus.message && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  );
};

export default RegisterEventForm;
