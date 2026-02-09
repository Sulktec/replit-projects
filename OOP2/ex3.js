
// to use the function, start by a variable to hold your object
let Nemo;
let Hello;
let Bye;


function setup() {
  createCanvas(600, 600);
  

    // next create the object using the template
    Nemo = new fish2(300,300,1,5,'green');
    Hello = new fish2(100,100,2,2,'aqua')
    Bye = new fish2(500,500,5,8,'black')

}

function draw() {
    clear();
    background('lightSkyBlue');

    Bye.drawFish2();
    Bye.moveFish();
    Bye.resetFish();
    
    
    Hello.animateFish();
    Nemo.animateFish();
    

}