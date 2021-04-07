const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,10);
  for (var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i,75));
  }

  for (var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i,175));
  }

  for (var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i,275));
  }

  for (var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i,375));
  }
  for(var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height - 150, 10, 300));
  }
}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function draw(){
  background("black");
  Engine.update(engine);

  ground.display();

  

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  if(frameCount%20 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 100),10,10));

  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  

}