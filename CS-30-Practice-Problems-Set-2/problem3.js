/*
hitbox practice

    expand example 5 from example set 2

    The goal is to become familiar with using the circle collision method 

    add the following: 
        1) control your circle (character) so it can move up, down, left, right
            a) gravity is NOT needed

        2) add a test circle(object). When your character touches the object, 
        your character should change colour

        3) add another test object somewhere else on your canvas. 
*/
    


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}
            // x    y    s
let player = [300, 300, 50]
let circles = [300,500,50]
let circles2 = [500,100,50]
let colour = 'green';
let movementX = 0;
let movementY = 0;
let speed = 3;

function draw() {
    clear();
    background("lightSkyBlue");

    push();
    fill('blue')
    circle(circles[0], circles[1], circles[2]);
    pop();

    push();
    fill('blue')
    circle(circles2[0], circles2[1], circles2[2]);
    pop();

    drawPlayer();

    let collision = circleCollision(player[0], player[1], player[2]/2, circles[0], circles[1], circles[2]/2);
    let collision2 = circleCollision(player[0], player[1], player[2]/2, circles2[0], circles2[1], circles2[2]/2);

    if (collision == true || collision2 == true) {
        colour = 'red';
        
    } else {
        colour = 'green'
        
    }

    
    
}


function circleCollision(x1,y1,r1,x2,y2,r2) {

    let result = false;

    let distanceBetweenPoints = dist(x1,y1,x2,y2); 

    let totalRadius = r1 + r2;

    if(totalRadius > distanceBetweenPoints){
        result = true;
    }

    return result;

}

function keyPressed() {

    if (keyCode === 37) {

        movementX = -speed;
        
    }

    if (keyCode === 39) {

        movementX = speed;

    }

    if (keyCode === 38) {

        movementY = -speed;
        
    }

    if (keyCode === 40) {

        movementY = speed;

    }
    
}



function keyReleased() {

    movementX = 0;
    movementY = 0;
    
}

function drawPlayer() {

    push();

    fill(colour)
    player[0] = player[0] + movementX;
    player[1] = player[1] + movementY;
    circle(player[0], player[1], player[2]);
    
    pop();
    
}