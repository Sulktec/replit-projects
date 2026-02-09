

function setup() {
  // runs at the start  
  createCanvas(600, 600);
  background('lightSkyBlue');
  angleMode(DEGREES);
}

function draw() {
    // logic goes here


// fish 1
    //body
    var fX = 300;
    var fY = 300;
    var dX = 80;
    var dY = 40;

    //tail
    var tX = dX/2;
        // NOTE: tail size (tS) is the same balue as eP;
    var tS = 25;

    //eye
    var eS = 10;

    
    
    

    



    drawFish(fX, fY, dX, dY, tX, tS, eS);


    



    

    


}

function drawFish(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize ) {

    //body
    fill('gold');
    ellipse(fishX,fishY, fishDimensionX, fishDimensionY);


    //tail
    fill('pink');
    triangle(fishX+tailX,fishY, fishX+tailSize+tailX, fishY-tailSize, fishX+tailSize+tailX, fishY+tailSize);

    //eye
    fill('black');
    ellipse(fishX-tailSize, fishY, eyeSize, eyeSize);

    // gills
    fill('yellow');
    ellipse(fishX + 15, fishY, (fishDimensionX/2), fishDimensionY/2);
    
}