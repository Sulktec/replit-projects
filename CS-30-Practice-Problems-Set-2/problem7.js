
c1x = 300;
c1y = 300;
c1r = 50
c2x = 390;
c2y = 300;
c2r = 50

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {

    let collsion = false;
    
    circle(c1x, c1y, c1r*2);
    circle(c2x, c2y, c2r*2);

    collsion = Collision.circleCollision(c1x, c1y, c1r, c2x, c2y, c2r);

    if (collsion === true) {

        fill('red')
    }

    
}