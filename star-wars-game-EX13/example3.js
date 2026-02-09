
/*
    basics of animation:
    1) cover/erase old canvas
    2) calculate new position 
    3) draw at new position 


*/

//step 0 setup state variables
let x;
let y;


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    //step 0.5 initialize state variables
    x = 800;
    y = 300;
}

function draw() {
    // draw acts as an infinite loop

    //step1 clear the old image
    clear();
    background("lightSkyBlue");

    //step 2 calculate new position
    x = x-1;

    //draw at new position
    fill("lime");
    ellipse(x,y,120,60);
    

}