"use client";

import QueryProvider from "@/providers/QueryProvider";
import { PopupProvider } from "@/providers/PopupProvider";

export default function Providers({ children }) {
  return (
    <QueryProvider>
      <PopupProvider>{children}</PopupProvider>
    </QueryProvider>
  );
}
