src/
│
├── app/ # Next App Router
│ ├── layout.jsx
│ ├── page.jsx
│ ├── about-us/
│ │ └── page.jsx # Client component with hooks
│
├── features/ # 🔥 business logic theo domain
│ │
│ ├── about/
│ │ ├── components/
│ │ │ ├── HeroBanner.jsx
│ │ │
│ │ ├── services/
│ │ │ └── about.service.js # Class with constructor
│ │
│ ├── global/
│ │ ├── components/
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │
│ │ ├── services/
│ │ │ └── global.service.js # Class with constructor
│
│ ├── blocks/ # 🔥 Strapi dynamic blocks
│ ├── components/
│ │ ├── HeadingBlock.jsx
│ │ ├── MediaBlock.jsx
│ │ ├── TimelineBlock.jsx
│ │
│ ├── renderer/
│ └── BlockRenderer.jsx
│
├── shared/ # 🔥 dùng chung toàn hệ thống
│ │
│ ├── api/ # 👉 gọi API (core) - Axios based
│ │ ├── fetcher.js # Axios wrapper class
│ │ ├── strapi.js # StrapiClient class
│ │
│ ├── utils/ # 👉 helper function
│ │ ├── format.js
│ │ ├── slugify.js
│ │
│ ├── hooks/ # 🔥 Custom React hooks
│ │ ├── index.js # Core hooks (useApi, useStrapi, useLocalStorage, useDebounce)
│ │ ├── strapi.js # Strapi-specific hooks (useStrapiData, useGlobalData, etc.)
│ │ └── advanced.js # Advanced hooks (useForm, useAsync, useWindowSize)
│ │
│ ├── ui/ # 👉 component UI base
│ │ └── components.js # Button, Container, Spinner, ErrorMessage
│ │ │ ├── Footer.jsx
│ │ │
│ │ ├── services/
│ │ │ └── global.service.js
│
│ ├── blocks/ # 🔥 Strapi dynamic blocks
│ ├── components/
│ │ ├── HeadingBlock.jsx
│ │ ├── MediaBlock.jsx
│ │ ├── TimelineBlock.jsx
│ │
│ ├── renderer/
│ └── BlockRenderer.jsx
│
├── shared/ # 🔥 dùng chung toàn hệ thống
│ │
│ ├── api/ # 👉 gọi API (core)
│ │ ├── fetcher.js
│ │ ├── strapi.js
│ │
│ ├── utils/ # 👉 helper function
│ │ ├── format.js
│ │ ├── slugify.js
│ │
│ ├── hooks/
│ │
│ ├── ui/ # 👉 component UI base
│ │ ├── Button.jsx
│ │ ├── Container.jsx
│
├── styles/
│ └── globals.css
