# Lilypad web uis

This repo contains the Lilypad UIs reachable via a browser or node based.
Each UI is seperated into it's own pnpm workspace, see details in `## Project structure` below.

## Prerequisites

-   [pnpm](https://pnpm.io/installation)
-   [node](https://nodejs.org/en/download/package-manager)
-   [doppler](https://docs.doppler.com/docs/install-cli)
-   [Bun.js](https://bun.sh/docs/installation)

## Development stack

-   [Next JS](https://nextjs.org/)
-   [Tailwind JS](https://tailwindcss.com/)
-   [Untitled UI 4.0](https://www.untitledui.com/)

## Project structure

**Apps**

-   `/apps/info-dashboard`: The Lilypad network metrics UI hosted at https://info.lilypad.tech
-   `/apps/website`: The Lilypad marketing site
-   `/apps/website-cms`: (WIP!) Payload CMS that will potentially power the info-dashboard and website

**Packages**

-   `/packages/shared-components`: Components that are used by multiple apps
-   `/packages/tailwind-styles`: Untitled UI 4.0 tailwind preset used by multiple apps

## Styling

The tailwind preset used throughout all workspaces in this repo relies heavily on npm package [@frontline-hq/uui-tailwind](https://www.npmjs.com/package/@frontline-hq/uui-tailwind), which provides a lot of useful tailwind utilities for Untitled UI 4.0.

Additionally, the (!private) npm package [@frontline-hq/uui-foundations-assets](https://www.npmjs.com/package/@frontline-hq/uui-foundations-assets) is used to provide Untitled UI 4.0 icons that can be easily used.

The npm access token is made available via doppler.

## UI

All UI's are prototyped in Figma.

-   [**Untitled UI 4.0 library**](<https://www.figma.com/design/QAOfgDhHVeH5f6ZL7dNDLE/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.1)-QAgF8rdbZjp4-(Copy)?node-id=1480-0&t=aQ0a4c3wOTL4TRkn-1>)
-   [**Untitled UI 4.0 sample pages**](https://www.figma.com/design/UL6MdGaqnCWJiejfZj9CUG/Untitled-v4.1-example-pages?node-id=0-1&t=ld6NAgsIoqA1K2kn-1)
-   [**Webpage design**](https://www.figma.com/design/T0J4d7sapn2no8t7ixmNY3/lilypad-UI?node-id=480-3750)
-   [**Metrics dashboard design**](https://www.figma.com/design/T0J4d7sapn2no8t7ixmNY3/lilypad-UI?node-id=677-7696)

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

**Git flow conventions** Please follow these [conventions](https://www.notion.so/lilypadnetwork/Git-flow-conventions-98606ed2291b45fba6916dbf6ccab98f) when working on this repo.

## Deployment

The git branch `main` is automatically deployed:

-   `/apps/info-dashboard`: https://info.lilypad.tech
-   `/apps/website`: No deployment yet.

## Staging

The git branch `staging` is automatically made available via staging:

-   `/apps/info-dashboard`: No staging yet.
-   `/apps/website`: No staging yet.

## Current state of development

Development on this repo is currently paused but will be continued shortly.

Several features that are prototyped in Figma are already implemented waiting for API endpoints from the backend to be made available.

The corresponding code to these UI elements has been commented out and can therefore easily be added to production.

## Notes

### On workspaces

This is a monorepo utilizing nx and pnpm workspaces. That implies:

-   Run stuff here using pnpm (not npm).
-   The equivalent of `npx` is `pnpm dlx`.

Ensure that the `app-name` property in the `package.json` matches the name you use in the command to run the application. For instance, if the `app-name` property in `package.json` is `info-dashboard`, you should use `info-dashboard` in the command as well (`npm run dev info-dashboard`).

A good read to understand nx and pnpm workspaces and the capabilities: [https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem#installing-nx](https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem)
