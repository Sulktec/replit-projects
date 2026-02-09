function setup() {
    createCanvas(600, 600);
    background('lightSkyBlue');
}

function draw() {
    drawFish(300,300);
}


function drawFish(x,y){

    fill('lime');
    ellipse(x,y,120,60);

    fill('white');
    circle(x,y,6);

    fill('blue');
    circle(x+60,y,6);


    fill('red');
    circle(x+60+30,y-30,6);

    fill('purple');
    circle(x+60+30,y+30,6);

    triangle(x+60,y,x+60+30,y-30,x+60+30,y+30);


}

