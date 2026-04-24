"use client";

import React from "react";
import RegisterModal from "@/components/modals/RegisterModal";
import { usePopup } from "@/providers/PopupProvider";

const Model = () => {
  const { isOpen, closePopup } = usePopup();

  return (
    <div className="mt-20">
      <RegisterModal isOpen={isOpen} onClose={closePopup} />
    </div>
  );
};

export default Model;
