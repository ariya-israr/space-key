class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
       this.visibilty=255
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5
      tint ( 225,this.visibility);
      pop ();
      image(this.image,this.body.position.x,this.image,this.body.position.y,50,50);
      
    }
  
  }

};