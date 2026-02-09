let player;
let asteroids = [];
let lasers = [];
let score = 0;

function setup() {
  createCanvas(600, 600);
   

    player = new players(15,3,2);
    //                   size, rotateSpeed


    for (var i = 0; i < 4; i++) {
    asteroids.push(new Asteroid())
    }
    

  
   
}



function draw() {
    noFill();
    clear();
    background('black');

    push()
    textSize(32);
      fill(255);
      stroke(0);
      strokeWeight(4);
      text('score: ' + score, 20, 40,);

    pop()


    if (asteroids.length > 0) {

    for (var i = 0; i < asteroids.length; i++) {

        var tempSize = asteroids[i].getRadius()

        if (player.hits(asteroids[i].getPos(),tempSize/2) == true) {

            print("OOPS");

            push()
            textAlign(CENTER)
            textSize(100);
              fill(255);
              stroke(0);
              strokeWeight(4);
              text("GAME OVER", 300, 300,);

            pop()

            

            player.remove(); // this crashes the game on purposely

        }

        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
        
        
    }
} else {

          push()
            textAlign(CENTER)
            textSize(100);
              fill(255);
              stroke(0);
              strokeWeight(4);
              text("YOU WIN", 300, 300,);

            pop()

        player.remove(); // this crashes the game on purposely

        
}


    


    for (var i = 0; i < lasers.length; i++) {



        
        lasers[i].render();
        lasers[i].update();


        if (lasers[i].offscreen() == true) {

            lasers.splice(i,1);

        } else {
        

        for (var j = asteroids.length-1; j >= 0; j--) {


         
            
            let value = false;

            if (lasers[i].hits(asteroids[j].getPos(), asteroids[j].getRadius()) == true) {

                value = true;
                
            }

            if (value == true) {

                if (asteroids[j].size > 15) {
                
                    var newAstroids = asteroids[j].breakup();

                    asteroids = asteroids.concat(newAstroids);

                } else {

                    score++;

                    print(score);
                    
                }

                
                asteroids.splice(j,1);
                lasers.splice(i,1);

                print(asteroids)
                
                break;
                
                
            }
            
        }

        }


    }

    print(lasers.length)

   

    player.draw()

    
    
}


function keyPressed() {


    if (key == ' ') {

             lasers.push(new Lasers(player.getPos(), player.getAngle()))


    }

}