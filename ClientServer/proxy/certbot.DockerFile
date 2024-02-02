FROM ubuntu:latest

RUN apt-get update -y && apt-get install -y certbot

# Install Snapd
#RUN apt update -y
#RUN apt install snapd -y
#RUN snap install hello-world

# Install Certbot
#RUN snap install --classic certbot


# Prepare Certbot Command
#RUN ln -s /snap/bin/certbot /usr/bin/certbot