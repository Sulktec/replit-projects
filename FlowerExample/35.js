

function setup() {
  // runs at the start  
  createCanvas(600, 600);
  background('lightSkyBlue');
  angleMode(DEGREES);
}

function draw() {
    // logic goes here
    
    //body
    var fX = 300;
    var fY = 300;
    var dX = 80;

    //tail
    var tX = dX/2;
        // NOTE: tail size (tS) is the same balue as eP;
    var tS = 25;

    //eye
    var eS = 10;

    // gills

    
    

    



    drawFish(fX, fY, dX, tX, tS, eS);


    



    

    


}

function drawFish(fishX, fishY, fishDimensionX, tailX, tailSize, eyeSize ) {

    //body
    fill('gold');
    ellipse(fishX,fishY, fishDimensionX, 40);


    //tail
    fill('pink');
    triangle(fishX+tailX,fishY, fishX+tailSize+tailX, fishY-tailSize, fishX+tailSize+tailX, fishY+tailSize);

    //eye

    fill('black');
    ellipse(fishX-tailSize, fishY, eyeSize, eyeSize);
    
}