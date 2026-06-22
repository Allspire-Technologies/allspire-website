# Allspire Website

Marketing site for **Allspire Technologies** — showcasing our services, the industries we serve, and our flagship product, **iTrova**.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [React Router](https://reactrouter.com/) for client-side routing
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Vitest](https://vitest.dev/) + Testing Library for unit tests

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:8080
```

## Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the Vite dev server (port 8080)        |
| `npm run build`    | Production build to `dist/`                   |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run ESLint                                    |
| `npm run test`     | Run unit tests once                           |
| `npm run test:watch` | Run unit tests in watch mode               |

## Deployment (Cloudflare Pages)

This is a static single-page app. On [Cloudflare Pages](https://pages.cloudflare.com/):

- **Build command:** `npm run build`
- **Build output directory:** `dist`

Client-side routes (e.g. `/projects`, `/industries/retail`) are handled by
[`public/_redirects`](public/_redirects), which rewrites all paths to `index.html`
so deep links and refreshes resolve correctly.

## Project structure

```
src/
  assets/        images and fonts (incl. iTrova product screenshots)
  components/    shared UI components and shadcn/ui primitives
  data/          static content (industries, etc.)
  hooks/         reusable React hooks
  lib/           utilities
  pages/         route components (Index, Projects, Services, Contact, ...)
```
