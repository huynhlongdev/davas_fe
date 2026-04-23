import { apiFetch } from "@/lib/apiFetch";

// GET supported locales from Strapi
export const getLocales = () => apiFetch("/api/i18n/locales");

// GLOBAL
export const getGlobal = (locale = "en") =>
  apiFetch(`/api/global?locale=${locale}`);

// LANDING PAGE
export const getLandingPage = (locale = "en") =>
  apiFetch(`/api/landing-page?locale=${locale}`);
