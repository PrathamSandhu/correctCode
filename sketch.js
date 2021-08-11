var db
var myGameState = 0;
var myPlayerCount = 0;
var form, player, game;
var allPlayers;
var distance = 0;

function setup(){
  db = firebase.database();
  //console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(myPlayerCount === 4){
    game.update(1);
  }
  if(myGameState === 1){
    game.play();
  }
}
