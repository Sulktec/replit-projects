/*

1) create several different rectangles, with the length being a multiple of the width 

2) use the collision and createhitbox functions given to you in the example

2.5) create a character that's a "circle"
2.72) create a character controller to move your character up, down, left, right

3) detect collision when you character hits any of the pipe hit boxes
*/


let rec1 = [200,200,75,150, 'blue'];
let rec2 = [100,300,50,300, 'green'];
let rec3 = [300,400,50,300, 'aqua'];


let recTotal = [rec1, rec2, rec3];

let player = [500, 500, 50];
let colour = 'black';
let movementX = 0;
let movementY = 0;
let speed = 3;


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {

    clear();
    background("lightSkyBlue");

    
    recFunction(recTotal);
    drawPlayer();
    
}


function drawPlayer() {

    push();

    fill(colour)
    player[0] = player[0] + movementX;
    player[1] = player[1] + movementY;
    circle(player[0], player[1], player[2]);

    pop();

}


function recFunction(array) {
    push();
    for(let i = 0; i < array.length; i++) {

        fill(array[i][4]);

        rect(array[i][0], array[i][1], array[i][2], array[i][3]);

        fill('red');

        let collsion;

        for(let g = 0; g < array[i][3]/array[i][2]; g++) {

            let offset =  array[i][3]/2 - array[i][2] * g;
            circle(array[i][0],array[i][1] + offset-(array[i][2]/2) ,array[i][2]);

            collision = circleCollision(player[0], player[1], player[2]/2, array[i][0], array[i][1] + offset-(array[i][2]/2), array[i][2]/2)

            if (collision == true) {

                colour = 'red';
                
            } 
        }
        

        
    }
    pop();
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

    if (keyCode === 67) {

        colour = 'black';
    }

}


function keyReleased() {

    movementX = 0;
    movementY = 0;

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