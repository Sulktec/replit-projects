/*
    Given a collision function, there's 2 major ways to structure where it goes
        1) as a static method in a helper class
        2) in your character/projectile/enemy class
*/


c1x = 300;
c1y = 300;
c1r = 50;

c2x = 340;
c2y = 340;
c2r = 50;


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function draw() {
    let collision = false; 
    

    circle(c1x,c1y,c1r*2)
    
    circle(c2x,c2y,c2r*2)

    // syntax to use a static method: ClassName.methodName()  <- no need to create an object of the class

    collision = Collisions.collisionCheck(c1x,c1y,c1r, c2x,c2y,c2r);

    if(collision === true){
        fill("red");
        circle(c1x,c1y,c1r*2);
    }


    /*
    for your collision checks in your game you'll need 2 checks

    your character with enemy 
    enemy with your projectile

    the checks are done in the draw(){ } in your main file, in the calculation section
    
    it is recommended you use a static method for your collision function


    */
    
}



