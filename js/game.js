class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = db.ref("gameState");
        // sometimes the name of functoin remains anonymous like here.
        /* the line bellow reffers to to getting the value of the gameState forom the data base and 
           storing it on our local variable myGameState.
        */
        gameStateRef.on("value", (data) => {
        // .val() function gets the value of the database coloumn that is being reffed using .ref().
            myGameState = data.val();
        });
    }

    update(state){
        // "/" reffers to root folder of the database. 
        db.ref("/").update({
            gameState: state,
        });
    }
    async start(){
        if(myGameState === 0){
          player = new Player();
          var playerCountRef = await db.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            myPlayerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
      }
    
    play(){
        form.hide();
        textSize(30);
        text("Game Start!!", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_pos = 130;
            for(var plr in allPlayers){
                if(plr == 'player' + player.index ){
                    fill("red");
                }
                else
                fill("black");
                display_pos += 20;
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_pos)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}