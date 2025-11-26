# Stage 1: Build React app
FROM node:20-alpine AS build

# Set working directory inside container
WORKDIR /kaur_muskanpreet_final_site

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine

# Copy the build output to nginx's default public folder
COPY --from=build /kaur_muskanpreet_final_site/build /usr/share/nginx/html

# Expose port 5575 inside the container
EXPOSE 5575

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
