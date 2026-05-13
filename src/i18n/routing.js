import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "en",

  // ✅ 'as-needed' = default locale (en) KHÔNG có prefix
  // en: /          → /posts       → /posts/1
  // vi: /vi        → /vi/posts    → /vi/posts/1
  localePrefix: "as-needed",
});
