import Interface from "./Interface.js";

export default class PlayerInterface extends Interface {
    
    static DB_NAME = "PONG1";

    static COLLECTIONS = {
        "player-META" : {
            "max" : 10, //this is the max number of collections that could be created
            "current" : 4 //initialize with the number of static collections
        },
        "player-default" : {
            "max" : 5000,
            "current" : 0
        },
        "player-test-1" : {
            "max" : 10,
            "current" : 0
        },
        "player-test-2" : {
            "max" : 1000,
            "current" : 0
        },
    };
    
    static testPlayer = {
        id : "1234",
        name : "player1",
        collection: "player-test-1",
        role : "test",
        status : "idle",
        gameURL : "none",
        playerData: {
            "length" : 5,
            "speed" : 5,
            "turn-speed" : 5,
            "color-1" : [ 1, 0, 0],
            "color-2" : [0, 0, 1],
            "abilities" : [
                'dash'
            ]
        }
    }
    constructor(mongoClient) {
        super(mongoClient,PlayerInterface.DB_NAME, PlayerInterface.COLLECTIONS, PlayerInterface.testPlayer);
    }
    async updatePlayerData(collectionName, id, data) {
        const updateDoc = {
            $set : {
                "playerData" : data
            }
        }
        await this.update(collectionName, id, updateDoc);
    }
    async updateGameStatus(collectionName, id, role, status, gameURL) {
        const updateDoc = {
            $set : {
                "role" : role,
                "status" : status,
                "gameURL" : gameURL
            }
        }
        await this.update(collectionName, id, updateDoc);
    }

}