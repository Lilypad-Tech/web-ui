# Lilypad web uis

This repo contains the Lilypad UIs reachable via a browser or node based.

## Prerequisites

- [pnpm](https://pnpm.io/installation)
- [node](https://nodejs.org/en/download/package-manager)
- [doppler](https://docs.doppler.com/docs/install-cli)
- [Bun.js](https://bun.sh/docs/installation)
  
## Local development

Make sure you have access to the doppler project and configuration and have run `doppler setup`.

Run the following command for setting things up:

```sh
npm run boot
```

Use the following command to execute a local server to serve and hot-reload the given app:

```
npm run dev <app-name>
```

This will run the Next.js app located at `./apps/<app-name>`.

### Notes

This is a monorepo utilizing nx and pnpm workspaces. That implies:

- Run stuff here using pnpm (not npm).
- The equivalent of `npx` is `pnpm dlx`.

Ensure that the `app-name` property in the `package.json` matches the name you use in the command to run the application. For instance, if the `app-name` property in `package.json` is `info-dashboard`, you should use `info-dashboard` in the command as well (`npm run dev info-dashboard`).

A good read to understand nx and pnpm workspaces and the capabilities: [https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem#installing-nx](https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem)
