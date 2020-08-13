var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
 movingRect=createSprite(100,200,20,80);
 fixedRect=createSprite(200,200,20,80);
}

function draw() {
  background("BLACK");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(fixedRect.x-movingRect.x);
  if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2) {
    movingRect.shapeColor="RED";
    fixedRect.shapeColor="RED";
  }
  else {
    movingRect.shapeColor="GREEN";
    fixedRect.shapeColor="GREEN";
  }
  drawSprites();
}