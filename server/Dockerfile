FROM node:10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy the source code ...
COPY src src
COPY index.js ./
COPY babel.config.js ./

# Run
CMD [ "npm", "run", "start:dev" ]
