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
let playerInfo = [300,300,50,50]; 
let movement = 0;


let obstacleX = [800,500]
let obstacleY = [300,300]
let obstacleW = [50,50]
let obstacleH = [200,500]
let colourObs = ["red","green"]


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function keyPressed(){
    if(keyCode === 70){ // 70 is an f 
        movement = -1; // moves in the negative x direction
    }

    if(keyCode === 71){
        movement = 1; //moves in the positive x direction 
    }
}

function keyReleased(){
    movement = 0;
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
    playerInfo[0] = playerInfo[0] + movement; 
    

    //step 3 of animation 
    fill("blue");
    //playerInfo = [300,300,50,50];  [x,y,w,h]
    rect(playerInfo[0],playerInfo[1],playerInfo[2],playerInfo[3]);


    //step 2 of animation, update the coordinates
    for(let i = 0; i < obstacleX.length;i++){
        obstacleX[i] = obstacleX[i] - 1;
    }

    //step 3 draw at the coordinates 
    for(let i = 0; i < obstacleX.length;i++){
        fill(colourObs[i]);
        rect(obstacleX[i],obstacleY[i],obstacleW[i],obstacleH[i]);
        
    }


    /*
let obstacleX = [800,500]
let obstacleY = [300,300]
let obstacleW = [50,50]
let obstacleH = [200,500]
let colourObs = ["red","green"]

    */

    
    
}