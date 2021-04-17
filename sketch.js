var fixedRect, fixedRect1, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  fixedRect1 = createSprite(200, 400, 80, 30);
  fixedRect1.shapeColor = "red";
  fixedRect1.debug = false;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect, movingRect)) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  } else if(isTouching(movingRect, fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "red";
  }

  drawSprites();
}

