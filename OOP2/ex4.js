
// to use the function, start by a variable to hold your object
let Fush;

function setup() {
  createCanvas(600, 600);
  

    // next create the object using the template
    Fush = new fish2(300,300,1,5,'yellow','true', -25);


}

function draw() {
    clear();
    background('lightSkyBlue');

    Fush.animateBowFish();
   
    
    

}