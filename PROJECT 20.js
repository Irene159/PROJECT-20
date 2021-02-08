var car,wall,speed,weight;

function setup() {
  createCanvas(800,400);
  wall=createSprite(700,400/2,60,height/2);
  car=createSprite(50,200,50,50);

  wall.shapeColor=(80,80,80);
  car.shapeColor="white";

}

function draw() {
  background("black");  
  drawSprites();

  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

  // collision detection
  if(car.x-wall.x <(wall.width + car.width)/2 ){
  
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
  
    
    if(deformation<100){
     car.shapeColor=color(255,0,0);
    }
    if(deformation>100 && deformation<180){
      car.shapeColor=color(230,230,0);
    }
    if(deformation>180){
      car.shapeColor=color(0,255,0);
    }
   }
  }