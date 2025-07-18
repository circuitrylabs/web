# CircuitryLabs Website

Landing page for [circuitrylabs.org](https://circuitrylabs.org) - Phase -1.

## Quick Start

```bash
npm install
npm start       # Development at localhost:3000
npm run build   # Production build
```

## Deploy

```bash
npm run build
# Drag 'build' folder to Netlify/Vercel
```

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS
- 60KB production build

## Structure

```
src/
  App.tsx         # Main landing page component
  index.css       # Tailwind imports
public/
  _redirects      # Netlify SPA config
  manifest.json   # PWA metadata
```

---

*Building tools that respect both human and AI boundaries.*