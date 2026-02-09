var canvasX = 600;
var canvasY = 600;

// fish 1
//body
var fX = 300;
var fY = 300;
var dX = 80;
var dY = 40;

//tail
var tX = dX/2;

var tS = 25;

//eye
var eS = 10;

// gills
var gXO = 15;


// fish 2

// body
var fX2 = 200;
var fY2 = 200;
var dX2 = 40;
var dY2 = 20;
//tail
var tX2 = dX2/2;

var tS2 = 10;

//eye
var eS2 = 5;

// gills
var gXO2 = 8;


// fish 3

// body
var fX3 = 200;
var fY3 = 500;
var dX3 = 30;
var dY3 = 10;
//tail
var tX3 = dX3/2;

var tS3 = 5;

//eye
var eS3 = 5;

// gills
var gXO3 = 8;


// fish 4

// body
var fX4 = 100;
var fY4 = 550;
var dX4 = 50;
var dY4 = 25;
//tail
var tX4 = dX4/2;

var tS4 = 15;

//eye
var eS4 = 5;

// gills
var gXO4 = 8;


// fish 5

// body
var fX5 = 100;
var fY5 = 90;
var dX5 = 300;
var dY5 = 150;
//tail
var tX5 = dX5/2;

var tS5 = 50;

//eye
var eS5 = 25;

// gills
var gXO5 = 55;



function setup() {
  // runs at the start  
  createCanvas(canvasX, canvasY);
  background('lightSkyBlue');

    bg = loadImage('OceanImages/OceanImage.jpg');
}

function draw() {






    clear();
    background(bg);








    drawFish(fX, fY, dX, dY, tX, tS, eS, gXO);
    drawFish(fX2, fY2, dX2, dY2, tX2, tS2, eS2, gXO2);
    drawFish(fX3, fY3, dX3, dY3, tX3, tS3, eS3, gXO3);
    drawFish(fX4, fY4, dX4, dY4, tX4, tS4, eS4, gXO4);
    drawFish(fX5, fY5, dX5, dY5, tX5, tS5, eS5, gXO5);


    // fish 1

    let tailPos = fX+tS+tX;

    if ( tailPos < 0) {

        fX = canvasX - fX;

    }


    fX = fX - 10;

    // fish 2

    tailPos = fX2+tS2+tX2;

    if ( tailPos < 0) {

        fX2 = canvasX - fX2;

    }

    fX2 = fX2 - 4;

    // fish 3

    tailPos = fX3+tS3+tX3

    if ( tailPos < 0) {

        fX3 = canvasX - fX3;

    }

    fX3 = fX3 - 2;

    // fish 4

    tailPos = fX4+tS4+tX4

    if ( tailPos < 0) {

        fX4 = canvasX - fX4;

    }

    fX4 = fX4 - 7;







    // fish 5

    tailPos = fX5+tS5+tX5

    if ( tailPos < 0) {

        fX5 = canvasX - fX5 ;

    }

    fX5 = fX5 - 17;












}

function drawFish(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize, gillXOffset) {

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
    ellipse(fishX + gillXOffset, fishY, (fishDimensionX/2), fishDimensionY/2);


}


function updateFish() {



}








