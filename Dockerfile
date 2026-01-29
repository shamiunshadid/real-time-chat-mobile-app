# Use the official Bun image
FROM oven/bun:latest

WORKDIR /app

# install backend dependencies
WORKDIR /app/backend
COPY backend/package.json backend/bun.lock* ./
RUN bun install --frozen-lockfile
COPY backend/ ./


# Expose the application port
EXPOSE 3000

# Start the application
CMD ["bun", "index.ts"]