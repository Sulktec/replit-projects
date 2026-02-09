/*
example 3 will cover the basics of how to make a particle emitter
which is a fancy way of saying create an object to handle everything 

the emitter class will contain the logic in one place 
*/

let myEmitter;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    myEmitter = new Emitter(300,300);
    
}

function draw() {

    clear()
    background("lightSkyBlue")
    
        myEmitter.run();
    

    

}