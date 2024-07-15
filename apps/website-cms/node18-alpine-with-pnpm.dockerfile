FROM node:18-alpine as base

# Install pnpm: taken from https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
# Install pnpm with corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Enable `pnpm add --global` on Alpine Linux by setting
# home location environment variable to a location already in $PATH
# https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
ENV PNPM_HOME=/usr/local/bin
ENV PATH="$PNPM_HOME:$PATH"