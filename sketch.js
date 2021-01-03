
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3
var gound1
var paper1


function preload()
{
	

	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	box1=new box(850,435,120,10)
	box2=new box(790,400,10,90)
	box3=new box(910,400,10,90)
    ground1=new ground(500,450,1000,20)
    paper1=new paper(75,400,40)
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
box1.display();
box2.display();
box3.display();
ground1.display();
paper1.display();
keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-12})
	
		}
	







}
