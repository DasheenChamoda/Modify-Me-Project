# Use Node.js 18 LTS as base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY ./src ./src

# Expose the port your app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev"]