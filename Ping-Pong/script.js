

let paddle1;
let paddle2;



let canvasX = 700;
let canvasY = 500;

let ballX = canvasX/2;
let ballY = canvasY/2;
let ballDirectionX = 0;
let ballDirectionY = 0;

if (Math.random() > 0.49) {

    ballDirectionX = -1;
    ballDirectionY = -1;
    
} else {

    ballDirectionX = 1;
    ballDirectionY = 1;
    
}

let ballSpeed = 1; // ballSpeedX is ballSpeed, ballSpeedY is 2*ballSpeed




let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(canvasX, canvasY);
  background('black');

    paddle1 = new paddle(0,0,87,83,25,0)
    paddle2 = new paddle(canvasX-20,0,38,40,0,0)
    
}



function draw() {

    clear();
    background('black');

    paddle1.draw();
    paddle2.draw();

    ball();


    
}

// ballSpeedX is ballSpeed, ballSpeedY is 2*ballSpeed


function ballMove() {

    ballX = ballX + (ballSpeed * ballDirectionX);
    ballY = ballY + ((ballSpeed*1.2)*ballDirectionY)

    
}



function ball() {

    ballMove()
    ballCollidesFloor();
    ballCollidesCeiling();
    ballPaddleCollision();
    
    
    
    
    fill('white');
    // circle(ballX,ballY,15)
    ellipse(ballX,ballY,15,15);

}

function ballPaddleCollision() {
    
    
    let y = paddle1.getY()
    print(y);


    if (ballY >= y && ballY <= y+100) {

        print("h1i");

        if ((paddle1.getX()+25) == ballX+0) {


            print("h2i");
           
        }

        

    }

    
}

function ballPaddleCollision2() {





   let ballChangeValue = paddle2.ballCollision(ballX,ballY);



    if (ballChangeValue === true) {

        ballSpeed = ballSpeed + 1;


        ballDirectionX = ballDirectionX * -1;

        ballChangeValue = false;

    }


}

function ballCollidesFloor() {

    if (ballY + 15 >= canvasY) {

        ballDirectionY = ballDirectionY * -1;
        
    }

    
}

function ballCollidesCeiling() {

    if (ballY <= 0) {

        ballDirectionY = ballDirectionY * -1;

    }


}








