#!/bin/bash


if [ -e /etc/letsencrypt/live/paddleballonline.com/fullchain.pem ]
then
    echo "SSL Certificate already installed"
else
    echo "No SSL Certificate, Starting certbot"
    #run certbot
    certbot certonly --non-interactive --webroot -w /letsencrypt -d paddleballonline.com --agree-tos --no-eff-email --email mattmullinc@gmail.com 
fi

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

#reload configuration
echo "reload" > cmd/exec.txt


CMD="continue"
CLOSE="close"

cerbot renew --dry-run

while [ "$CMD" != "$CLOSE" ];
do
    if [ -e /cmd/exec.txt ]
    then
        CMD=$(< /cmd/exec.txt)

    fi
    sleep 100
done