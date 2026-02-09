
let ourforce;
let ourShape;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(2000, 600);
    background("lightSkyBlue");

    ourforce = createVector(0,0);// vectors should be declared in setup 
    ourShape = new OurSquare(0,300,50,50,"lime");
}

function keyPressed(){
    if(keyCode === 71){//g
        ourforce.add(createVector(0.05,0))
        //createVector(x,y), x,y can be decimal numbers. 
        //create vector creates a 2d vector based on the x and y coordinates given.
    }
}

function draw() {
    //clear
    clear();
    background("lightSkyBlue");
    
    //math
    ourShape.applyForce(ourforce);
    ourShape.updatePosition();

    //draw
    ourShape.drawOurSquare();
    
}
/*
add to the ourforce vector in the up, down, left,right directions
depending on the key that's pressed 

*/