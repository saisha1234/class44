var bg;
var bgImage;
var flappyImage;
var bird;
function preload(){

  bgImage=loadImage("Background2.png");
  flappyImage=loadAnimation("flappy1.png","flappy2.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
   bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   bg.addImage("background",bgImage);
   bg.x=bg.width/2;
   bg.velocityX=-5;
   bird=createSprite(200,displayHeight/2,40,40);
   bird.addAnimation("bird",flappyImage)
}


function draw() {
  background("green");  

  if(bg.x<0){
  bg.x=windowWidth/2;

  }
  drawSprites();
}