# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based event calendar application for the "Digby Dawgs" community events. The application displays neighborhood events in a comic-style grid layout.

## Architecture

- **React SPA**: Single page application built with React and Vite
- **Flat Structure**: Project uses a flat file structure (no src/ directory)
- **Event Data**: Events are stored in `events.json` with associated images in `assets/`
- **Static Assets**: Event images stored in `/assets/` directory
- **Entry Point**: `App.jsx` is the main component, imported by `index.html`

## Key Components

- `App.jsx`: Main application component that renders the event grid
- `EventTile`: Component for individual event display
- `events.json`: Contains all event data with titles, dates, descriptions, and image references
- `App.css`: Styling for the comic-style grid layout

## Data Structure

Events data includes:
- `id`: Unique identifier
- `title`: Event name
- `date`: Event date (can include "ONGOING" for recurring events)
- `description`: Optional event details
- `image`: Filename reference to image in assets/

## Commands

Install dependencies:
```bash
pnpm install
```

Run development server:
```bash
pnpm run dev
```

Build the application:
```bash
pnpm run build
```

Preview production build:
```bash
pnpm run preview
```

Lint code:
```bash
pnpm run lint
```

Deploy to GitHub Pages (manual):
```bash
pnpm run deploy
```

## Dependencies

- **React 18**: Core framework
- **Vite**: Build tool and dev server
- **TailwindCSS v4**: Utility-first CSS framework with PostCSS plugin
- **Lucide React**: Icon library
- **pnpm**: Package manager

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

- **Live site**: https://isaiahbernados.github.io/digby-dawgs/
- **Auto-deployment**: Triggered on push to main branch
- **Manual deployment**: Use `pnpm run deploy` command

## Important Notes

- Uses TailwindCSS v4 with `@tailwindcss/postcss` plugin
- Events data is fetched from `/events.json` in the public directory
- Images are served from `/assets/` directory in public folder
- Project uses proper Vite structure with `src/` directory
- Configured for GitHub Pages with base path `/digby-dawgs/`