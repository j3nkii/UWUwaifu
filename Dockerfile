# Use the official Node.js image from Docker Hub
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port (optional if you want to bind to a host port, but not needed for Discord bots)
EXPOSE 3000

# Start the bot (replace "index.js" with the entry point of your bot)
CMD ["node", "index.js"]