FROM nginx

RUN mkdir /etc/nginx/templates
COPY default.conf.template /etc/nginx/templates

#COPY ./html /html
#COPY nginx.conf /etc/nginx/nginx.conf


# Install Snapd
RUN apt update
RUN apt install snapd
RUN snap install hello-world

# Install Certbot
RUN snap install --classic certbot


# Prepare Certbot Command
RUN ln -s /snap/bin/certbot /usr/bin/certbot
# Get and Install Certificates
RUN certbot --nginx