const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball,b1,b2,op1,op2;


function setup()
{
   createCanvas(600,600);

engine = Engine.create();
world = engine.world;


b2 = new Box(150,200,60,60);
b1 = new Box(200,100,60,60);
ground = new Ground(200,500,500,20);

}

function draw()
{

   background(255,255,255);

  Engine.update(engine);

  b2.display();
 b1.display();
 ground.display();


}





