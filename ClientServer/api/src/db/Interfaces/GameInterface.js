const Interface = require("./Interface.js");

module.exports = class GameInterface extends Interface {
    
    static DB_NAME = "PONG1";

    static COLLECTIONS = {
        "game-META" : {
            "max" : 10, //this is the max number of collections that could be created
            "current" : 4 //initialize with the number of static collections
        },
        "game-default" : {
            "max" : 5000,
            "current" : 0
        },
        "game-test-1" : {
            "max" : 10,
            "current" : 0
        },
        "game-test-2" : {
            "max" : 1000,
            "current" : 0
        },
    };
    
    static testGame = {
        id : "test-game-1",
        name : "game1",
        collection: "game-test-1",
        status : "started",
        time: Date.now(),
        players: [
            { "collection": "player-test-1", "id" : "testId", "team" : "team1" }
        ],
        teams: [
            "team1",
            "team2"
        ],
        gameSettings: {
            "player-size" : "5",
            "player-speed" : "5",
            "ball-size" : "5",
            "ball-speed" : "5",
            "ball-spin" : "5",
            "color-1" : [ 1, 0, 0],
            "color-2" : [0, 0, 1],
            "color-3" : [0, 1, 0],
            "color-4" : [1, 1, 0],
            "abilities" : [
                'dash', 'spin', 'push'
            ]
        }
    }
    constructor(mongoClient) {
        super(mongoClient,GameInterface.DB_NAME, GameInterface.COLLECTIONS, GameInterface.testGame);
    }
    async addPlayer(collectionName, id, playerCollection, playerId, team) {
        const doc = await this.getWait(collectionName,id,50,2000);
        if (!doc) throw new Error(`No such Game: collectionName: ${collectionName}, id: ${id}`);
        const updateDoc = {
            $set : {
                "players.$[i].collection" : playerCollection,
                "players.$[i].id" : playerId,
                "players.$[i].team" : team
            }
        }
        const options = {
            arrayFilters: [
                { "i.id" : playerId }
            ]
        }
        return await this.update(collectionName, id, updateDoc,options);
    }

}