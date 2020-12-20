var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(25,30);

bullet = createSprite(500,200,50,50);
wall = createSprite(1200,200,60,100);

bullet.velocityX = 5;

thickness=random(22,83);

}

function draw() {
  background("back");  

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damege=0.5 *weight * speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);

  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
  hascollided(bullet,wall);
}

function hascollided(Ibullet,Iwall){
  bulletRightEdge=Ibullet.x+Ibullet.weight;
  wallLeftEdge=Iwall.x;
  if(bulletRightEdge>-wallLeftEdge){
    return true;
  }
  return false;
}
