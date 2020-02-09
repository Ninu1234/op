const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log1 = new Log(600,100,200,20);
    ball = Bodies.circle(600,250,20);
    World.add (world,ball);
    var options = {
      bodyA: log1,
      bodyB: ball,
      stiffness: 0.04,
      length: 10
  }
  var chain = Matter.Constraint.create(options);
  World.add(world,chain);
}

function draw() {
  background(0);  
  Engine.update(engine);
  log1.display();
  fill ("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  strokeWeight(4);
  line(log1.body.position.x,log1.body.position.y,ball.position.x,ball.position.y);
}