FROM node:alpine3.18

WORKDIR /usr/app
COPY . /usr/app

CMD npm install && node src/server.js