var star, starimg, fairyimg, fairy, bg, bgimg, starBody, fairySound, star_options;
var engine;
var world;
var bodies;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  bgimg = loadImage("starNight.png");
  starimg = loadImage("star.png");
  fairyimg = loadAnimation("fairyImage1.png", "fairyImage2.png");
  fairySound = loadSound("JoyMusic.mp3");
}

function setup(){
	createCanvas(800, 750);
	
	fairySound.play();
	engine=Engine.create();
	world=engine.world;

	fairy=createSprite(130, 550);
	World.add(world, fairy);
	fairy.addAnimation("f", fairyimg);
	fairy.scale = 0.25;	

	star=createSprite(650, 38);
	star.addImage("s", starimg);
	World.add(world, star);
	star.scale = 0.2;	

	star_options={
		isStatic:true
	  }
	  starBody=Bodies.circle(685, 45, 1, star_options);
	  World.add(world, starBody);

	  Engine.run(engine);
}

function draw(){
  background(bgimg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  keyPressed();

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody, true);
  }
  drawSprites();
 }

 function keyPressed(){
	 if(keyDown(RIGHT_ARROW)) {
		 if (fairy.x < 550)
		 	fairy.x=fairy.x+10;
	 }

	 if(keyDown(LEFT_ARROW)) {
		if (fairy.x > 100)
			fairy.x=fairy.x-10;
	}

	if(keyDown(DOWN_ARROW)) {
		console.log("down");
		Matter.Body.setStatic(starBody, false);
	}

 }