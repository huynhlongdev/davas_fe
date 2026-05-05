"use client";

import { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "../shared/Image";
import RegisterEventForm from "../shared/Form";

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
      console.log("Form data:", formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const heading = data?.heading || {};
  const { primaryText, subText, description } = heading;

  return (
    <section
      id="register"
      className="py-[100px] bg-ink relative overflow-hidden"
    >
      <div className="max-w-[1360px] px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 max-w-[440px]">
            {subText && <div className="reg-eyebrow">{subText}</div>}

            {primaryText && (
              <h2
                className="text-white text-[clamp(30px,3.8vw,70px)] leading-[1.2] font-semibold font-display"
                dangerouslySetInnerHTML={{ __html: primaryText }}
              ></h2>
            )}

            {description && (
              <div className="text-t4">
                <BlocksRenderer content={description} />
              </div>
            )}
          </div>

          {/* Right: Form */}
          <div>
            <RegisterEventForm />

            <div className="mt-8 p-6 bg-[rgba(255,255,255,.05)] border-[rgba(255,255,255,.1)] border rounded-[8px] flex items-center gap-3">
              <div className="w-22 h-22 shrink-0 rounded-[8px] bg-white overflow-hidden">
                <Image data={data?.qrcode} />
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
