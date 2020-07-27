class Player{

constructor(){
    this.rank = null;
    this.index= null;
    this.distance= 0;
    this.name= null;
};

getCount(){    
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
    playerCount=data.val();})
}

getCarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
        this.rank=data.val();
    });
}

static updateCarsAtEnd(rank){
    database.ref('/').update({
        carsAtEnd:rank
    })
}

updateCount(Count){

    database.ref('/').update({
    playerCount:Count
})
}

update(){
var playerIndex = "players/player"+this.index;

    database.ref(playerIndex).set({
   name:this.name,
   distance:this.distance
})
}

static getPlayerInfo (){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",function(data){
    allPlayers=data.val();})

}



}