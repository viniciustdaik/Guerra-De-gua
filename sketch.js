const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var woodboximg;


function preload(){
  woodboximg = loadImage("woodbox.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);//400, 400
  
var woodboxtest = createSprite(width/ 2, height/2);
woodboxtest.addImage("woodbox", woodboximg);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() {
  background(51);

 


  Engine.update(engine);
  drawSprites();
  
}

