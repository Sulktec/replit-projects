/*


    1)create a controller to move a square
        a) attach a circle hitbox to your square
        b) create a toggle for the square


    2)create a larger rectangle
        a) this is stationary 
        b) add hitboxes to the shapes
        c) your character should change colour when colliding with the circles

    3)create another larger rectangle different from the first 
        a) this is stationary 
        b) add hitboxes to the shapes
        c) your character should change colour when colliding with the circles
*/


let rec1 = [200,200,50,200, 'blue'];
let rec2 = [100,300,50,300, 'yellow'];



let recTotal = [rec1, rec2];

let player = [500, 500, 50];
let colour = 'black';
let movementX = 0;
let movementY = 0;
let speed = 3;
let toggleHit = false;
let hitBoxColour = 'black';


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

    if (toggleHit == false) {

        playerHitBox(colour)
    } 

    if (toggleHit == true) {

        playerHitBox('aqua')
    }

}


function drawPlayer() {

    push();

    fill(colour)
    player[0] = player[0] + movementX;
    player[1] = player[1] + movementY;
    square(player[0], player[1], player[2]);

    pop();

}

function playerHitBox(c) {
    push();
    noStroke();
    fill(c)
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

    if (keyCode === 84) {

        if (toggleHit == false) {

            toggleHit = true;

          
        } else if (toggleHit == true) {

            toggleHit = false;

      
        }

        
        
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