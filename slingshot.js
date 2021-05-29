class Slingshot{
   constructor(bodyA,bodyB){
       var options={
           length:10,
           stiffness:0.04,
           bodyA:bodyA,
           bodyB:bodyB

       }
       this.slingshot= constraint.create(options);
       World.add(world,this.slingshot)

   }
display(){
var ponitA=this.slingshot.bodyA.position
var ponitB=this.slingshot.bodyB.position
strokeWeight(4);
line(ponitA.x,ponitA.y,ponitB.x,ponitB.y);
}
}