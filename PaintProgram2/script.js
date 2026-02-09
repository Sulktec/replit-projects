let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let currentColor = 0;
let color = (255,255,255);
let pixelSize = 50;
let paintx = 0;
let painty = 0;

let inpOne;
let inpTwo;
let inpThree;


let canvasX = 600;
let canvasY = 1100;


function setup() {

    rectMode(CENTER);
  createCanvas(600, 1100);
  background('grey');


    inpOne = createInput('');
      inpOne.position(10, canvasY - 90);

    inpTwo = createInput('');
      inpTwo.position(10, canvasY - 50);

    inpThree = createInput('');
      inpThree.position(10, canvasY - 10);

      // When input is detected, paint the background gray
      // and display the text.

    
}

function draw() {
  
    noStroke()
    showCurrentColor();
    startPainting()

    



    //your code ends above this line
    grid(pixelSize,pixelSize); //50,50 is the recommended setting for grid
   
}



function keyPressed() {

    // this will toggle through the color options

    // if (keyCode == 65) {
        
    //     if (currentColor < colorlist.length - 1) {
    //         currentColor++;

    //         color = colorlist[currentColor];

    //     }
    //   }

    
    // if (keyCode == 68) {

    //     if (currentColor > 0) {
    //         currentColor--;

    //         color = colorlist[currentColor];

    //     }
    //   }

    // use rgb color;

  


        
    
}

function showCurrentColor() {
    push();
    fill(inpOne.value(), inpTwo.value(), inpThree.value());
    square(400, canvasY-50, 100);
        
    pop();
}




function startPainting() {

    if (mouseX <= 600 && mouseY <=  canvasY - 200) {

    if (((mouseX/pixelSize) % 1 === 0) == false) {





        // round to nearest 10th (used in calculation)

        let roundedNumber = Math.floor(mouseX/10) * 10;

        let roundedRemainder = Math.floor((roundedNumber % pixelSize));

        // subtract mouseX by remainder to get wanted value 



        paintx = roundedNumber - roundedRemainder;

        // print("PaintX is " + paintx);



    } else {

        paintx = mouseX;

    }








    if (((mouseY/pixelSize) % 1 === 0) == false) {





        // round to nearest 10th (used in calculation)

        let roundedNumber = Math.floor(mouseY/10) * 10;

        let roundedRemainder = Math.floor((roundedNumber % pixelSize));

        // subtract mouseX by remainder to get wanted value 



        painty = roundedNumber - roundedRemainder;

        // print("PaintY is " + painty);



    } else {

        painty = mouseY;

    }

    

    if (mouseIsPressed === true) {
        fill(inpOne.value(), inpTwo.value(), inpThree.value());
        square(paintx+(pixelSize/2), painty+(pixelSize/2), pixelSize);


    }


    if (keyCode == 69 && keyIsPressed === true) {
        fill('grey');
        square(paintx+(pixelSize/2), painty+(pixelSize/2), pixelSize);

    }

}

    
}







function grid(xScale, yScale) { //scale determines the "gap" between points
    push();
    strokeWeight(0.5);
    
    

    let yOffSet = 15; // used to draw text in the correct place
    let xOffSet = 18; // used to draw text in the correct place

    let strokeColor = 'black';

    let x = 0;
    let y = 0;

    let xMin = 0;
    let xMax = canvasX;
    let yMin = 0;
    let yMax = canvasY - 200;

    //draw the vertical lines, hold the y vales constant
    while (x <= xMax) {

        line(x, yMin, x, yMax);
        stroke(strokeColor);

        textSize(14);

        

        x = x + xScale;
    }

    //draw the horizontal lines, hold the x vales constant
    while (y <= yMax) {
        line(xMin, y, xMax, y);
        stroke(strokeColor);
       
      
        y = y + yScale;
    } 

}
function currentCoord(){

    let location = "(" + mouseX.toString() + "," + mouseY.toString() + ")";

    fill("white");
    text(location,mouseX,mouseY);


}