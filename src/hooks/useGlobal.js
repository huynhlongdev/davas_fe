"use client"; // 👈 THÊM DÒNG NÀY

import { useQuery } from "@tanstack/react-query";
import { getGlobal } from "@/lib/api";

export function useGlobal(locale = "en") {
  return useQuery({
    queryKey: ["global", locale],
    queryFn: () => getGlobal(locale),
    staleTime: 5 * 60 * 1000, // 5 phút
  });
}
