FROM nginx:alpine


RUN apk add --no-cache --upgrade certbot
RUN mkdir /etc/nginx/templates
COPY default.conf.template /etc/nginx/templates

RUN certbot --nginx

#COPY ./html /html
#COPY nginx.conf /etc/nginx/nginx.conf

