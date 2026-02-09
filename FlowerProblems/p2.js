

function setup() {
  // runs at the start  
  createCanvas(600, 600);
  background('lightSkyBlue');
  angleMode(DEGREES);
}

function draw() {
    // logic goes here
    translate(-200, 0);
    fill('brown');
    ellipse(300,300,25,25);
    fill('yellow');
    ellipse(300,252.5,25,75);
    ellipse(252.5,300,75,25);
    ellipse(300,347.5,25,75);
    ellipse(347.5,300,75,25);
    
    translate(200, 0);
    fill('green');
    ellipse(300,300,25,25);
    fill('blue');
    ellipse(300,252.5,25,75);
    ellipse(252.5,300,75,25);
    ellipse(300,347.5,25,75);
    ellipse(347.5,300,75,25);

    translate(200, 0);
    fill('grey');
    ellipse(300,300,25,25);
    fill('black');
    ellipse(300,252.5,25,75);
    ellipse(252.5,300,75,25);
    ellipse(300,347.5,25,75);
    ellipse(347.5,300,75,25);
    
    
    
}