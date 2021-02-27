
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer ;

var plane;

var stone;

var sand1, sand2, sand3;

var iron;

var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
    
	plane = new Plane(600,height,1200,20);
    
	hammer = new Hammer(300,100,50,50);
	
    stone = new Stone(100,100,50,20);

	sand1 = new Sand(200,50,20,20);

	sand2 = new Sand(800,60,30,45);

    sand3 = new Sand(1100,50,45,10);

	iron = new Iron(200,10,50,63);
    
	rubber = new Rubber(289,20,50,50);

	console.log("blue is the hammer");

	console.log("grey is the iron");

	console.log("red is the rubber");

	console.log("sand is the yellow");

	console.log("green is the stone");
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  




plane.display();

hammer.display();

stone.display();

sand1.display();
sand2.display();
sand3.display();

iron.display();

rubber.display();
 
}



