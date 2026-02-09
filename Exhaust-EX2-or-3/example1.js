/*
Example set 4 will deal with particle systems. 

a plain english definition of particle system: 
    drawing many small images, called particles, to produce a visual effect.
    
CS 30 will do this using OOP.

the rough pattern is: 
    1) make a class that holds the relevant information <- defines the behaviour 
    2) use that class to create many objects <- this doesn't have individual behaviour 

*/


let particle; 
let gravity;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    gravity = createVector(0,0.1);
    particle = new Particle(700,700);// cannot have a null variable, particle, because it still needs to run in draw 
}

function draw() {

    if(mouseIsPressed === true){
        particle = new Particle(mouseX,mouseY);
    }
    
    //clear screen
    clear();
    background("lightSkyBlue");

    //math 
    particle.applyForce(gravity);
    particle.update();
    //draw
    particle.show();
    
}