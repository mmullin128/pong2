#!/bin/bash

#inital server configuration
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
echo "$CONTINUE" > /cmd/exec.txt

CLOSE="close"
CONTINUE="continue"
RELOAD="reload"
SLEEP="sleep"


CMD=$CONTINUE


nginx


while [ "$CMD" != "$CLOSE" ];
do
    if [ -e /cmd/exec.txt ]
    then
        CMD=$(< /cmd/exec.txt)
        if [ "$CMD" == "$RELOAD" ]
        then
            nginx -s reload
            echo "" > /cmd/exec.txt
            echo "Reloading NGINX Configuration"
        fi
        if [ "$CMD" == "$SLEEP" ]
        then
            echo "Going to sleep for 6 hours"
            sleep 21600 
        fi
    fi
    sleep 3
done
