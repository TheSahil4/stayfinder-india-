# StayFinder India

A frontend-only React + Vite college project inspired by the supplied StayFinder reference.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

No backend, database, authentication, API or secret environment variables are required. All hotel, destination, offer and review data is local/static and interactions are simulated in the browser.

## Deploy to Vercel

Import the GitHub repository into Vercel. Vercel detects Vite automatically. No build configuration changes or secrets are required.

## Structure

- `public/images` — local image assets, including the supplied reference image
- `src/components` — reusable UI
- `src/pages` — page-level screens
- `src/data` — static demo data
- `src/hooks` — reusable client-side hooks
- `src/utils` — small helpers
