FROM node:14.1

WORKDIR /var/www
RUN npm install express
COPY ./server.js server.js
COPY ../dist ../dist
EXPOSE 3000
CMD node server.js
