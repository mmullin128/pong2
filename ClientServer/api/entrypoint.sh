#!/bin/bash
NODE_ENV=$(< $NODE_ENV_FILE)
DB_URI=$(< $DB_URI_FILE)
export DB_URI=$DB_URI

printenv

if [ "$NODE_ENV" == "TEST" ]
then
    echo "Running Tests"
    echo $ENV
    npm install --save-dev
    npm run test
elif [ "$NODE_ENV" == "PROD" ]
then
    echo "Starting Server"
    npm run start
else
    echo "Invalid NODE_ENV: $NODE_ENV"
fi