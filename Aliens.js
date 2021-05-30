class Alien{
    constructor(x,y){
        var option = {
            isStatic: false
        }
        this.alien1 = loadImage("images/pic1");
        this.alien1 = Bodies(x,y,50,50,options);
        this.alien2 = loadImage("images/pic4");
        this.alien3 = loadImage("images/pic7");
        this.alien4 = loadImage("images/pic10");
        
        World.add(world,this.alien1);
 }
 
 display(){
     var pos = this.alien1.position
     imageMode(CENTER)
     image(this.alien1,pos.x,pos.y+50);
 }
}