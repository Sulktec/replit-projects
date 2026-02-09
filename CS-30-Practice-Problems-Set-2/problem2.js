/*
using the code from example 7, try to recreate the gravity and pipe generation of flappy bird

Note; controls: release a key to fall, hold the key to rise 

one way we can break up the problem:
    1) work on controls and gravity first 

    2) get pipes moving
        a) try to generate a new pipe when a key is pressed(hint push the data into the relevant arrays)

    3) properly generate the gap in the pipes 
*/
function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {

}