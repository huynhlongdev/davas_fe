import qs from "qs";
import { apiFetch } from "@/lib/apiFetch";

// GET supported locales from Strapi
export const getLocales = () => apiFetch("/api/i18n/locales");

// GLOBAL
export const getGlobal = (locale = "en") => {
  const query = qs.stringify(
    {
      locale,
      populate: {
        footer: {
          populate: {
            address: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"],
                },
              },
            },

            logo: {
              populate: {
                media: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },

        loader: {
          populate: {
            media: {
              fields: ["url", "alternativeText"],
            },
          },
        },

        header: {
          populate: {
            cta: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"],
                },
              },
            },

            menu: true,

            logo: {
              populate: {
                media: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  // console.log(`/api/global?${query}`);

  // return apiFetch(`/api/global?${query}`);

  return apiFetch(`/api/global?locale=${locale}`);
};

// LANDING PAGE
export const getLandingPage = (locale = "en") => {
  const query = qs.stringify(
    {
      locale,
      populate: {
        blocks: {
          on: {
            /**
             * Guest Section
             */
            "block.guest-section": {
              populate: {
                heading: true,
                guests: {
                  populate: {
                    peoples: {
                      populate: {
                        image: {
                          fields: ["url", "alternativeText"],
                        },
                      },
                    },
                  },
                },
              },
            },

            /**
             * Form Section
             */
            "block.form-section": {
              populate: {
                images: {
                  fields: ["url", "alternativeText"],
                },
                registerForm: {
                  populate: {
                    options: true,
                  },
                },
                qrcode: {
                  fields: ["url", "alternativeText"],
                },
                heading: true,
              },
            },

            /**
             * FAQ Section
             */
            "block.faq-section": {
              populate: {
                heading: true,
                faqs: true,
                textBox: {
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"],
                    },
                    media: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
              },
            },

            /**
             * Banner Section
             */
            "block.banner-section": {
              populate: {
                buttons: {
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
                counters: true,
                countdown: {
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"],
                    },
                    button: {
                      populate: {
                        icon: {
                          fields: ["url", "alternativeText"],
                        },
                      },
                    },
                  },
                },
              },
            },

            /**
             * Investment Section
             */
            "block.investment-section": {
              populate: {
                heading: true,
                items: {
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                    media: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },

            /**
             * About Section
             */
            "block.about-section": {
              populate: {
                image: {
                  fields: ["url"],
                },
                heading: true,
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"],
                    },
                    media: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
              },
            },

            /**
             * Governing Unit
             */
            "block.governing-unit-section": {
              populate: {
                partners: {
                  fields: ["url", "alternativeText"],
                },
                heading: true,
              },
            },

            /**
             * Program Section
             */
            "block.program-section": {
              populate: {
                heading: true,
                tabsProgram: {
                  populate: {
                    layoutEvent: {
                      fields: ["url", "alternativeText"],
                    },
                    programs: {
                      populate: {
                        timelines: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  console.log(`http://localhost:1337/api/landing-page?${query}`);

  // return apiFetch(`/api/landing-page?${query}`);
  return apiFetch(`/api/landing-page?locale=${locale}`);
};
