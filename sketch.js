

function setup() {
  createCanvas(640, 640);
}

let diam = 150;


function draw() {
 background(225,55,155);
 circle(width/2,height/2,diam);
  diam = diam+10;
}