FROM node:18-alpine


COPY package.json .
COPY package-lock.json .

COPY src src
COPY test test 
#its ok to install the small test files, 
#the entrypoint script will only install test modules if $NODE_ENV is set to "TEST"

RUN npm ci


COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "/bin/bash -c ./entrypoint.sh" ]