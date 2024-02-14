FROM node:18-alpine

ARG PORT=8080

COPY package.json .
COPY package-lock.json .
COPY webpack.config.js .
COPY src src

RUN npm ci

CMD [ "npm", "run", "build" ]