#! /usr/bin/bash

certbot delete --cert-name example.com
certbot certonly -n --webroot -w /letsencrypt -d paddleballonline.com --agree-tos --no-eff-email --email mattmullinc@gmail.com 