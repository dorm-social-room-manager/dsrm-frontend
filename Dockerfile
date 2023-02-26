### STAGE 1: build react app  ###
FROM node:18.14.2-alpine AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install --ignore-scripts
COPY . /app
RUN npm run build

### STAGE 2: build the final image ###
FROM nginx:1.23.3-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]