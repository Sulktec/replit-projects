/*
example 1 will cover:
1)use of 1d arrays
2) use of parallel arrays
3) keyRelease();

tomorrow we talk about collision detection 
*/


/* state is the ability to remember preceding events or user interactions  */

//use a 1d array to group 1 off information, like player info
/*
when using an array to track player info, each index tracks 
a specific aspect of the player

playerInfo = [playerX,playerY,playerWidth,playerHeight]
*/
let gameOver = false;
let score = 0;
let playerInfo = [300,300,50,50]; 
let jumpVel = 5;
let gravity = 3;
let movement = gravity;
let jumpKey = false;
let ableJump = true;
let time = 0;


let obstacleX = [800,500,800,500]
let obstacleY = [0,0, 600,600]
let obstacleW = 70
let obstacleMaxPlus = 120;
let obstacleMin = 350;
let obstacleH = [Math.floor((Math.random() * obstacleMaxPlus) + obstacleMin),Math.floor((Math.random() * obstacleMaxPlus) + 200),Math.floor((Math.random() * obstacleMaxPlus) + obstacleMin),Math.floor((Math.random() * obstacleMaxPlus) + obstacleMin)]

let obstacleOpenW = obstacleW;
let obstacleOpenH = 25; 
let obstacleOpenY = [obstacleH[0]/2 - obstacleOpenH/2, obstacleH[1]/2 - obstacleOpenH/2,  600 - obstacleH[2]/2  + obstacleOpenH/2, 600 - obstacleH[3]/2 + obstacleOpenH/2]

let colourObs1 = [0,0,128,128]
let colourObs2 = [128,128,0,0]
let colourObs3 = [0,0,0,0];
let obstaclePassed = [false, false,false,false]


let playerImg;
function preload() {

    playerImg = loadImage("images/player.png");
    
}



function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    imageMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function keyPressed(){
    if(keyCode === UP_ARROW){ // 70 is an f 
            movement = -jumpVel;   
    }
 
}

function keyReleased(){
    
    movement = gravity; 
    
}

function player() {

    push()

    playerInfo[1] = playerInfo[1] + movement;

    noStroke();
    //step 3 of animation 
    fill("lightSkyBlue");
    //playerInfo = [300,300,50,50];  [x,y,w,h]
    rect(playerInfo[0],playerInfo[1],playerInfo[2],playerInfo[3]);
    image(playerImg, playerInfo[0]+2, playerInfo[1]-3, playerInfo[2]*1.5, playerInfo[3]*1.4)

    pop()
}

function playerScore() {

    for(let i = 0; i < obstaclePassed.length;i++){

        if (playerInfo[0] > obstacleX[i] && obstaclePassed[i] === false) {

            score = score + 0.5;
            
            obstaclePassed[i] = true;

            print(score);
        }
    }
       
    
}

function playerScoreDisplay() {
    push();

    stroke('white');
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(40);
    text(score, width/2, 60);

    pop();
}


function playerCollision() {

    for(let i = 0; i < obstacleX.length;i++) {

        if (playerInfo[0] >= obstacleX[i] - obstacleW && playerInfo[0] < obstacleX[i] + obstacleW) {

            
            
            if((playerInfo[1] - (playerInfo[3]/2) <= obstacleY[i] + (obstacleH[i]/2)) && (i < 2)  ) {

                gameOver = true;
                
            }


            if((playerInfo[1] + (playerInfo[3]/2) >= obstacleY[i] - (obstacleH[i]/2)) && playerInfo[1] + (playerInfo[3]/2) <= 600 && (i >= 2)  ) {

                gameOver = true;

            }
            
            
        }

        
    }


  
}

function playerOutOfBounds() {

    if (playerInfo[1] - playerInfo[3]/2 <= 0) {

        gameOver = true;
    }

    if (playerInfo[1] + playerInfo[3]/2 >= 600) {

        gameOver = true;
    }
    
}



function objectAnimate() {

    //step 2 of animation, update the coordinates
    for(let i = 0; i < obstacleX.length;i++){
        obstacleX[i] = obstacleX[i] - 1;
    }
    
}

function objectMake() {

    //step 3 draw at the coordinates 
    push();

    strokeWeight(4);
    
    for(let i = 0; i < obstacleX.length;i++){
        fill(colourObs1[i],colourObs2[i],colourObs3[i]);
        rect(obstacleX[i],obstacleY[i],obstacleW,obstacleH[i]);
        if ( obstacleY[i] == 0) {
        obstacleOpenY[i] = obstacleH[i]/2 - obstacleOpenH/2;
        }

        if (obstacleY[i] == 600) {
        obstacleOpenY[i] = 600 - obstacleH[i]/2 + obstacleOpenH/2 ;
        }

        
        
         rect(obstacleX[i],obstacleOpenY[i],obstacleOpenW,obstacleOpenH);

        if (obstacleX[i] < -obstacleW) {

            obstacleX[i] = width+obstacleW;

            obstacleH[i] = Math.floor((Math.random() * obstacleMaxPlus) + obstacleMin); 
            // this value divided by two will be the onscreen height because the rect mode is center
            // obstacleH[i] = 350;

            colourObs1[i] = Math.floor((Math.random() * 256));
            colourObs2[i] = Math.floor((Math.random() * 256));
            colourObs3[i] = Math.floor((Math.random() * 256));

            obstaclePassed[i] = false;
        }
    }

    pop();
}

function gameDone() {
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(100);
    text('GAME OVER', width/2, height/2);
    
    
}


function draw() {

    // STEP1 CLEAR THE CANVAS
    clear();
    background("lightSkyBlue");

    /*
    2 ways to access an array element

    method 1: create a new varaibale, and store the thing at the index
        ex: array = [12,11,45,59]
        let myVar = array[3]   <- this stores whatever was at index 3 in myVar (59)

    method 2: using the array value directly 
        array2 = [50,60]
        ellipse(array2[0],array2[1],120,60)  <- this will be read as ellipse(50,60,120,60)
    */

    //step 2 do a calculation

    if (gameOver === false) {
        
        objectAnimate()
        objectMake() 
        player()
        playerCollision()
        playerOutOfBounds() 
        playerScore()
        playerScoreDisplay()
    }
     

    if (gameOver === true) {

        gameDone()
        
    }






 




    /*
let obstacleX = [800,500]
let obstacleY = [300,300]
let obstacleW = [50,50]
let obstacleH = [200,500]
let colourObs = ["red","green"]

    */
}