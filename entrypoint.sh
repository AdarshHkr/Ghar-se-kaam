#!/bin/sh

# Wait for database to be ready
echo "Waiting for database..."
until nc -z db 5432; do
  sleep 1
done
echo "Database is up!"

# Run migrations
echo "Running migrations..."
npx prisma migrate deploy

# Start the application
echo "Starting app..."
exec "$@"