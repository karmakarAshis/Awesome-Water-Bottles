# Awesome Water Bottles

A small React + Vite starter focused on a simple water-bottles UI. This project is a minimal template that demonstrates how to structure a React app with Vite, enable fast refresh, and use ESLint. It includes sample components, static data in `public/bottles.json`, and basic build/dev scripts.

## Features

- Vite dev server with HMR (Fast Refresh)
- React 19
- ESLint configuration (basic)
- Example components: `src/components/Bottles` and `src/components/Bottle`
- Static sample data: `public/bottles.json`

## Requirements

- Node.js 18 or newer (recommended)
- npm, yarn or pnpm

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

5. Lint the codebase

```bash
npm run lint
```

These scripts are defined in `package.json`:

- `dev`: starts the Vite dev server
- `build`: builds the production bundle with Vite
- `preview`: serves the built app locally
- `lint`: runs ESLint across the project

## Project Structure

- `public/` — static assets served as-is (includes `bottles.json` sample data)
- `src/` — application source
	- `src/main.jsx` — app entry
	- `src/App.jsx` — main app component
	- `src/components/Bottles/` — list container component(s)
	- `src/components/Bottle/` — single bottle component
	- `src/assets/` — images and static imports
- `index.html` — Vite HTML entry

## Development Notes

- Sample data: `public/bottles.json` is useful for local development and demos; components load data from this file by default.
- Use `src/components/Bottles/Bottles.jsx` and `src/components/Bottle/Bottle.jsx` as reference for component structure and styles.
- ESLint is configured for basic checks; extend or enable TypeScript rules for stricter type-aware linting.

## ESLint & TypeScript

This template ships with a minimal ESLint setup. For production projects we recommend adding TypeScript and enabling type-aware rules via `typescript-eslint`. See Vite's React + TS template for guidance: https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

## React Compiler

The React Compiler is not enabled by default due to dev/build performance tradeoffs. If you want to try it, follow the official React Compiler installation instructions: https://react.dev/learn/react-compiler/installation

## Vite React Plugins

- `@vitejs/plugin-react` — uses Babel (or oxc in some builds) to enable Fast Refresh
- `@vitejs/plugin-react-swc` — alternative using SWC for Fast Refresh and faster transform times

## Deployment

This app builds to static assets (via `npm run build`) and can be deployed to static hosts like Vercel, Netlify, GitHub Pages, or any CDN-backed static hosting.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with small, focused changes. Update this README with any new scripts or structural changes you add.

## License

Add your project license here (e.g., MIT) or remove this section if not applicable.

---

If you'd like, I can also:

- Add a short `CONTRIBUTING.md` template
- Add a license file
- Convert this README to include badges and a demo GIF

Let me know which you'd prefer.
