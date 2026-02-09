/*
the goal was to create 1 particle that looks like it's
"exhaust" thats coming out opposite the mouse vector

*/

let particle;
function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
    particle = new Exhaust(700,700);
}

function draw() {
    clear();
    background("lightSkyBlue");
    
    if(mouseIsPressed){
        particle = new Exhaust(mouseX,mouseY);
    }

    particle.update();
    particle.show();

}