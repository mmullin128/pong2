#! /usr/bin/bash

#wait for server
sleep 5

#run certbot
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

#reload configuration
echo "reload" > cmd/exec.txt

sleep 5

echo "sleep" > cmd/exec.txt

