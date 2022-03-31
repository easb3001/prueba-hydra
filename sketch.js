// javascript
// hydra

// puntillismo

var hc;
var pg;

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") });

/////////////////////////

noise(10).color(1,0,9).out();
// hush();

/////////////////////////

function setup() {
  createCanvas(1000,1000,WEBGL);
  console.log("hola mundo");
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
   background(100);
  // pg.image(hc, 0, 0);
  // noStroke();
  // pg es una imagen desde Hydra
  // pixeles
  //for(let i = 0; i < 200; i++){
  // let posX = random(width);
  // let posY = random(height);
  // console.log(pg.get(10, 10)); // RGB+A
  // fill(pg.get(posX, posY));
  // ellipse(posX, posY, 10, 10);
  // }
  
  push();
  texture(hc);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  rotateZ(frameCount*0.001);
  box(500);
  pop();
  
  
  
}
