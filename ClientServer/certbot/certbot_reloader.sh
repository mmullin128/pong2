#!/bin/bash


CMD="continue"
CLOSE="close"
RELOAD="RELOAD"
GET_SSL="get-ssl"
TEST_RENEW="test-renew"
RENEW="renew"


while [ "$CMD" != "$CLOSE" ];
do
    if [ -e /cmd/exec.txt ]
    then
        CMD=$(< /cmd/exec.txt)

        if [ "$CMD" == "$GET_SSL" ]
        then
            echo "Starting Certbot"
            certbot certonly --non-interactive --webroot -w /letsencrypt -d paddleballonline.com --agree-tos --no-eff-email --email mattmullinc@gmail.com 
            #edit the server configuration file
            echo "server {
                listen 443 ssl default_server;
                listen [::]:443 ssl default_server;
                server_name paddleballonline.com;
                ssl_certificate /etc/letsencrypt/live/paddleballonline.com/fullchain.pem;
                ssl_certificate_key /etc/letsencrypt/live/paddleballonline.com/privkey.pem;
                
                location / {
                    root $PUBLIC_DIR;
                }
                
                location /.well-known/acme-challenge/ {
                    root $LETS_ENCRYPT_DIR;
                }
            }" > /config/default.conf
            echo "$RELOAD" > cmd/exec.txt
        elif [ "$CMD" == "$TEST_RENEW" ]
        then
            cerbot renew --dry-run
            echo "$CONTINUE" > cmd/exec.txt
        fi
    fi
    sleep 10
done