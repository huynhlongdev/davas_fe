// contexts/GlobalContext.jsx
"use client";

import { createContext, useContext } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ children, global, locale }) {
  return (
    <LocaleContext.Provider value={{ global, locale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }
  return context;
}
