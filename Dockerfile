FROM node:14.1

RUN npm install express
WORKDIR /var/www
COPY ./server.js server.js
COPY ./dist ./dist
EXPOSE 3000
CMD node server.js
