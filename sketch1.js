
var gameState = "level1";
var gameState2 = 0;
var star;
var man, man_running;
var ground, invisibleGround, groundImage;
var edu,unemp, poll, pand, gw;
var eduGroup, pollGroup,pandGroup, unempGroup, gwGroup;

var poll,unemp,edu;
var score=0;

var gameOver, restart, bg;

function preload(){
 // man_running =   loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man10.png", "man11.png");
  man_running =   loadAnimation("man1.png", "man4.png", "man6.png"); 
  pollImg = loadImage("poll123.png");
  umempImg=loadImage('unemployment.jpg');
  eduImg=loadImage('noBook.png');
  gwImg=loadImage('gw.png');
  pandImg=loadImage('pandemic.png');
  starImg=loadImage('star.png');
  bgImg=loadImage('bg999.jpg');
  pencilImg=loadImage('pencil.png');
  jobImg=loadImage('briefcase.png');
  treeImg=loadImage('tree.png');
  vaccineImg=loadImage('vaccine.png');
  lawsImg=loadImage('laws123.png');
  yesImg = loadImage('yes.png');
  noImg = loadImage('no.png');
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg= createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg);
  bg.scale=3.5;
  bg.velocityY=-2;
  
  star=createSprite(420,57,10,10);
  star.addImage(starImg);
  star.scale=0.2;

  

  man= createSprite(800,600);
  //man.velocityY=2;
  man.addAnimation("running", man_running);
  man.scale = 0.6;

  problem = createSprite(man.x,50);

 
  eduGroup = new Group();
 
}

function draw() {
  background("white");
  
    problem.x = man.x;
    if(bg.y<200){
      bg.y=windowHeight/2;
    }
    if(gameState2===0){
    switch(gameState){
    case "level1": problem.addImage(eduImg);
                   problem.scale =0.5;
                   problem.velocityY = 1;
                   bg.velocityY=-2;
                  EduCollection();
                  break;
  
  }}
  
  if (gameState!=="end"){
    if(keyDown("RIGHT_ARROW")){
      man.x=man.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      man.x=man.x-5;
    }
    if(keyDown("UP_ARROW")){
      man.y=man.y-5;
    }
    if(keyDown("DOWN_ARROW")){
      man.y=man.y+5;
    }
    if (eduGroup.isTouching(man)){
     eduGroup.destroyEach();
    score=score+1;
   }
  
  /*if (problem.isTouching(man)){
    gameState = "end";
  }*/
  drawSprites();
  fill('pink');
    rect(479,30,120,40);
    
  fill('red');
  textSize(25);
   text("STARS: "+ score, 484.9,55);
  if(score === 5){
  gameState2 = 1;
  Questions();
  }
  }
  if(gameState ==="end"){ 
    background(0);
    fill('red');
    text('TRY AGAIN TO SAVE THE EARTH', 500,500);
    restart.visible = true;
  console.log("end");
 }
}
function EduCollection(){
  if (frameCount%50===0 && gameState=="level1" && gameState2 === 0){
    var pencil = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
    pencil.velocityX = 6;
    pencil.lifetime=500;
    pencil.addImage(pencilImg);
    pencil.scale =0.1;
    eduGroup.add(pencil);
      }
    
  }

   function Questions(){
     
    var yes=createSprite(500,400,50,50);
    yes.addImage(yesImg);
    yes.scale =0.2;
    var no=createSprite(1300,400,50,50);
    no.addImage(noImg);
    no.scale = 0.2;

    console.log(gameState);
    //Change Questions according to level, change gameState according to levels. 
    switch(gameState){
      case "level1":    textSize(30);
                        text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 100,200);
                        if(mousePressedOver(yes)){
                        no.destroy();
                        yes.destroy()
                        gameState = "end";
                       }else  if(mousePressedOver(no)){
                        no.destroy();
                        yes.destroy()
                        gameState = "level2";
                        gameState2 = 0;
                      }
                    break;
        }

    }
  
    