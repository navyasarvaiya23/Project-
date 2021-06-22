
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation(sea.png)
shipImg1=addImage();

sea.createSprite(200,50,900,80)
sea.addImage(seaImg);
velocityX = -3
//code to reset the background
if (sea.x < 0) {
  sea.x = sea.width/2;
}
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,60,400,50)
  ship.setAnimation = 5
}

function draw() {
  background("blue");
 
}