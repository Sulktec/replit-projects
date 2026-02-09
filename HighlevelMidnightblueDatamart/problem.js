

let Ahmed1;
let Ahmed2;


function setup() {
  createCanvas(600, 600);
  

    
    Ahmed1 = new fish2(100,100,1,3,'aqua')
    Ahmed2 = new fish2(300,500,2,11,'grey')

}

function draw() {
    clear();
    background('lightSkyBlue');

        Ahmed1.drawFish();
        Ahmed1.moveFish();
        Ahmed1.resetFish();
    
    
        Ahmed2.animateFish();

    

}