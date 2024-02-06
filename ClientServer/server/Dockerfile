FROM node:18-alpine

ARG PORT=8080

COPY package.json .
COPY ./dist /dist
COPY ./src  /src

COPY ./app_entry.sh ./app_entry.sh

RUN chmod +x ./app_entry.sh

RUN apk add --no-cache --upgrade bash

RUN npm install --include=dev

ENV PORT ${PORT}

EXPOSE ${PORT}

#CMD ["npm", "build && start"]
ENTRYPOINT [ "./app_entry.sh" ]