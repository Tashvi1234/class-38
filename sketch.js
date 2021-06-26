
var database; 

var game, form, player ;
var gameState = 0;
var playerCount  = 0;
var allPlayers;
 var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth - 20 , displayHeight - 30);
    database = firebase.database(); // connect to DB

    game = new Game ();
    game.getGameState ();
    game.start ();

}

function draw(){
    if (playerCount == 4) {  //no. of players is 4
        game.updateGameState (1);  
    }
    // gameState is 1, all players have joined
    // start to play - racing begins
    if (gameState == 1) {
        clear ();
        game.play ();
        drawSprites();
    }
}

