

let canvasX = 600;
let canvasY = 600;

function setup() {
  // runs at the start  
  createCanvas(canvasX, canvasY);
  background('lightSkyBlue');
  angleMode(DEGREES);
}


// logic goes here

// fish 1
//body
var fX = 300;
var fY = 300;
var dX = 80;
var dY = 40;

//tail
var tX = dX/2;
    // NOTE: tail size (tS) is the same balue as eP (eye position);
var tS = 25;

//eye
var eS = 10;



function draw() {



    
    
    
    clear();
    
    background('lightSkyBlue');

    updateFish()
    
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

function movement(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize) {

    clear();
    background('lightSkyBlue');
    updateFish(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize);
    drawFish(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize);

    

    
    
}

function updateFish() {

    let tailPos = fX+tS+tX;
    
    if ( tailPos < 0) {

        fX = canvasX + dX;
    
    }

    fX = fX - 10;

}

    
