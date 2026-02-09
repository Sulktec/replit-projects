

function setup() {
  // runs at the start  
  createCanvas(600, 600);
  background('lightSkyBlue');
  angleMode(DEGREES);
}

function draw() {
    // logic goes here
    fill('brown');
    ellipse(300,300,50,50);
    fill('yellow');
    ellipse(300,215,50,150);
    ellipse(215,300,150,50);
    ellipse(300,385,50,150);
    ellipse(385,300,150,50);
    
    
}