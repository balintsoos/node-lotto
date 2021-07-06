FROM node:16.3.0-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS build
RUN npm ci && npm cache clean --force
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM base AS production
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
COPY --from=build /app/dist ./dist
USER node
ENTRYPOINT ["node", "dist/index.js"]
