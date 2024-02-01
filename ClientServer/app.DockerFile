# syntax=docker/dockerfile:1
FROM node:18-alpine

ARG PORT=8080

COPY package.json .
COPY ./dist/server ./dist/server
COPY ./dist/public ./dist/public

RUN npm install --include=prod

ENV PORT ${PORT}

EXPOSE ${PORT}

CMD ["npm", "start"]