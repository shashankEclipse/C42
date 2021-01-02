var canvas;
var player;
var backgroundImg;

function preload(){
    backgroundImg = loadImage("images/backgroundImg.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  bg = createSprite(displayWidth/2,displayHeight,width,height);
  bg.velocityY = 2

  bg.addImage(backgroundImg);
  player = createSprite(displayWidth/2,displayHeight/2+50);

          
  
  
}
function movement(){

    if(keyDown(LEFT_ARROW)){
      player.x-=10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x+=10;
    }
}

function draw(){
 background(0,0,255);
 //(bbackgroundackgroundImg)
 if(bg.y>displayHeight){
  bg.y = bg.height/2;
}

 drawSprites();
 movement();
}
