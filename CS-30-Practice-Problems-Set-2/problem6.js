/*
    part 1) pick an image for your character
        a) remove the background if the png or jpg is not transparent 

    part 2) make a class for you character. 
        a) some attributes that might be useful: x,y, width, height, health, ammo
            aa) something should happen if health reaches 0 replace character with an explosion
        b) pay special attention to using attributes if your method parameters 

    part c) create a character controller using keyPressed() and keyReleased()
    in your main file 



    part d) our character can fire projectiles, gravity affects our character. 

    hint: create new object for projectiles 
    create an array in your main file to hold the projectiles 

    ex:
    let projectiles = [] <-global


    keypressed(){
        if(keyCode === 50){
            projectiles.push(new projectile(x,y,w,h,img))
        }
    }

    draw(){
        loop through the projectile array, and update x,y position for each one. 
        loop through the projectile and call the render for each one
    }



    

    follow the pattern of:

        keyPressed() and keyReleased change a variable 

        draw() uses the varaible 

        Note: for your object, variables are only changed after created
        from within the main file through setter methods 



*/


let movementX = 0;
let movementY = 0;
let speed = 5;
let playerHealth = 5;
let flappyBird;
let flappyW = 50*1.5;
let flappyH = (167/6.02)*1.5;

let subtractValue = 0;
let doSubtract = true;
let projectiles = [];



let img;

function preload() {
  img = loadImage('images/Bird.png');
  ex = loadImage('images/Explosion.png');
}


function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    flappyBird = new BirdObject(300,300,flappyW,flappyH,playerHealth,img,ex);
}

function draw() {
    clear();
    background("lightSkyBlue");

    death()

    for (i = 0; i < projectiles.length; i++) {
        projectiles[i].render()
    }
    
    flappyBird.healthCheck();
    flappyBird.setCoords(movementX, movementY)
    flappyBird.render();


   
}


function death() {

    if (flappyBird.getLife() == false) {

        speed = 0;
    }
    
}


function keyPressed() {
    
    if (keyCode === 38) {

        movementY = -speed;
        
    }
    
    if (keyCode === 40) {

        movementY = speed;
    }

    if (keyCode === 37) {

        movementX = -speed;
    }

    if (keyCode === 39) {

        movementX = speed;
    }

    if (keyCode === 67) {

        flappyBird.setHealth(-1);
    }
    
    
    if(keyCode === 70){
        projectiles.push(new Projectile(flappyBird.getX() + flappyW, flappyBird.getY() + flappyH/2, 25,10,2));

        print(projectiles.length)
    }
    
}


function keyReleased() {
    movementX = 0;
    movementY = 0;
    
    doSubtract = true;

}