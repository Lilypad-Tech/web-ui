# Lilypad web uis

This repo contains the lilypad UIs reachable via a browser or node based.

## Dev notes

⚠️ This is a monorepo utilizing nx and pnpm workspaces. That implies:

-   Run stuff here using pnpm (not npm).
    -   The equivalent of `npx` is `pnpm dlx`.
    -   run packages from the repo root using `pnpm --filter metrics dev` (to run the nextjs app at `./apps/metrics`).

A good read to understand nx and pnpm workspaces and the capabilities: [https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem#installing-nx](https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem)
