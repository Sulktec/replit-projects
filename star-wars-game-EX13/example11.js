/*
applying hit boxes to irregular objects
    a) this is also covering how to build your pipes to accomodate circles


high level view of adding hitboxes to "pipes"

keep 1 parallel for the pipes (x,y,w,h)

keep another parallel array for the hitboxes associated with the pipe 
    a)calculate hitboxes based off of pipe data 
    b) calculating the hitboxes as needed. ***** if all hit boxes created at once, 
    then the program can become because we're doing checks agains everything
*/



let pipeX =[];
let pipeY = [];
let pipeW = [];
let pipeH = [];
let pipeC = [];

let pipeX2 =[];
let pipeY2 = [];
let pipeW2 = [];
let pipeH2 = [];
let pipeC2 = [];

let bottomStartVal = 600;
let topStartVal = 0

let drawHitBoxes = false;


/*
let pipeHBX = [300,300,300];
let pipeHBY = [375-25, 350-50,300-50]; // drawing circles from bottom to top

the centre of the pipe is 300(y). a width of 150
let pipeHBD = [50,50,50]; // 50 diameter = 50 width 
*/

    
/*
parallel arrays are used because we need to create new pipes 

we also need to create new hit boxes for each of the pipes 

the idea is to add circles along the "pipe", and they move with the pipe 

steps to drawing a pipe with hitboxes:
    1)Notice the pipe width is always fixed, use that as a diameter of the circle
    2) make the height a multiple of the width 

*/



function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function keyPressed(){

    if(keyCode === 70){ //70 is f
        // pipeX.push(Math.random()*600);
        // pipeY.push(Math.random()*600);

        let width = 50;
        pipeW.push(width);
        pipeW2.push(width);

        let segments = floor(Math.random()*5);
        if(segments < 1){
            segments = 1;
        }
   

        pipeH.push(segments*width);
        pipeH2.push(segments*width);
        
        pipeC.push("green");
        pipeC2.push("green");

        pipeX.push(800);// 800 starts off screen, x can be constant
        pipeX2.push(800);// 800 starts off screen, x can be constant
        
        pipeY.push((bottomStartVal) - (segments*width)/2 );
        pipeY2.push((topStartVal) + (segments*width)/2 );
    }

    if(keyCode === 72){ //h is 72
        drawHitBoxes = true;
    }

    if(keyCode === 71){// g is 71
        drawHitBoxes = false;
    }
    
}


function draw() {
    /*
    the high level overview of how draw works is: 

    step 1 clear

    step 2 math
        takes advantage of both sets of pipes being equal
        both the top and the bottom parallel arrays are equal 

        
    step 3 draw 

        1) create a place holder array that will hold the hitboxes for both pipes 

        2) I create a for loop that will loop through the pipes and create hit boxes for them
            a) during 1 itertion: 
            the hitboxes are created for 1 set of pipes, then checked against the player

        in step2, the full loop must finish before moving on 

    */

    
    //clear previous thing
    clear();
    background("lightSkyBlue");

    //math
    for(let i = 0; i < pipeX.length; i++){
        pipeX[i]--;
        pipeX2[i] --;
    }

    //make place holder parallel arrays
    let HBX = [];
    let HBY = [];
    let HBD = [];


    let HBX2 = [];
    let HBY2 = [];
    let HBD2 = [];
    
    //draw pipes
    for(let i = 0; i < pipeX.length; i++){
        fill(pipeC[i]);
        rect(pipeX[i], pipeY[i], pipeW[i],pipeH[i]);

        fill(pipeC2[i]);
        rect(pipeX2[i], pipeY2[i], pipeW2[i],pipeH2[i]);
    }

    
    //collision check, several steps
    for(let i = 0; i < pipeX.length; i++){
        createHitBoxes(HBX,HBY,HBD,pipeX,pipeY,pipeW,pipeH,i);
        //HBX refers to the entire array, arrays are pass by reference
        //pass by reference is creating another address for the same memory location 
        createHitBoxes(HBX2,HBY2,HBD2,pipeX2,pipeY2,pipeW2,pipeH2,i);

        if(drawHitBoxes === true ){
            //draw hitboxes
            for(let j = 0; j < HBX.length; j++){
                fill("red");
                circle(HBX[j], HBY[j], HBD[j]);
                circle(HBX2[j], HBY2[j], HBD2[j]);
            }
        }
    }
}




function collisionCheck(x1,y1,r1, x2,y2,r2){  // these are properties of 2 different circles

    //this return function will use one point of entry, one point of exit
    //following this is not mandatory 

    //first thing, create the varaiable to be returned 
    let result = false; 

    // to calculate collision, need distance between centre of circles
    let centreDistance = dist(x1,y1, x2,y2); //x1,y1 is the centre of circle 1, x2,y2 is center of circle 2

    //2nd thing needed, find total radii of both circles
    let totalRadius = r1+r2;


    //last step, compare the two values
    if(totalRadius > centreDistance){
        result = true;
    }


    //second thing, near the end bracket, return result
    return result;
    // return functions are used to get information out of a function, due to scope, 
    //others functions can't see result of calc
}
function createHitBoxes(HBX, HBY, HBD, px,py,pw,ph,index){

    /*
    math find the bottom of the pipe 
    bottom = centreY + height/2 + 1/2*D
    starting from the bottom value, add diamter. that is the new circle center

    */

    /*
    p_[index] will provide the initial values, from there 
    the temp array HB_[] will populate based on how many "segments" there 
    are in the pipe
    */

    let circleCentY = py[index] + ph[index]/2 + pw[index]/2
    //print(bottom)
    let circleCentX = px[index]

    let numberOfsegments = ph[index]/pw[index];
    //print(numberOfsegments);
    
    let cirDiameter = pw[index];
    //print(cirDiameter);
    

    for(let i = 0; i < numberOfsegments;i++){
        
        HBX[i] = circleCentX;

        circleCentY =  circleCentY - cirDiameter;
        HBY[i] = circleCentY;

        HBD[i] = cirDiameter;
    }
    //no need to reutrn due to pass by reference 
}