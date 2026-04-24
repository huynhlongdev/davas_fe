"use client";

import { useState } from "react";
import RandomGallery from "../RandomGallery";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

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

  const {
    heading: { primaryText, subText, description },
  } = data;

  return (
    <section
      id="register"
      className="py-[100px] bg-ink relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 max-w-[440px]">
            {/* <RandomGallery images={data?.images} /> */}

            {subText && <div className="reg-eyebrow">{subText}</div>}

            {primaryText && (
              <h2
                className="text-white text-[clamp(30px,3.8vw,70px)] leading-[1.2] font-semibold font-display"
                dangerouslySetInnerHTML={{ __html: primaryText }}
              ></h2>
            )}

            <div className="text-t4">
              <BlocksRenderer content={description} />
            </div>
          </div>

          {/* Right: Form */}
          <div>
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

              {data?.registerForm?.map((field, index) => (
                <div key={index}>
                  {field?.label && (
                    <label className="block text-sm font-bold text-t4 uppercase mb-2 mt-4">
                      {field?.label}
                    </label>
                  )}

                  {field?.type === "select" && field?.options ? (
                    <select
                      name={field?.label}
                      value={formData[field?.label] || ""}
                      onChange={handleChange}
                      placeholder={field?.placeholder}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:border-red outline-0"
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
                      className="w-full px-4 py-2 border border-border rounded-lg focus:border-red outline-0"
                      required={field?.label ? true : false}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red text-white font-bold py-2 rounded-lg  transition mt-4"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>

            <div className="mt-8 p-6 bg-[rgba(255,255,255,.05)] border-[rgba(255,255,255,.1)] border rounded-[8px] flex items-center gap-3">
              <div className="w-22 h-22 rounded-[8px] bg-white overflow-hidden">
                <img src={qrcodeUrl} alt="" />
              </div>
              <div className="text-white">
                <div className="font-semibold mb-1">Scan to Register</div>
                <p className="text-t4">{data?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
