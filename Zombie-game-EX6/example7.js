/*
one of the benefits of OOP is testability. You can test the class isolation 

I reccomend making new classes in isolation. 
    1) make class first
    2) test it
    3) integrate it with other code 

*/
let zombie;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    zombie = new Walker(300,300);
}

function draw() {
    clear()
    background("lightSkyBlue");
    zombie.animate();
}