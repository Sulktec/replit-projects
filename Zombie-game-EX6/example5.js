/*
more interesting behaviour can be modelled using "physics"

***we move away from thinking about motion as a changing coordinate 
towards thinking of motion using newtons first law. 
    Newton's first law: An object will not change its motion unless a forces acts on it.
        *motion: a change to an objects position with respect to a reference point.

    position = position + velocity //this is applying the to the object
    
    velocity = velcotiy + acceleration //this is how velocity changes over time (how fast it increases per frame)
        *any external forces applied to the object, can be "accumulated" in the acceration.
    

*/

let circle1;
let externalForce1; 

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    circle1 = new OurCircle(0,0,50,"lime");

    externalForce1 = createVector(0,0);
}


function keyPressed(){

    // to do the below, change external force to an appropriate vector, 
    //when a key is pressed, a force to the left side of the shape




    //when a key is pressed, a force is applied to the right side of the shape 
    
    
}


function draw() {

    //use your apply acceleration and apply force methods 
    
    circle1.applyAcceleration(externalForce1);
    circle1.applyVelocity();
    //circle1.drawOurCircle();
    circle1.drawOurSquare();
}