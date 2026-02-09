
// to use the function, start by a variable to hold your object
let Fish;

function setup() {
  createCanvas(600, 600);
  

    // next create the object using the template
    Fish = new fish6(300,300,2,5,'yellow','true',-25,20,10,70);


}

function draw() {
    clear();
    background('lightSkyBlue');

        Fish.animateWeirdFish();
    
   
    
    

}