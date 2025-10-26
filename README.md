# Portfolio (React + Express)

This repository contains a small portfolio built with a Node/Express server and a React client (Vite). It supports three languages: English, Norwegian, and Arabic. It has three pages:

- Home (About me)
- Projects (list and detail pages; uses a reusable ProjectCard component)
- Contact (phone, LinkedIn, GitHub, email)

Quick start

1. Install dependencies for server and client:

```bash
# from repo root
npm run install:all
```

2. Run the Express server (serves API and static build when available):

```bash
npm run start:server
```

3. In development you can run the client separately (Vite dev server):

```bash
# in a second terminal
cd client
npm run dev
```

API

- GET /api/projects — returns a list of projects (id, name, short)
- GET /api/projects/:id — returns full project details

To create a production bundle, run:

```bash
cd client
npm run build
```

Then the Express server will serve the client build from `client/dist`.

Notes

- Update the sample data in `server/data/projects.json` with your real project text, images, videos, and links.
- The app uses a simple built-in language provider (`client/src/i18n.js`) that you can extend.
