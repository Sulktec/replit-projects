//set up is called when the program starts
//setup runs once

let school = [];
let arraySize = 0;
let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'green', 'aqua', 'white', 'purple', 'silver']


function setup() {
  createCanvas(600, 600);
  background('lightSkyBlue');

    
}

function draw() {
    clear();
    background('lightSkyBlue');

    let index = 0;

    
    while (index < school.length) {

        school[index].animateFish();
        
        index = index + 1;
    }
    
    
}

function keyPressed(){
    
    if (keyCode == 77) {

        let x = 750;
        let y = Math.random() * 600;
        let speed = Math.random() * 10;
        let size = Math.floor(Math.random()*(3-1)+1);
        let color1 = colorlist[Math.floor(Math.random()*9)];
        let color2 = colorlist[Math.floor(Math.random()*9)];
        let bow = '';
        let bowColour = colorlist[Math.floor(Math.random()*9)];
        
        if (Math.random() < 0.49) {

            bow = 'true';
            
        } else {

            bow = 'false';
            
        }
        

        school[arraySize] = new fish8(x,y,size,bow,color1,color2,speed,bowColour);

        arraySize = arraySize + 1;
        
    }


    
}