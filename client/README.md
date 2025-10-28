Vercel deployment notes

- This project is an SPA built with Vite + React Router. Client-side routes (for example `/projects`) must be rewritten to `index.html` on the server so refreshes don't return 404.
- A `vercel.json` rewrite is included in this folder to handle that behavior for Vercel:

  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }

- If you deploy the frontend separately to Vercel, make sure the project root is set to the `client/` folder (or move `vercel.json` to the repo root) so Vercel picks up this file.
- If you host the frontend through Render (or another host), add the equivalent SPA rewrite/redirect rule so unknown routes serve `index.html`.

Quick test

1. Build: `npm run build` in `client/`.
2. Serve the `dist` folder with a static server (or deploy to Vercel).
3. Navigate to `/projects` and refresh — you should no longer see a 404.
