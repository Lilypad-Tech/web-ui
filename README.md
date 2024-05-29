# Lilypad web uis

This repo contains the lilypad UIs reachable via a browser or node based.

## Dev notes

⚠️ This is a monorepo utilizing nx and pnpm workspaces. That implies:

- Run stuff here using pnpm (not npm).

  - The equivalent of `npx` is `pnpm dlx`.

- To run the application from the repository root, use the command `pnpm --filter info-dashboard dev`. This will run the Next.js app located at `./apps/info-dashboard`.

Ensure that the `name` property in the `package.json` matches the name you use in the command to run the application. For instance, if the `name` property in `package.json` is `info-dashboard`, you should use `info-dashboard` in the command as well.

A good read to understand nx and pnpm workspaces and the capabilities: [https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem#installing-nx](https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem)
