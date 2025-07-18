# CircuitryLabs Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/198f1836-64b5-4b1b-8bd2-0fd51ee05842/deploy-status)](https://app.netlify.com/sites/vocal-crepe-b830e0/deploys)
[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude-8B5CF6?style=flat&logo=anthropic)](https://claude.ai)
[![Phase](https://img.shields.io/badge/Phase--1-Building%20in%20Public-22C55E?style=flat)](https://github.com/circuitrylabs)
[![Thermal](https://img.shields.io/badge/Thermal-Efficient-F59E0B?style=flat&logo=fire)](https://circuitrylabs.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

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

## Foundation

Building on the [CIRIS Covenant](https://ciris.ai/) framework for ethical AI systems.

---

*Building tools that respect both human and AI boundaries.*