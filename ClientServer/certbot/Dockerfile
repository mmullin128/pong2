FROM ubuntu:latest

RUN apt-get update -y && apt-get install certbot -y

COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]
#RUN ln -s /snap/bin/certbot /usr/bin/certbot