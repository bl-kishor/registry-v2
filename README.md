# React Router + API Usage Demo

A small React and TypeScript app exploring client-side routing with React Router and fetching npm package data from the public registry API.

## Getting started

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The app makes requests to the npm registry, so package search requires an internet connection.

## Available routes

| Route | Purpose |
| --- | --- |
| `/` | Home page (currently a placeholder). |
| `/search?term=react` | Searches npm packages and displays the results. |
| `/packages/:name` | Package details route (currently a placeholder). |

Use the search field in the header to submit a query and navigate to the search results.

## How it works

- `src/App.tsx` defines a browser router, the shared root layout, and the app's routes.
- `src/pages/Root.tsx` renders the header and the active child route through React Router's `<Outlet />`.
- The header's search form uses `useNavigate` to navigate to `/search?term=...`.
- The search route's loader reads `term` from the URL and calls `searchPackages` before rendering the page.
- `searchPackages` requests `https://registry.npmjs.org/-/v1/search` and maps the response to the package summary data used by the result list.
- `SearchPage` reads the loader data with `useLoaderData` and uses TanStack Virtual to render only the visible package results. The results pane scrolls independently, and each rendered row is measured to support variable-height content.
- `PackageListItem` displays package details and wraps its keyword badges when needed.

## Scripts

```sh
npm run dev      # Start the Vite development server
npm run build    # Type-check and build for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```
