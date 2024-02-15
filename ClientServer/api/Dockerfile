FROM alpine:latest

RUN apk add nodejs npm

COPY package.json .
COPY package-lock.json .

COPY src src
COPY test test 
#its ok to install the small test files, 
#the entrypoint script will only install test modules if $NODE_ENV is set to "TEST"


COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh


RUN npm ci

CMD [ "ls" ]