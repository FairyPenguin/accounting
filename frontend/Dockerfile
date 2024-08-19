# Use an official Node runtime as a parent image (Node 20 Alpine)
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./
# If you are using yarn, copy yarn.lock as well
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install 

# If you are using yarn, run `yarn install` instead
# RUN yarn install

# Bundle app source inside the Docker image
COPY . .

# Build your Next.js app
RUN npm run build

# Install PM2 globally
RUN npm install pm2 -g

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app using PM2
CMD ["pm2-runtime", "start", "npm", "--", "start"]

