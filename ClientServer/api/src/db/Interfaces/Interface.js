
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
        if (!this.COLLECTIONS.hasOwnProprty(collectionName)) throw new Error(`Invalid Collection Name: ${collectionName}`);
        return this.mongoClient.db(this.DB_NAME).collection(collectionName);
    }
    async insert(collectionName, id, instance) {
        const collection = this.getCollection(collectionName);
        const playerDoc = await collection.findOne({ id: id }, { projection: { _id: 0 }});
        if (playerDoc) throw new Error(`Player already exists. ID: ${id}`);
        await collection.insertOne({ id: id}, instance);
    }
    async delete(collectionName, id) {
        const collection = this.getCollection(collectionName);
        await collection.deleteOne({ "id" : id });
    }
    async get(collectionName, id) {
        const collection = this.getCollection(collectionName);
        const doc = await collection.findOne({ id: id }, { projection: { _id: 0 }});
        return doc;
    }
    async update(collectionName, id, updateDoc) {
        const collection = this.getCollection(collectionName);
        //if no player, throw error
        const playerDoc = await collection.findOne({ "id": id });
        if (!playerDoc) throw new Error(`Invalid Player ID: ${id}`);
        //set data
        await collection.updateOne(
            { "id" : id },
            updateDoc
        )
        return true;
    }
}
module.exports = Interface;