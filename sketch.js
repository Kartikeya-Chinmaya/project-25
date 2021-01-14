

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var dustbinObj,paperObject,groundObject,paperIMG,dustbinObjIMG;	
var world,engine;
var dustbinObj1,dustbinObj2,dustbinObj3

function preload(){
//paperIMG.loadImage("paper.png");
dustbinObjIMG = loadImage("images/dustbingreen.png");

}

function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here
	dustbinObj = createSprite(994,515,20,20);
	dustbinObj.addImage(dustbinObjIMG);
	dustbinObj.scale = 0.45;
   paperObject=new paper();


   groundObject=new ground();

   dustbinObj1=new dustbin(943,505,10,120);
   dustbinObj2=new dustbin(1002,555,90,10);
   dustbinObj3=new dustbin(1044,505,10,120);


  // var render = Render.create({
	//  element: document.body,
	  //engine: engine,
	  //options: {
	    //width: 1600,
	    //height: 700,
	    //wireframes: false
	  //}
	//});
	Engine.run(engine);
	//Render.run(render);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //Engine.update(engine);
  paperObject.display();
 dustbinObj1.display();
  dustbinObj2.display();
  dustbinObj3.display();
  groundObject.display();
  
	
 

  drawSprites();

}
 function keyPressed(){
if (keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{
		x :70,
		y : -80
	});
}

 }


