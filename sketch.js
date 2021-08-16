var anthony,anthonyImg;
var boeing,boeingImg;
var boy,boyImg;
var jet;
var enemyjet;
var bullets,bulletImg;
var coins,coinsImg;
var bg;
var score=0;
var enemyImg;
var anthonyImg1;
var backg,bg1,bg2,background2;


function preload(){
anthonyImg=loadAnimation("soldier1.png","soldier2.png","soldier3.png","soldier4.png","soldier5.png","soldier6.png")
boeingImg=loadImage("jet.png")
boyImg=loadImage("boy.png")
coinImg=loadImage("coin.png")
bg=loadImage("background.jpg")
bulletImg=loadImage("bullet.jpg")
enemyImg=loadImage("enemy jet.png")
anthonyImg1=loadAnimation("soldier1.png")
bg1=loadImage("background.jpg")
bg2=loadImage("sky.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  boeing=createSprite(200,300,20,10)
  boeing.shapeColor="red"
  boeing.addImage(boeingImg)
  boeing.scale=0.5;
  

  anthony=createSprite(150,600,30,20)
  anthony.shapeColor="blue"
  anthony.addAnimation("Img",anthonyImg1)
  anthony.addAnimation("Img1",anthonyImg)
  anthony.scale=0.1
  

  //boy=createSprite(300,250,20,30)
  //boy.shapeColor="pink"
  

 

  }

  

function draw() {
background(bg1); 

boeing.x=mouseX;
boeing.y=mouseY;

if(keyDown ("SPACE")){
bullets=createSprite(boeing.x+80,boeing.y,10,40)
bullets.velocityX=+5;
bullets.addImage(bulletImg)
bullets.scale=0.01;
}
 
spawnjet();


textSize(20)
text ("SCORE"+score,200,50)

if(keyDown(LEFT_ARROW)){
  anthony.x=anthony.x-5;
 
  
}

if(keyDown (RIGHT_ARROW)){
  anthony.x=anthony.x+5;
  anthony.changeAnimation("Img1",anthonyImg)
}




  drawSprites();
}
function spawnjet(){
  if(World.frameCount% 100===0){
    enemyjet=createSprite(100,50,20,20)
    enemyjet.addImage(enemyImg)
    enemyjet.scale=0.2
    enemyjet.shapeColor="white"
    enemyjet.velocityX=-5;

    enemyjet.x=Math.round(random(1000,1200))
   enemyjet.y=Math.round(random(20,800))

   coins=createSprite(1000,200,20,30)
    coins.shapeColor="purple"
    coins.velocityX=-5
    coins.addImage(coinImg);
    coins.scale=0.05;

    coins.y=Math.round(random(20,800))
  }
  
  //if(bullets.isTouching(enemyjet)){
  //enemyjet.destroy();
  //bullets.destroy();
  //}
}



  
//if(keyDown(UP_ARROW)){
//boeing.y=boeing.y+5;
//}
 


