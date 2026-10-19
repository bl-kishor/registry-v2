# NPM Registry Demo

A small React + TypeScript demo app that explores client-side routing and live package data from the public npm registry API. It lets users browse featured packages, search for npm libraries, and open package detail pages with metadata such as description, license, author, maintainers, and keywords.

## Live demo

Hosted on Vercel: [registry-mocha-phi.vercel.app](https://registry-mocha-phi.vercel.app/)

## Overview

This project is a front-end-only demo built to practice:

- React Router navigation and route loaders
- fetching data from an external API
- rendering search results efficiently with virtualization
- building a clean, responsive UI with Tailwind CSS

## Features

- Home page with a curated set of featured packages
- Global search bar in the header to navigate to search results
- Search results page using the npm registry search API
- Package details page showing metadata for an individual package
- Smooth, scrollable result list using TanStack Virtual
- Responsive layout and reusable UI components

## Tech stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- TanStack Virtual
- npm registry public API

## Application flow

1. The app loads a home page from `/` using a route loader.
2. `homeLoader` fetches a set of featured packages from the npm registry.
3. The header search input redirects users to `/search?term=<query>`.
4. `searchLoader` reads the search term from the URL and calls the npm search API.
5. Search results are rendered in a virtualized list to keep large result sets performant.
6. Clicking a package opens `/packages/:name`, where `detailsLoader` fetches package metadata and renders the package information page.

## Routes

| Route | Description |
| --- | --- |
| `/` | Displays featured npm packages |
| `/search?term=react` | Shows search results for a package query |
| `/packages/:name` | Displays metadata for a specific package |

## Project structure

```text
src/
├── App.tsx                     # Router setup and route definitions
├── pages/
│   ├── Root.tsx               # Shared layout with header and outlet
│   ├── home/
│   │   ├── HomePage.tsx       # Featured packages landing screen
│   │   └── homeLoader.ts      # Fetches featured package data
│   ├── search/
│   │   ├── SearchPage.tsx     # Virtualized package search results
│   │   ├── searchLoader.ts    # Reads query param and loads results
│   │   └── ...
│   └── details/
│       ├── DetailsPage.tsx    # Package detail screen
│       └── detailsLoader.ts   # Loads package metadata for a route param
├── components/
│   ├── Header.tsx             # Top navigation with package search
│   ├── SearchInput.tsx        # Search form used in the header
│   ├── PackageListItem.tsx    # Search result card component
│   └── Skeleton.tsx           # Loading placeholder UI
├── api/
│   ├── queries/
│   │   ├── getFeaturedPackages.ts
│   │   ├── getPackage.ts
│   │   └── searchPackages.ts
│   └── types/
│       ├── packageDetails.ts
│       └── packageSummary.ts
└── main.tsx                   # Application entry point
```

## Getting started

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal. The app fetches live data from the public npm registry API, so an internet connection is required.

## Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Type-check and build the production bundle
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## Notes

- This is a demo project intended for learning and experimentation.
- It does not include a backend, database, or user authentication.
- Data is loaded directly from the public npm registry, so package availability depends on real upstream registry responses.

## Validation

The project has been checked with a production build successfully:

```bash
npm run build
```

This completed successfully using Vite and TypeScript without build errors.
