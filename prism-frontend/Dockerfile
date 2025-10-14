FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production-optimized static files
RUN npm run build

# Stage 2: Serve with Nginx

FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a basic nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default web port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

