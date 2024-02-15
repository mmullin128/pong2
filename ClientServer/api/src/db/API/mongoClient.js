import { MongoClient } from 'mongodb';
import path from 'path';

export function mongoClient(DB_URI) {
    return new MongoClient(DB_URI);
}

export const connect = (mongoClient) => new Promise((resolve,reject) => {
    mongoClient.connect()
    .catch((err) => reject(err))
    .then(() => {
        resolve("connected")
    });
});

export const disconnect = (mongoClient) => new Promise((resolve,reject) => {
    mongoClient.close()
    .catch((err) => reject(err))
    .then(() => {
        resolve("disconnected")
    });
});