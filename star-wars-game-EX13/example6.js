/*
this example will cover ch 0 of "The Nature of Code"

the nature of code focuses on modelling "nature" using math 
    some topics include: probability + vectors and their applications

*/

/*
    random walk: a path defined as a series of random steps 
        note a random walk can be used for the following:
            1) movement of molecules in a gas
            2) the foraging of an animal
            3) how a gamble moves around a casino 

*/
let ourWalker;


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    ourWalker = new Walker();
}

function draw() {
    ourWalker.step3();
    ourWalker.collisionCheck();
    ourWalker.show();

}