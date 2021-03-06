
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob = new Paper(380, 350, 20)
	bob2 = new Paper(340, 350, 20)
	bob3 = new Paper(300, 350, 20)
	bob4 = new Paper(420, 350, 20)
	bob5 = new Paper(460, 350, 20)

	roof = new Roof(380, 150, 230, 20)

	rope1 = new Rope(bob.body, roof.body, 0, 0 )
	rope2 = new Rope(bob2.body, roof.body, -40, 0 )
	rope3 = new Rope(bob3.body, roof.body, -80, 0 )
	rope4 = new Rope(bob4.body, roof.body, 40, 0 )
	rope5 = new Rope(bob5.body, roof.body, 80, 0 )


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob3.body,bob3.body.position, {x : -80, y:-25});
	}
  }


