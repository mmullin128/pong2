const { MongoClient } = require('mongodb');
const path = require('path');

function mongoClient(DB_URI) {
    if (DB_URI.split(':')[0] != "mongodb+srv") {
        throw new Error(`INVALID DB_URI ${DB_URI}`);
    }
    return new MongoClient(DB_URI);
}

const connect = (mongoClient) => new Promise((resolve,reject) => {
    mongoClient.connect()
    .catch((err) => reject(err))
    .then(() => {
        resolve("connected")
    });
});

const disconnect = (mongoClient) => new Promise((resolve,reject) => {
    mongoClient.close()
    .catch((err) => reject(err))
    .then(() => {
        resolve("disconnected")
    });
});

module.exports = { mongoClient : mongoClient, connect : connect, disconnect : disconnect }