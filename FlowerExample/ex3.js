

function setup() {
  // runs at the start  
  createCanvas(600, 600);
  background('lightSkyBlue');
  angleMode(DEGREES);
    
}

function draw() {
// logic goes here
    fill('green');
    rect(50,50,60,60);

    rotate(8);
    fill('aqua');
    rect(50,50,60,60);

    rotate(8);
    fill('gold');
    rect(50,50,60,60);
    
}