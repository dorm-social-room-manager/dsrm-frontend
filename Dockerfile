### STAGE 1: build react app  ###
FROM node:18.14.0 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install --ignore-scripts

### STAGE 2: build the final image ###
FROM nginx:1.17.8-alpine
COPY --from=build /usr/src/app /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]