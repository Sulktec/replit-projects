let particle = [];
let gravity;
let sign = [-1,0,1]
let particleLimit = 1;
let keyToggled = false;
let reached = false;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
    frameRate(500);
    gravity = createVector(0.3,0.1)

}

function keyPressed() {

    if (keyCode === 81) {

        keyToggled = true;
    } else {

        keyToggled = false;
    }

}

function draw() {

    if(keyToggled === true) {


        for(let i = 0; i < particleLimit; i++) {
            let color = [Math.random()*255,Math.random()*255,Math.random()*255]
            let randomx = Math.floor(Math.random() * 4)
            let randomy = Math.floor(Math.random() * 4)

            particle.push(new Confetti(300,300,color,10,0,Math.random()*360));

        }
    }

    if (particle.length >= particleLimit) {

        reached = true;
        keyToggled = false;
    }

    if (reached === true && particle.length === 0) {

        reached = false;
    }

    clear();
    background('lightSkyBlue');



    for(let i = 0; i < particle.length; i++) {
        particle[i].applyRotation(1);
        particle[i].updateAngle();
        particle[i].applyOppositeForce(gravity);
        particle[i].updateVelocity();
        particle[i].updatePos() 
        particle[i].updateLife()
        particle[i].show();



        if (particle[i].isDead() === true) {

            particle.splice(i,1)
            print("ded")
        }

    }


}