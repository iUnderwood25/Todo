# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build app
RUN npm run build

# Start app
CMD ["node", "dist/main"]
