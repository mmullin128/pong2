FROM nginx

RUN mkdir /etc/nginx/templates
COPY default.conf.template /etc/nginx/templates

#COPY ./html /html
#COPY nginx.conf /etc/nginx/nginx.conf


# Install Snapd
RUN sudo apt update
RUN sudo apt install snapd
RUN sudo snap install hello-world

# Install Certbot
RUN sudo snap install --classic certbot


# Prepare Certbot Command
RUN sudo ln -s /snap/bin/certbot /usr/bin/certbot
# Get and Install Certificates
RUN sudo certbot --nginx