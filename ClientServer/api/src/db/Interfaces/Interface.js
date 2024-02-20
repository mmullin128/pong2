
class Interface {

    constructor(mongoClient,dbName,collections,baseInstance) {
        //create stateful access to the mongoClient
        this.mongoClient = mongoClient;
        
        //the name of the mongodb databases that this interface will have access to
        this.DB_NAME = dbName;

        
        //represents the current working collections on the database
        //the interface will be able to create/delete collections on the db
        //the collection keys will not be human readable if created by the interface
        //the interface will not delete collections labeled in the static COLLECTIONS variable
        this.COLLECTIONS = collections;

        this.keys = Object.keys(baseInstance);
        this.baseInstance = baseInstance;
    }
    getCollection(collectionName) {
        if (!this.COLLECTIONS.hasOwnProperty(collectionName)) throw new Error(`Invalid Collection Name: ${collectionName}`);
        return this.mongoClient.db(this.DB_NAME).collection(collectionName);
    }
    async insert(collectionName, id, instance) {
        const collection = this.getCollection(collectionName);
        const playerDoc = await collection.findOne({ id: id }, { projection: { _id: 0 }});
        if (playerDoc) throw new Error(`Document already exists. ID: ${id}`);
        await collection.insertOne(instance);
        return true;
    }
    async delete(collectionName, id) {
        const collection = this.getCollection(collectionName);
        await collection.deleteOne({ "id" : id });
        return true;
    }
    async get(collectionName, id) {
        const collection = this.getCollection(collectionName);
        const doc = await collection.findOne({ "id": id }, { "_id": 0 });
        return doc;
    }
    getWait(collectionName, id, intervalms=50, timeOutms=5000) {
        //will wait <timeOutMs> milliseconds for data to be populated
        let doc;
        return new Promise((resolve,reject) => {
            const checkInterval = setInterval( async () => {
                doc = await this.get(collectionName, id)
                if (doc) {
                    clearTimeout(timeOut);
                    clearInterval(checkInterval);
                    resolve(doc);
                }
            }, intervalms)
            const timeOut = setTimeout(() => {
                clearInterval(checkInterval);
                reject(`No such doc with id: ${id}`);
            }, timeOutms)
        })
    }
    async update(collectionName, id, updateDoc, options={}) {
        const collection = this.getCollection(collectionName);
        //if no player, throw error
        const playerDoc = await this.get(collectionName, id);
        if (!playerDoc) throw new Error(`Nonexistent Player ID: ${id}`);
        //set data
        await collection.updateOne(
            { "id" : id },
            updateDoc,
            options
        )
        return true;
    }
}
module.exports = Interface;