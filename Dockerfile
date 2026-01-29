# Stage 1: Builder
# This stage installs dependencies and builds the production application.
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Generate the Prisma client based on your schema.
# This is a crucial step to ensure your application can talk to the database.
RUN npx prisma generate

# Build the Next.js application for production.
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---

# Stage 2: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Use --chown to give the nextjs user ownership immediately
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/entrypoint.sh ./entrypoint.sh
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

RUN chmod +x entrypoint.sh

USER nextjs
ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "server.js"]