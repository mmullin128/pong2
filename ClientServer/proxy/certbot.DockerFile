FROM ubuntu:latest
# Install Snapd
RUN apt update -y
RUN apt install snapd -y
#RUN snap install hello-world

# Install Certbot
RUN snap install --classic certbot -y


# Prepare Certbot Command
RUN ln -s /snap/bin/certbot /usr/bin/certbot