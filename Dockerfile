FROM node:21.6.1-slim as base
WORKDIR /app
# install pnpm
RUN npm install -g pnpm

FROM base as build

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./

COPY . .

RUN pnpm install
RUN ADAPTER=node pnpm build

FROM node:21.6.1-slim
WORKDIR /app

# copy from builder
COPY --from=build /app/build ./build
COPY --from=build /app/package.json .
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "./build"]