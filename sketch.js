var thickness, wall;
var bullet, speed, weight;
var damage;






function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
 
  bullet.velocityX = speed;
  if(wall.x - bullet.x <bullet.width + wall.width/2){
    bullet.velocityX=0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage >10){
      bullet.shapeColor=color("red");
    }
    if(damage < 10){
      bullet.shapeColor = color("green");
    }
    
      
    }
    drawSprites();
  }

  


