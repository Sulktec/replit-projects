//creating many particles 

let exhaustCloud = []


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {

    clear();
    background("lightSkyBlue");

    //create the particle
    if (mouseIsPressed) {
        exhaustCloud.push(new Exhaust(mouseX, mouseY));
    }

    //update the particle
    for (let i = 0; i < exhaustCloud.length; i++) {
        exhaustCloud[i].update();
        exhaustCloud[i].show();
    }
    //remove dead particles 
    if (exhaustCloud.length > 0 && exhaustCloud[0].isDead() === true) {
        exhaustCloud.shift();
    }

}