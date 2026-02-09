// test the emitter

let myEmitter;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    myEmitter = new Emitter(400,400, PI); 
}

function draw() {
    myEmitter.run();
}