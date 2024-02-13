#!/bin/bash



CLOSE="close"
CONTINUE="continue"
RELOAD="reload"
SLEEP="sleep"
GET_SSL="get-ssl"
TEST_RENEW="test-renew"

CMD=$CONTINUE



while [ "$CMD" != "$CLOSE" ];
do
    if [ -e /cmd/exec.txt ]
    then
        CMD=$(< /cmd/exec.txt)
        if [ "$CMD" == "$RELOAD" ]
        then
            echo "Nginx Reloader: Reloading NGINX Configuration"
            nginx -s reload
            echo "$TEST_RENEW" > /cmd/exec.txt
        fi
        if [ "$CMD" == "$SLEEP" ]
        then
            echo "Nginx Reloader: going to sleep for 6 hours"
            sleep 21600 
        fi
    fi
    sleep 3
done