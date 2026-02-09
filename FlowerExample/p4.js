

function setup() {
  // runs at the start  
  createCanvas(600, 600);
  background('lightSkyBlue');
  angleMode(DEGREES);
}

function draw() {
    // logic goes here
    translate(300,300);
    
    fill('brown');
    ellipse(0,0,50,50);

    let rotationAmount = 25;
    let makePetelAmount = 15;
    let totalRotation = 360 - (rotationAmount * makePetelAmount);
    

    
    while (totalRotation < 360) {
        rotate(rotationAmount);
        fill('black');
        ellipse(115,0,150,50);
        fill('yellow');
        ellipse(100,0,150,50);

        totalRotation = totalRotation + rotationAmount;
        
    }
    

  
    
    
    
    
}