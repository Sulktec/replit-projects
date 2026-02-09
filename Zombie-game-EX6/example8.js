let particle = [];
let gravity;
let gravityRandomModifier = [-0.2,-0.1,0,0.1,0.2]

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    gravity = createVector(0,0.1)
    
}

function keyPressed() {

    if(keyCode === 81) {

        particle.push(new Particle(mouseX,mouseY));
    }
    
}

function draw() {


    
    clear();
    background('lightSkyBlue');
    

    for(let i = 0; i < particle.length; i++) {

        particle[i].applyForce(gravity);
        particle[i].update();
        
        particle[i].show();

        if (particle[i].isDead() === true) {

            particle.splice(i,1)
            print("ded")
        }

    }


}