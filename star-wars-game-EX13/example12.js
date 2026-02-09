/*
This example will review the basics of OOP 
*/
let myShape;
function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    myShape = new Pillar(300,300,50,50);
}

function draw() {

    myShape.setCoords(mouseX,mouseY);
    myShape.renderShape(); // note that by calling  render shape method uses attributes created at the start at "myShape = new Pillar(300,300,50,50);"
    
    /* myShape.drawSquare(500,200,40,40); <- doesn't use values from start only values passed through, these are created as support function. */

    
    
}