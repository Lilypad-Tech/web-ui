FROM node:18.8-alpine as base

FROM base as builder

# Install pnpm: taken from https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
# Install pnpm with corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Enable `pnpm add --global` on Alpine Linux by setting
# home location environment variable to a location already in $PATH
# https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
ENV PNPM_HOME=/usr/local/bin

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN pnpm install
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm.lock ./

RUN pnpm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
