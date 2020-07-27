class Game{

    constructor(){

    }

getState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState=data.val();
        })
}

    update(State){

        database.ref('/').update({
            gameState :State
            
        }
        )

    }

async start(){

if(gameState===0){

player = new Player();
var playerCountRef=await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
    playerCount=playerCountRef.val();
    player.getCount();
    }
form = new Form();
form.display();

}

car1= createSprite(100,200);
car1.addImage("lbl",car1Img);
car2= createSprite(300,200);
car2.addImage("lbll",car2Img);
car3= createSprite(500,200);
car3.addImage("lol",car3Img);
car4= createSprite(700,200);
car4.addImage("ll",car4Img);

cars =[car1,car2,car3,car4];

}

play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers!==undefined) {
        background(rgb(198,135,103));
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
       var index=0;
       var x = 175;
       var y = 0;
        //var displayPosition=130;
        for(var plr in allPlayers){

            index= index+1;
            x = x+220;
            y = displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;

            if (index===player.index){

                stroke(10);
                fill("red");
                ellipse(x,y,60,60);

                cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;

                

            }

        }

    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=20
        player.update();
}

if (player.distance>4200){

gameState=2;
player.rank++;
Player.updateCarsAtEnd(player.rank);

}




drawSprites();
}


end(){

console.log("gameEnded");
console.log(player.rank);

}

}