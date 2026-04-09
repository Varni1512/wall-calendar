# Interactive Wall Calendar (React + Tailwind)

A polished, responsive calendar component inspired by a physical wall calendar aesthetic.

## Features

- Wall-calendar inspired layout with hero section and month anchor.
- Interactive month navigation (previous/next).
- Day range selection with clear visual states:
  - start day
  - end day
  - days in-between
- Integrated notes section:
  - notes per selected day
  - saved in `localStorage`
  - delete single-day note
- Fully responsive:
  - desktop: side-by-side calendar and notes
  - mobile: stacked, touch-friendly layout

## Tech Stack

- React (JSX)
- Tailwind CSS (via `@tailwindcss/vite`)
- Vite

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Notes on Design Choices

- Calendar grid uses a full 6-week (42-cell) matrix for consistent alignment.
- Monday is used as the first day of week to match common wall-calendar layouts.
- Range selection behavior:
  - first click sets start
  - second click sets end
  - third click starts a new selection
