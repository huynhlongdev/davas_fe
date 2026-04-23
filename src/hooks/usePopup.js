"use client";

import { useContext } from "react";
import { PopupContext } from "@/providers/PopupProvider";

export function usePopup() {
  return useContext(PopupContext);
}
