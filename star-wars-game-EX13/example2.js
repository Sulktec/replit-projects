// declare state variable at very top
let ourFish;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    //intialize variables here
    ourFish = new fish(300,300,0.5,4);
    
}



function draw() {
    clear();
    background("lightSkyBlue");
    
    ourFish.animateFish(); // <- call to animate fish



    
}