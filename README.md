# Portfolio Website

A full-stack portfolio website built with React on the frontend and Node.js with Express on the backend.

## Project Structure

```text
portfolio/
  client/   # React portfolio website
  server/   # Express API with portfolio data
```

## Features

- Personal hero section
- About section
- Skills and tools section
- Project showcase cards
- Contact section
- Backend API for portfolio content
- Free-hosting friendly deployment setup

## Local Development

This machine currently has `node` available but not `npm`, so dependencies have not been installed here yet.

Once `npm` is available on your system, run:

```bash
cd /Users/pratik/Documents/portfolio/client
npm install
npm run dev
```

In a second terminal:

```bash
cd /Users/pratik/Documents/portfolio/server
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:4000`.

## Customizing Your Portfolio

Update your main content here:

- Frontend text and layout: [client/src/App.jsx](/Users/pratik/Documents/portfolio/client/src/App.jsx)
- Backend portfolio data: [server/data/portfolio.js](/Users/pratik/Documents/portfolio/server/data/portfolio.js)
- Styling: [client/src/styles.css](/Users/pratik/Documents/portfolio/client/src/styles.css)

## Recommended Free Hosting

### Option 1: Vercel + Render

- Host the React frontend on [Vercel](https://vercel.com/)
- Host the Node.js backend on [Render](https://render.com/)

This is the easiest free combination for a React + Node portfolio.

### Deploy the backend on Render

1. Push this project to GitHub.
2. In Render, create a new Web Service from the `server` folder, or use the included [render.yaml](/Users/pratik/Documents/portfolio/render.yaml).
3. Use:
   - Build command: `npm install`
   - Start command: `npm start`
4. After deployment, copy the backend URL.

### Deploy the frontend on Vercel

1. Import the repo into Vercel.
2. Set the root directory to `client`.
3. Add an environment variable:
   - `VITE_API_URL=https://your-render-service.onrender.com`
4. Deploy.

## Alternative Free Hosting

- Netlify for the frontend
- Railway or Render for the backend

## Notes

- The contact form currently displays your contact details instead of submitting messages to a database or email service.
- If you want, the next step can be adding:
  - a working email contact form
  - resume download
  - admin-editable projects
  - animations and dark/light theme toggle
