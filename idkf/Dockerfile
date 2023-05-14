FROM node:17.4.0-alpine3.14 as build

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY ./ .
RUN npm run build

FROM nginx:1.21.6-alpine

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html

COPY --from=build /app/dist/idkf /usr/share/nginx/html

EXPOSE 80
