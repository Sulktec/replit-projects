// weighting of what's favoured can be changed by adding more of something 





let ship;
let movex = 0;
let movey = 0;
let speed = 3;
let playerHitBoxDisplay = false;
let playerSize = 50;
let playerImage;
let deathImage;


let enemyD = new Date();
let enemySpawnTime = enemyD.getTime();
let enemySecondSpawnTime = 2;
let enemies = []
let sign = [-1,0,1] 
let enemyHitBoxDisplay = false;
let enemySize = 40;
let enemyImage;
let xSpeed = 1;
let ySpeed = 10;
let difficultyLevel = 0;
let changeDifficultyLevel = 5; // change after how many cycles of enemies
let xSpeedDifficultyChange = 0.1; //  represents how much to add to xSpeed every new difficulty.
let ySpeedDifficultyChange = 0.5; // represents how much to add to ySpeed every new difficulty.
let indexDifficulty = 0;

let projectileD = new Date();
let projectileCoolDown = projectileD.getTime();
let projectiles = [];
let projectileHitBoxDisplay = false;
let projectileSecondCoolDown = 0.45;

function preload() {

    playerImage = loadImage('images/ship.png')
    deathImage = loadImage('images/explosion.png')
    enemyImage = loadImage('images/enemy.png')
}

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    imageMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");



    ship = new Player(playerImage,deathImage,300,300,playerSize,0,0,playerHitBoxDisplay)
}


function draw() {
    clear();
    background("lightSkyBlue")

    if (ship.getAlive() === true) {
    
        let shipArray = ship.getHitBoxes();
        let projectileArray;
        let enemyArray;
    
        enemyD = new Date();

        let newXSpeed = xSpeed + (xSpeedDifficultyChange * difficultyLevel);
        let newYSpeed = random(sign)*((difficultyLevel * ySpeedDifficultyChange) + ySpeed)
      
        if(enemyD.getTime() - (enemySecondSpawnTime * 1000) >= enemySpawnTime){
            //                     (img,x,y,xspeed,yspeed,size,display)
            enemies.push(new Enemy(enemyImage,700,Math.floor(Math.random() * 500) + 3, newXSpeed, newYSpeed, enemySize, enemyHitBoxDisplay ))
            print("hi")
            
            if (indexDifficulty < changeDifficultyLevel) {

                // do nothing

                indexDifficulty++;
                
            } else if (indexDifficulty >= changeDifficultyLevel) {

                difficultyLevel++;
                indexDifficulty = 0;

                print("Difficulty modified. Level: " + difficultyLevel)
            }
            
            
            enemySpawnTime = enemyD.getTime();
        }


        for (i = 0; i < projectiles.length; i++) {
            projectiles[i].render()
        }
        
        for (i = 0; i < enemies.length; i++) {
    
            let collsionOne = false;
            let collsionTwo = false;
            
            enemies[i].render();
            
            let enemyArray = enemies[i].getHitBoxes();
    
                collsionTwo = Collision.enemyCollision(shipArray[0],shipArray[1],shipArray[2],enemyArray[0],enemyArray[1],enemyArray[2]);
    
            if (collsionTwo === true) {
    
                print("collided player");
    
                ship.isAlive(false);
                
                collsionTwo = false;
            }
            
    
            for (g = 0; g < projectiles.length; g++) {
    
                let projectileArray = projectiles[g].getHitBoxes();
    
                for (l = 0; l < projectileArray.length; l++) {
    
                        collsionOne = Collision.enemyCollision(projectileArray[l][0], projectileArray[l][1], projectileArray[l][2], enemyArray[0], enemyArray[1], enemyArray[2]);
                    
                }

                if (collsionOne === true && projectiles[g].getX() < 600) {

                    print("collided enemy");
                    enemies.splice(i,1);

                    collsionOne = false;
                }
                
            }

   
                
        }
    

    
        ship.setSpeed(movex, movey);
        ship.isOutOfBOunds();
        ship.render();
    
    
                
    } else {
        clear();
        background(255, 157, 160);

        fill('black');
        textAlign(CENTER,CENTER);
        textSize(100);
        text('You Died', 300, 300);

        ship.drawDeadEffect();
        
    }

}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function keyPressed(){

    if (ship.getAlive() === true) {
    
        projectileD = new Date();
    
        
    
        if(keyCode === 81 && projectileD.getTime() - (projectileSecondCoolDown * 1000) >= projectileCoolDown){
            //                               (x,y,w,h,s,display)
            projectiles.push(new Projectile(ship.getX() + 25, ship.getY(), 30,15,7, projectileHitBoxDisplay));
    
            projectileCoolDown = projectileD.getTime();
    
    
        }
    
    
    
    
        if (keyCode === 38) {
            movey = -speed;
    
        } else if (keyCode === 40) {
            movey = speed;
    
        } 
        if (keyCode === 37) {
            movex = -speed;
    
        } else if (keyCode === 39) {
            movex = speed;
    
        } 
    
    
    }

}





function keyReleased() {

 

    if (keyCode === 37 || keyCode === 39) {

        movex = 0;
    }
     

    if (keyCode === 38 || keyCode === 40) {

        movey = 0;
    }
    
}




