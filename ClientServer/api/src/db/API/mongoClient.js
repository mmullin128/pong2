const { MongoClient } = require('mongodb');
const path = require('path');

function mongoClient(DB_URI) {
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

module.exports = { mongoClient, connect, disconnect }