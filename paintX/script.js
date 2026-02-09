let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let paint;
let cursor;
let paintSize = 10;
let paintColour = 'black';

let pointXArray = [];
let pointYArray = [];
let pointSizeArray = [];
let pointColorArray = [];

let toggleDelete = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

        paint = new Stroke(0,0,paintSize,paintColour, pointXArray, pointYArray ,pointSizeArray,pointColorArray);
        cursor = new Cursor(0,0, paintSize);
}

function draw() {

    clear();

    checkArray();


    pointXArray = paint.findArrayX();
    pointYArray = paint.findArrayY();
    pointSizeArray = paint.findArraySize();


    for(let i = 0; i < pointXArray.length; i++) {
        noStroke();
        fill(pointColorArray[i])
        circle(pointXArray[i],pointYArray[i], pointSizeArray[i] )
        
    }

    
    cursor.setCoord(mouseX,mouseY);
    cursor.setScale(paintSize);
    cursor.drawCursor();
    
  
}

function mouseDragged() {


        
        paint.setArray(pointXArray, pointYArray, pointSizeArray);
        paint.setCoord(mouseX, mouseY);
        paint.setPaint(paintSize,paintColour);
        paint.placeStroke();
    
}

function keyPressed() {

    if (keyCode === 49 && paintSize > 1) { // 1

        paintSize--;
    
    }

    if (keyCode === 50) { // 2

        paintSize++

    }

    if (keyCode === 67) {  // c

        toggleDelete = true;

    } 
    

    if (keyCode === 69) { // e

        paintColour = "white";
    }

    if (keyCode === 82) { // r

        paintColour = "black";
    }

    
    
    
}

function checkArray() {

    if (pointXArray.length > 0 && toggleDelete == true) {

        paint.resetArray();
        
    } else {

        toggleDelete = false;
    }
    
}