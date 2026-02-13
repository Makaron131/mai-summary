# mai-summary

React + Vite + TypeScript + pnpm project, ready for GitHub Pages deployment.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm run build
pnpm run preview
```

## GitHub Pages

This repo includes `.github/workflows/deploy.yml` and deploys on pushes to `main`.

1. Push this project to GitHub.
2. In `Settings -> Pages`, set `Source` to `GitHub Actions`.
3. Ensure the default branch is `main`.

Vite `base` is set automatically from `GITHUB_REPOSITORY` in CI, and `/` locally.
