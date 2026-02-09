/*
this example will show how to replace the box with an image
*/

// create a global variable to track image state
let playerImg;
let dogeX = 300;
let dogeY = 300;

// this is called before
function preload(){
    playerImg = loadImage('images/doge3.png');
    
}

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    imageMode(CENTER); // this makes x,y control center of image
    
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {
    
    /*
    image syntax in center mode
    image(imageVar,x,y,width,height);
    */
    image(playerImg,dogeX,dogeY,50,50)
    
}