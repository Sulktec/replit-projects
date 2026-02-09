

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
    var fX = 200;
    var fY = 300;
    var dX = 80;
    var dY = 40;

    //tail
    var tX = dX/2;
    var tS = 25;

    //eye
    var eS = 10;
    var eP = 25;

    // gills

    var gXO = 15;

    drawFish(fX, fY, dX, dY, tX, tS, eS, eP, gXO);


    // fish 2
    
    //body
     fX = 500;
     fY = 100;
     dX = 40;
     dY = 20;

    //tail
     tX = dX/2;
     tS = 25;

    //eye
    eS = 5;
    eP = 10;

    // horn

    let hXO = 4;
    let hW = 50;

    drawFishTwo(fX, fY, dX, dY, tX, tS, eS, eP, hXO, hW);

    

    


}

function drawFish(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize, eyePosition, gillsXOffset ) {

    //body
    fill('gold');
    ellipse(fishX,fishY, fishDimensionX, fishDimensionY);


    //tail
    fill('pink');
    triangle(fishX+tailX,fishY, fishX+tailSize+tailX, fishY-tailSize, fishX+tailSize+tailX, fishY+tailSize);

    //eye
    fill('black');
    ellipse(fishX-eyePosition, fishY, eyeSize, eyeSize);

    // gills
    fill('yellow');
    ellipse(fishX + gillsXOffset, fishY, (fishDimensionX/2), fishDimensionY/2);
    
}

function drawFishTwo(fishX, fishY, fishDimensionX, fishDimensionY, tailX, tailSize, eyeSize, eyePosition, hornXOffset, hornWidth) {

    //body
    fill('silver');
    ellipse(fishX,fishY, fishDimensionX, fishDimensionY);


    //tail
    fill('red');
    triangle(fishX+tailX,fishY , fishX+tailSize+tailX, fishY-tailSize, fishX+tailSize+tailX, fishY+tailSize);

    //eye
    fill('white');
    ellipse(fishX-eyePosition, fishY, eyeSize, eyeSize);

    // horn
    fill('black');
     triangle(fishX - tailX, fishY - hornXOffset, fishX - tailX, fishY + hornXOffset, fishX - tailX - hornWidth, fishY)

}