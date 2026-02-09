
function setup() {
    rectMode(CENTER);
    angleMode(DEGREES);
    createCanvas(600, 600);
    background("lightSkyBlue");
}


function draw() {
    clear(); //ignore this for now
    background("lightSkyBlue"); //ignore this for now
    //your code starts below this line

    //for today, just code in draw() for now

    /*
        some properties: 
        Shapes drawn later in the program cover shapes drawn before them
        fill() fills everything drawn after until another fill is called
    */

    //colouring multiple squares

    fill("Plum");
    rect(300,50, 50,50);
    rect(300,100, 50,50);

    fill("yellow");
    rect();




    //your code ends above this line
    grid(50,50); //50,50 is the recommended setting for grid
    currentCoord(); 
}









function grid(xScale, yScale) { //scale determines the "gap" between points
    push();
    rectMode(CENTER);

    let yOffSet = 15; // used to draw text in the correct place
    let xOffSet = 18; // used to draw text in the correct place

    let x = 0;
    let y = 0;

    let xMin = 0;
    let xMax = 600;
    let yMin = 0;
    let yMax = 600;

    //draw the vertical lines, hold the y vales constant
    while (x <= 600) {

        line(x, yMin, x, yMax);

        fill("white");
        textSize(14);

        text(x, x, yMin+yOffSet);

        x = x + xScale;
    }

    //draw the horizontal lines, hold the x vales constant
    while (y <= 600) {
        line(xMin, y, xMax, y);

        fill("white");
        text(y,xMin,y+xOffSet);
        y = y + yScale;
    } 

}
function currentCoord(){

    let location = "(" + mouseX.toString() + "," + mouseY.toString() + ")";

    fill("white");
    text(location,mouseX,mouseY);


}