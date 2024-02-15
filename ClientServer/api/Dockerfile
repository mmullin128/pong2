FROM ubuntu:latest

RUN curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

COPY package.json .
COPY package-lock.json .

COPY src src
COPY test test 
#its ok to install the small test files, 
#the entrypoint script will only install test modules if $NODE_ENV is set to "TEST"


COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh


RUN npm ci

ENTRYPOINT [ "./entrypoint.sh" ]