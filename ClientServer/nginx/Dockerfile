FROM nginx

COPY ./entrypoint.sh ./entrypoint.sh
COPY ./nginx_reloader.sh ./nginx_reloader.sh
RUN chmod +x ./entrypoint.sh
RUN chmod +x ./nginx_reloader.sh

CMD [ "./entrypoint.sh" ]
