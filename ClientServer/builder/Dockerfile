FROM node:18-alpine

ARG PORT=8080

COPY package.json .
COPY webpack.config.js .

RUN npm install --include=dev

CMD [ "npm", "run", "build" ]