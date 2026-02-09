//set up is called when the program starts
//setup runs once

let eFish;

function setup() {
  createCanvas(600, 600);
  background('lightSkyBlue');
    fish43 = new fish5(300,300,1,'true','black', 'red');

}
//draw is calle
function draw() {

    
    
}

function keyPressed(){
    let x = Math.random()*600;
    let y = Math.random()*600;
    


    if(keyCode === 68) {

        fill('gold')

        ellipse(x,y,120,60);

        
    }



    
}