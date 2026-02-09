let Fush2;

let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'green', 'aqua', 'silver', 'grey']


function setup() {
  createCanvas(600, 600);


    // next create the object using the template
    Fush2 = new fish7(300,300,2,5,'yellow','true',-25,20,10,70,'green', 'aqua');


}

function draw() {
    clear();
    background('lightSkyBlue');

    Fush2.animateWeirdFish();





}

function keyPressed() {

    
    if (keyCode === 81) {

        let colour = colorlist[Math.floor(Math.random()*8)];
        Fush2.changeColourBody(colour);
        
    }

    if (keyCode === 87) {

        let colour = colorlist[Math.floor(Math.random()*8)];
        Fush2.changeColourTail(colour);

    }

    if (keyCode === 69) {

        let colour = colorlist[Math.floor(Math.random()*8)];
        Fush2.changeColourDiamond(colour);

    }


    
}