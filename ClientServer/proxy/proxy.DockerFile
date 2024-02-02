# syntax=docker/dockerfile:1
FROM nginx

COPY ./html /usr/shar/nginx/html

COPY nginx.conf /etc/nginx/conf
