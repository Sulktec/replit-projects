let birdPos;
let birdAccel;
let birdVel;
let birdMaxVel;


function setup() {
  createCanvas(600, 10000);
  background(255);

    birdPos = createVector(width / 2, 0);
    birdAccel = createVector(0, 0.1);
    birdVel = createVector(0, 0.1);
    birdMaxVel = 20;
}



// bird jumps increases aceleration

// acceleration increases velocity

// after awhile acceleration decreases goes into negative and then decreases velocity

function draw() {

    bird();

}

function bird() {

    

    position();
    velocity();

    print(birdPos)
    strokeWeight(20);
    point(birdPos)
}


function position() {

    birdPos.add(birdVel)
    
}

function velocity() {

    if (birdVel.y < birdMaxVel) {

        birdVel.add(birdAccel)

    } 
    
}

function keyPressed() {


     if (keyCode === UP_ARROW) {
        // make bird jump
         print("jump");
      }
    
}