#!/bin/bash



#inital server configuration

CLOSE="close"
CONTINUE="continue"
RELOAD="reload"
SLEEP="sleep"
GET_SSL="get-ssl"

#initial config
echo "server {
    listen 80;
    location / {
        root $PUBLIC_DIR;
    }
    location /.well-known/acme-challenge/ {
        root $LETS_ENCRYPT_DIR;
    }
}" > /etc/nginx/conf.d/default.conf

#clear volume commands
#rest Command
echo "$CONTINUE" > /cmd/exec.txt


#start nginx_reloader in background
./nginx_reloader.sh &

#start nginx 
nginx

#start certbot command
echo "$GET_SSL" > /cmd/exec.txt


#run bash terminal
bash
