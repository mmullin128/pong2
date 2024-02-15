#!/bin/bash
NODE_ENV="UNDEFINED"
if [ "$NODE_ENV" == "TEST" ]
then
    npm install --save-dev
    npm run test
elif [ "$NODE_ENV" == "PROD" ]
then
    npm run start
else
    echo "Error: Invalid NODE_ENV: $NODE_ENV"
fi