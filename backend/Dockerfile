# Base image
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN yarn 

# Copy app files
COPY . .

# Build production app
RUN yarn run build

# Expose app port
EXPOSE 3000

# Start app
CMD ["yarn", "start"]
