/*
will cover angular motion
    angular velocity: the rate an object's angle changes over time
    anglur acceleration: describes changes in an object's angular velocity
*/
let aimLine;

let zombie;
let zombieHitBoxArray = [];
let zombieHit = false;

let projectile = [];
let projectileD = new Date();
let projectileCoolDown = projectileD.getTime();
let projectileHitBoxDisplay = false;
let projectileSecondCoolDown = 2;

let rectangle1;
let playerImage;
let angularForce = 0;
let angleAccelBy = 0.05;
let movementForce;
let rectangleHitBoxArray = [];
let keyReleasedToggle = true;


let zombiePlayerCollsion = false;

//to make projectiles, you'll need a place them 
let myBullets = []


function preload(){
    playerImage = loadImage("images/topDownChar.png");
}

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
    imageMode(CENTER);

    movementForce = createVector(0,0);

    rectangle1 = new OurRectangle(300,300,100,20,"cyan",playerImage);

    aimLine = new Line(300,300,0)

    zombie = new Walker(300,0);
}
// make a key pressed, apply a negative and positive rotation similar 
//to the previous 



function keyPressed(){

    projectileD = new Date();

    
    keyReleasedToggle = false;
    
    if(keyCode === 39){ //f

        angularForce = angularForce + angleAccelBy;
    }

    if(keyCode === 37){ //f

        angularForce = angularForce - angleAccelBy;
    }

    if (keyCode === 82 && projectileD.getTime() - (projectileSecondCoolDown * 1000) >= projectileCoolDown) {

        projectile.push(new Bullet(300,300,15,1,rectangle1.getAngle(),7))
        projectileCoolDown = projectileD.getTime();
    }
    
}

function keyReleased(){
    /*create methods to:
          2) also reset forces so they're no being in draw 

    */

    keyReleasedToggle = true;

    angularForce = 0;
    
}


function draw() {

    clear();
    background("lightSkyBlue");

    

    if (keyReleasedToggle === true) {

        rectangle1.deccelerate();
    }

    zombie.animate();
    zombie.drawHitBox();

    aimLine.getHeading(rectangle1.getAngle());
    aimLine.render();

    for(let i = 0; i < projectile.length;i++) {

        
        projectile[i].applyVelocity();
        projectile[i].render();
        projectile[i].drawHitBox();

        let projectileArray = projectile[i].getHitBox();

        

            for (l = 0; l < projectileArray.length; l++) {
                    
                    zombieHit = Collision.collide(projectileArray[l][0], projectileArray[l][1], projectileArray[l][2]/2, zombieHitBoxArray[0], zombieHitBoxArray[1], zombieHitBoxArray[2]/2);

                if (zombieHit === true) {

                    print("collided enemy");

                }
               
            }



    }


    

    
    rectangle1.drawHitBox();
    rectangle1.applyAngularAcceleration(angularForce);
    rectangle1.applyAngularVelocity();
    rectangle1.render();

    rectangleHitBoxArray = rectangle1.getHitBox();
    zombieHitBoxArray = zombie.getHitBox();

    zombiePlayerCollsion = Collision.collide(rectangleHitBoxArray[0],rectangleHitBoxArray[1],rectangleHitBoxArray[2]/2,zombieHitBoxArray[0],zombieHitBoxArray[1],zombieHitBoxArray[2]/2)

    if (zombiePlayerCollsion === true) {

        print('dead');
    }

    //to use them go into draw, create a loop, and call the move method for each bullet
}