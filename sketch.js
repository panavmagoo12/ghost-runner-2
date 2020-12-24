var ghost,background;
var tower,door,climber;
var doorgroup,climberGroup;



function preload(){
 climber1=loadImage("climber.png"); 
  door1=loadImage("door.png");
  jumping=loadImage("ghost-jumping.png");
  tower1=loadImage("tower.png");
  
}

function setup(){
createCanvas(600,600);
  
  tower=createSprite(300,300,20,20);
  tower.addImage(tower1);
  tower.velocityY=4;
  tower.y=tower.height/2;
  
  ghost=createSprite(300,300,20,20);
  ghost.addImage(jumping);
  ghost.scale=0.4;
 
  
 doorgroup=new Group(); 
  climberGroup=new Group();
  
}

function draw(){
 background("black");
  
  
if(tower.y>600){
  tower.y=300;
}
  
  doors();
  
  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
  
 if(keyDown("right")){
   ghost.x=ghost.x+3;
 }
 
  if(keyDown("space")){
    ghost.velocityY=-5 ;
  }
 ghost.velocityY=ghost.velocityY+0.2;
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  
  
 drawSprites(); 
}

function doors(){

  
  if(frameCount % 100===0){
    
   door=createSprite(Math.round(random(100,400)),-20,20,20);
    door.addImage(door1);
    door.velocityY=4;
    door.lifetime=150;
    doorgroup.add(door);
    
    ghost.depth=door.depth+1;
    
    climber=createSprite(door.x,30,20,20);
    climber.addImage(climber1);
    climber.velocityY=4;
    climber.lifetime=150;
    climberGroup.add(climber);
    
    
    
  } 
}

