FROM nginx

RUN mkdir /etc/nginx/templates
COPY default.conf.template /etc/nginx/templates

COPY ./html /html
#COPY nginx.conf /etc/nginx/nginx.conf
