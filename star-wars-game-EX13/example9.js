/*
hit detection takes advantage of the follow:

    1)the radius of a circle
    2) the dist() function
        a) dist(x1,y1, x2,y2)  compares the distance between 2 points 

        if d < radius1 + radius2  then a collision has happened 

*/

let circle1 = [300,300,50]; //x,y,diameter
let circle2 = [240,240,100]; //x,y, diameter

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {

    // try modifying this code so a collision happens when 2 moving circles touch 
    
    let collision = false;
    
    fill("blue");
    circle(circle1[0],circle1[1],circle1[2]);

    fill("yellow");
    circle(circle2[0],circle2[1],circle2[2]);

    collision = collisionCheck(circle1[0],circle1[1],circle1[2]/2,circle2[0],circle2[1],circle2[2]/2)

    if(collision === true){
        fill("red");
        circle(300,300,300);
    }
    
}



function collisionCheck(x1,y1,r1,x2,y2,r2){ //make sure you pass in the values consistently 
    let result = false;

    let distanceBetweenPoints = dist(x1,y1,x2,y2); 

    let totalRadius = r1 + r2;

    if(totalRadius > distanceBetweenPoints){
        result = true;
    }
    
    return result;
    
}