const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var rainbowbg, couchbg, fronthousebg, forestbg, treeandrockbg, 
desertbg, butterflyplacebg, sidewalkbg, abeatifulplacebg, powerpolebg;

var woodboximg;

var greenwaterballoonimg, pinkwaterballoonimg, yellowwaterballoonimg;

var gamestate = "select", mapselected = "Não Selecionado";

function preload(){
  //backgrounds

  rainbowbg = loadImage("./backgrounds/rainbowbackground.png");
  couchbg = loadImage("./backgrounds/couchbackground.png");
  fronthousebg = loadImage("./backgrounds/frontofthehousebackground.png");
  forestbg = loadImage("./backgrounds/forestbackground.png");
  treeandrockbg = loadImage("./backgrounds/treeandrockbackground.png");
  desertbg = loadImage("./backgrounds/desertbackground.png");
  butterflyplacebg = loadImage("./backgrounds/butterflyplacebackground.png");
  sidewalkbg = loadImage("./backgrounds/sidewalkbackground.png");
  abeatifulplacebg = loadImage("./backgrounds/abeatifulplacebackground.png");
  powerpolebg = loadImage("./backgrounds/powerpolebackground.png");
  
  //waterballoons
  greenwaterballoonimg = loadImage("./waterballoons/greenwaterballoon.png");
  pinkwaterballoonimg = loadImage("./waterballoons/pinkwaterballoon.png");
  yellowwaterballoonimg = loadImage("./waterballoons/yellowwaterballoon.png");

  //defense
  woodboximg = loadImage("./defense/woodbox.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);//400, 400
  
var woodboxtest = createSprite(width/ 2, height/2);
woodboxtest.addImage("woodbox", woodboximg);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() {
  //background(51);

  var randommap = Math.round(random(1, 10));

  if(gamestate == "select" && mapselected == "Não Selecionado"){
    if(randommap == 1){
      mapselected = "Floresta";
      background(forestbg);
    }else if(randommap == 2){
      mapselected = "Arco-Íris";
      background(rainbowbg);
    }
    else if(randommap == 3){
      mapselected = "Frente Da Casa";
      background(fronthousebg);
    }
    else if(randommap == 4){
      mapselected = "Sofá";
      background(couchbg);
    }
    else if(randommap == 5){
      mapselected = "A Árvore E A Pedra";
      background(treeandrockbg);
    }
    else if(randommap == 6){
      mapselected = "Deserto";
      background(desertbg);
    }
    else if(randommap == 7){
      mapselected = "Lugar Das Borboletas";
      background(butterflyplacebg);
    }
    else if(randommap == 8){
      mapselected = "Calçada";
      background(sidewalkbg);
    }
    else if(randommap == 9){
      mapselected = "Poste De Energia";
      background(powerpolebg);
    }
  }
  


  Engine.update(engine);
  drawSprites();
  
}

/*function selectmap(){
  var randommap = Math.round(random(1, 11));

  if(randommap == 1){
    image()
  }
}*/