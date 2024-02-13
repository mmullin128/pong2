FROM ubuntu:latest

RUN apt-get update -y && apt-get install certbot -y

COPY ./entrypoint.sh ./entrypoint.sh
COPY ./certbot_reloader.sh ./certbot_reloader.sh
RUN chmod +x ./entrypoint.sh
RUN chmod +x ./certbot_reloader.sh

CMD [ "./entrypoint.sh" ]
#RUN ln -s /snap/bin/certbot /usr/bin/certbot