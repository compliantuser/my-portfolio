# Portfolio Website

A full-stack portfolio website built with Next.js. The frontend pages and backend API routes live in one app.

## Project Structure

```text
uploadable/
  app/                 # Next.js pages, layout, styles, and API routes
  app/api/portfolio    # Backend route that returns portfolio data
  app/api/contact      # Backend route for contact form submissions
  lib/portfolio.js     # Portfolio content used by the page and API
```

## Local Development

```bash
cd /Users/pratik/Documents/portfolio/uploadable
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

Useful backend endpoints:

- `GET /api/portfolio`
- `POST /api/contact`

## Deploy

Deploy the `uploadable` folder as a Next.js app on Vercel, Render, Railway, or another Node host.

For Render, this folder includes `render.yaml`:

- Build command: `npm install`
- Start command: `npm start`

## Customize

- Main content: `lib/portfolio.js`
- Page layout: `app/page.jsx`
- Styling: `app/globals.css`
