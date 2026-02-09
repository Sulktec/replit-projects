let fish43;

function setup() {
    createCanvas(600, 600);
    background('lightSkyBlue');

    fish43 = new fish5(300,300,1,'true','black', 'red');
}

function draw() {

    fish43.drawFishCustom();

    if (keyCode === 77) {
        
        fish43.setBodyColour('blue');
        

    }


    

    
}