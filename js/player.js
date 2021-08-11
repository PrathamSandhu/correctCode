class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var playerCountRef = db.ref("playerCount");
        // sometimes the name of function remains anonymous like here.
        /* the line bellow reffers to to getting the value of the playerCount forom the data base and 
           storing it on our local variable myplayerCount.
        */
        playerCountRef.on("value",(data) => {
        // .val() function gets the value of the database coloumn that is being reffed using .ref().
            myPlayerCount = data.val();
        });
    }

    updateCount(count){
        // "/" reffers to root folder of the database. 
        db.ref("/").update({
            playerCount: count,
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = db.ref("players");
        // this is arrow function which is only availbe in ES6.
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}