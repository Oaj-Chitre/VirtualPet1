var fixedRect;
var moveRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "purple";
  moveRect = createSprite(400,800,80,30);
  moveRect.shapeColor = "purple";
  fixedRect.velocityY = 5;
  moveRect.velocityY = -5;
}

function draw() {
  background(0,0,0);
    if(moveRect.x-fixedRect.x <= moveRect.width/2+fixedRect.width/2 &&
       fixedRect.x-moveRect.x <= fixedRect.width/2+moveRect.width/2)
       {
          moveRect.velocityX = moveRect.velocityX * (-1);
          fixedRect.velocityX = fixedRect.velocityX * (-1);
          moveRect.shapeColor = "blue";
          fixedRect.shapeColor = "blue";

       }


    if(moveRect.y-fixedRect.y <= moveRect.height/2+fixedRect.height/2 &&
       fixedRect.y-moveRect.y <= fixedRect.height/2+moveRect.height/2)
       {
          moveRect.velocityY = moveRect.velocityY * (-1);
          fixedRect.velocityY = fixedRect.velocityY * (-1);
          moveRect.shapeColor = "blue";
          fixedRect.shapeColor = "blue";
       }      
  drawSprites();
}