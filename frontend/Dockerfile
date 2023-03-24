# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN yarn

# Copy the current directory contents to the container at /app
COPY . .

# Set environment variables
ENV PORT=5000

# Expose port 5000 for the backend
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
