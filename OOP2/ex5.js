/*
this example will show how to take user input and modify the program output in a procedural context

the fish colour will change based on the key pressed 


will use if statements to determine what colour should be drawn 
look at a method of getting keyboard input
*/

function setup() {
    createCanvas(600, 600);
    background('lightSkyBlue');
}

function draw() {
    // exact match
    
    clear();
    background('lightSkyBlue');
    
    if (keyIsDown(79)) {
        let x = Math.random()*600;
        let y = Math.random()*600;
        

        drawFish(x,y, 'blue', 'red')
        
    }
    
}


function drawFish(fx, fy, colourB, colourT) {
    //draw fish body + tail

    fill(colourB); // 'lime' changed to colourB variable
    ellipse(fx, fy, 80, 40);

    fill(colourT); //added second fill() to colour tail
    triangle(fx + 40, fy, fx + 40 + 20, fy - 20, fx + 40 + 20, fy + 20);

    //draw eye
    fill('black');
    circle(fx - 20, fy - 7, 5);
} 