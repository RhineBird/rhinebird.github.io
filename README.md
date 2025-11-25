# Rhine Bird Website

Static marketing site for Rhine Bird with a Basket Case product microsite.

## Structure
- `index.html` / `style.css` — main Rhine Bird landing page.
- `assets/` — shared images, icons, favicon, logo.
- `basketcase/` — product microsite (HTML/CSS/JS) and `assets/`.
- `basketcase/docs/` — Markdown sources for Basket Case legal pages.
- `CNAME` — GitHub Pages custom domain.

## Local preview
- Serve from repo root to mimic GitHub Pages:
  - `python -m http.server` (Python 3)
  - or `npx serve` if you have Node.

## Formatting
- Prettier config in `.prettierrc` (tabs, 2-space width). Ignore list in `.prettierignore`.
- Format: `npx prettier --write .`
- Check only: `npx prettier --check .`

## Deployment
- Hosted via GitHub Pages from repo root; keep `index.html` at root.
- `basketcase/` is served under `/basketcase/`.

## Contributing
- Keep assets in `assets/` (root) or `basketcase/assets/` (product).
- Run Prettier before committing.
- If adding new legal copy, edit `basketcase/docs/` and sync HTML pages if needed.
