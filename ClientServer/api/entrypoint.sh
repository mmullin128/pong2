#!/bin/bash

if [ "$NODE_ENV" == "TEST" ]
then
    npm install --save-dev
    npm run test
elif [ "$NODE_ENV" == "PROD" ]
then
    npm run start
else
then
    echo "Error: Invalid NODE_ENV: $NODE_ENV"
fi