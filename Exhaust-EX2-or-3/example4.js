// to test the particle, make 1 particle 

let particle;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    //the goal is to put test values into the parameters and see if the expected output happens 
    particle = new Exhaust(300,300,90);
}

function draw() {

    // want to verify the behaviour, particle shoots in the opposite direction of heading
    particle.update();
    particle.show();

}