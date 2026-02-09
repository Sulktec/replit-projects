let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(700, 700);
    angleMode(DEGREES);
   rectMode(CENTER);
     
  background('lightskyblue');
}

let angle = 0;

function draw() {

    
    background('lightskyblue');
    
    translate(width/2 -25 , height/2);

    noStroke();

    fill("green");
    rect(0, 200, 20, 400);
    
    fill("black");
    circle(0,0,50);
    
    rotatingPetal();
   
   
}

function rotatingPetal() {

    push();

    ellipseMode(CORNER);
    
    angle++;

    rotate(angle);

    fill("yellow");

    for (let index = 0; index < 4*25; index = index + 25) { // x*25 x is the amount of circles 
    
    circle(index+9, index+9, 50);
    }

    
    
    pop();

    
}