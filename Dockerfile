FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN npm ci && npm --prefix frontend ci

COPY . .
RUN npm --prefix frontend run build

EXPOSE 8003

CMD ["npm", "start"]
