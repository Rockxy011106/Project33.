var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState=1;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,3);
  wall1 = new Ground(0,400,3,800);
  wall2 = new Ground(800,400,3,800);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 65; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 65; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

 

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",25,530);
 text("500",105,530);
 text("500",185,530);
 text("500",265,530);
 text("100",345,530);
 text("100",425,530);
 text("100",505,530);
 text("200",585,530);
 text("200",665,530);
 text("200",745,530);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
//for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
  // }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if (particle!=null) {
  particle.display()
  if (particle.body.position.y>780) {
    if (particle.body.position.x<300) {
       score=score+500;
       particle=null;
       if(turn>=5) gameState="end";
    }
  }
}
if (particle!=null) {
  particle.display()
  if (particle.body.position.y>780) {
    if (particle.body.position.x>301&&particle.body.position.x<550) {
       score=score+100;
       particle=null;
       if(turn>=5) gameState="end";
    }
  }
}
if (particle!=null) {
  particle.display()
  if (particle.body.position.y>780) {
    if (particle.body.position.x>551&&particle.body.position.x<800) {
       score=score+200;
       particle=null;
       if(turn>=5) gameState="end";
    }
  }
}
  if (gameState=="end") {
    textSize(40);
    text("GAME OVER",270,240);
  }
}
function mousePressed(){
if (gameState!=="end") {
  turn++;
  particle=new Particle(mouseX,0,10,10)

}
}