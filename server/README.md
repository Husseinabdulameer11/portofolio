Server notes

This server serves a small JSON API and (optionally) the built client from `../client/dist`.

CORS
- The server reads an environment variable `ALLOWED_ORIGINS` (comma-separated) to determine which origins are allowed to access the API.
- Default value (if not set) allows the Vercel frontend and localhost: `https://portofolio-hussein.vercel.app,http://localhost:3000`.
- Example to run locally while developing the client on port 3000:

  set ALLOWED_ORIGINS=https://portofolio-hussein.vercel.app,http://localhost:3000
  node index.js

Or on PowerShell:

  $env:ALLOWED_ORIGINS = "https://portofolio-hussein.vercel.app,http://localhost:3000"; node index.js

If you deploy the server to Render, set the `ALLOWED_ORIGINS` environment variable in Render to include the Vercel domain and any other origins you expect.
