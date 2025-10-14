# Building stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json/ ./

RUN npm ci

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

# Production stage

FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json/ ./
RUN npm ci

COPY --from=builder /app/dist ./dist

ENV NODE_ENV=docker

EXPOSE 8000

CMD ["node", "dist/index.js"]


