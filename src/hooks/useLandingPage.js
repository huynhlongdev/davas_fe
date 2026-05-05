"use client"; // 👈 THÊM DÒNG NÀY

import { useQuery } from "@tanstack/react-query";
import { getLandingPage } from "@/lib/api";

export function useLandingPage(locale = "en") {
  return useQuery({
    queryKey: ["landingPage", locale],
    queryFn: () => getLandingPage(locale),
    staleTime: 5 * 60 * 1000,
  });
}
