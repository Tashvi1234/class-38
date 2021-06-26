class Game {
    constructor () {

    }
    getGameState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ('/gameState');
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                function(data){
                   gameState = data.val ();

                }
        );        
    }

    updateGameState (count) {
        var gameStateRef = database.ref ('/');
       gameStateRef.update({"gameState" : count});
    }

    start () {
        if (gameState == 0) {  // begin
            
            // create player
            player = new Player ();
            player.getPlayerCount ();

            // create form 
            form = new Form () ;
            form.display () ;
        }
        // create 4 cars
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];  // assign to cars array
        



    }
    
    // all 4 players joined , so start to play
    play () {
        form.hide();

        textSize (30) ;
        text ("Game Start", 120,100);
        Player.getPlayerInfo ();

        if (allPlayers != undefined) {
            var x = 0 ;
            var y ;
            var index = 0 ; 
            var display_position = 130;
            // display all players
            for (var plr in allPlayers){
                index = index + 1 ;
                y = displayHeight - allPlayers[plr].distance ; 
                x = x + 200 ;
                cars[index - 1].x = x ;
                cars[index - 1].y = y ;
                
                if (index == player.index)
                    cars[index-1].shapeColor = "red";  // mark the current player with red color
                else
                    cars[index-1].shapeColor = "black";  // mark the other player with black color
                  camera.position.x = displayWidth/2 ;
                 camera.position.y = cars[index - 1].y ;

                display_position+=20;
                textSize (15) ;
                //text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, display_position);
            }
            
        }
        
        if (keyIsDown (UP_ARROW) && player.index != null) {
            
            player.distance= player.distance + 50; // increment player distance
            player.updatePlayerNameAndDistance ();

        }

    }

} // end of class Player