function paddle(x, y, up, down, paddleXOffset, ballXOffset) {

    this.x = x;
    this.y = y;
    this.up = up;
    this.down = down;
    this.pXO = paddleXOffset;
    this.bXO = ballXOffset;
    
    
    this.movement = function() {

        if (keyIsDown(up) && this.y > 0) {

            this.y = this.y - 3;


        }




        if (keyIsDown(down) && this.y < 400) {

            this.y = this.y + 3;

        }

        
    }

    this.draw = function() {

        this.movement();

        fill('white');
        rect(this.x,this.y,20,100)

        
    }


    this.getY = function() {



        return this.y;

    }

    this.getX = function() {



        return this.x + this.xO;

    }

    this.ballCollisionX = function(ballX) {


        if ((this.x+this.pXO) == ballX+this.bXO) {

            
            
           return true;
        }

        
    }

    this.ballCollisionY = function(ballY) {


        if (ballY >= this.y && ballY <= ballY+100) {


            

            return true;

        }


    }

    this.ballCollision = function(ballX,ballY) {

       let trigger = false;

        if (this.ballCollisionX(ballX) == true && this.ballCollisionY(ballY) == true && trigger == false ) {

            print("collided");
            
            trigger = true;
        } 

        return trigger;

        trigger = false;
        
    }




    
} 