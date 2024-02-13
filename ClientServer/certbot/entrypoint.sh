#!/bin/bash

CMD="continue"
CLOSE="close"

#run certbot reloader in the background
./certbot_reloader.sh &

#start bash terminal
bash