FROM ubuntu:latest

RUN apt-get update -y && apt-get install -y certbot

COPY certbot_entry.sh ./certbot_entry.sh

RUN sudo chmod +x ./certbot_entry.sh

# Install Snapd
#RUN apt update -y
#RUN apt install snapd -y
#RUN snap install hello-world

# Install Certbot
#RUN snap install --classic certbot


# Prepare Certbot Command
#RUN ln -s /snap/bin/certbot /usr/bin/certbot