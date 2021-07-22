FROM node:14.1

WORKDIR /var/www
COPY package.json package-lock.json ./
RUN npm install express

ENV PATH="./node_modules/.bin:$PATH"
COPY ./server.js server.js
COPY ./dist ./dist
EXPOSE 3000
CMD node server.js
