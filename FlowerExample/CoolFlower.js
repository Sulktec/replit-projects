

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
    let makePetelAmount = 30;
    let totalRotation = 360 - (rotationAmount * makePetelAmount);
    
    
    while (totalRotation < 360) {
        
        let valueOne = Math.floor(Math.random() * 256);
        let valueTwo = Math.floor(Math.random() * 256);
        let valueThree = Math.floor(Math.random() * 256);
        
        fill(valueOne,valueTwo,valueThree);
        ellipse(100,0,150,50);

        rotate(rotationAmount);

        totalRotation = totalRotation + rotationAmount;
        
    }

    

  
    
    
    
    
}