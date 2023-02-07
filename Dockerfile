### STAGE 1: Build ###
FROM node:18.14.0 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install --ignore-scripts

### STAGE 2: Run ###
CMD ["npm", "run", "start"]