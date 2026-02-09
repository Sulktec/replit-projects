function players(size, rotateSpeed, speed) {

  
    this.size = size;
    this.x = width/2;
    this.y = height/2;
    this.rotateSpeed = rotateSpeed;
    this.angle = 0;
    this.speed = speed;
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0,0);
    

    this.drawPlayer = function () {
        
            
        s = this.size;
        x = this.x;
        y = this.y;
        
        
        
        push();
        
        translate(this.pos.x, this.pos.y);
        rotate(this.angle + (PI / 2))
        
        fill('black')
        stroke('white');
        
     
        triangle(-s-4, s+4, s+4, s+4, 0, -s-4);
        triangle(-s-1, s+1, s+1, s+1, 0, -s-1);
        triangle(-s, s, s, s, 0, -s);
        triangle(-s+4, s-4, s-4, s-4, 0, -s+4);
        

        
      pop();
    }

    this.rotatePlayer = function(angle) {

    
        this.angle += angle;


    }

    this.boost = function() {

        var force = p5.Vector.fromAngle(this.angle);

        this.vel.add(force);
        
    }

    this.movePlayer = function() {

        if (keyIsDown(LEFT_ARROW)) {

            this.rotatePlayer(-0.1);
            
        }

        if (keyIsDown(RIGHT_ARROW)) {

            this.rotatePlayer(0.1);

        }


        

        if (keyIsDown(UP_ARROW)) {

            this.boost();

        }

        if (keyIsDown(DOWN_ARROW)) {

            

        }

        
        
        
    }


    this.update = function () {





        this.pos.add(this.vel);
        this.vel.mult(0.9);


    }


    this.reset = function () {

        this.vel = createVector(0,0);


    }

    this.edges = function () {

        s = this.size+4;

        if (this.pos.x > width + s) {

            this.pos.x = -s;
            
        } else if (this.pos.x < -s) {

            this.pos.x = width + s;
            
        }


        if (this.pos.y > height + s) {

            this.pos.y = -s;

        } else if (this.pos.y < -s) {

            this.pos.y = height + s;

        }

    }


    this.hits = function(asteroidPos, asteroidR) {

       var d = dist(this.pos.x, this.pos.y, asteroidPos.x, asteroidPos.y );



        if (d < this.size + 4 + asteroidR) {

            return true;
        } else {


            return false;
        }





    }
    
    
    this.draw = function () {
   
       

        if (keyIsDown(65)) {

            

        }

        if (keyIsDown(68)) {

            

        }

        
        this.movePlayer();


        this.update();

        this.edges();


        this.drawPlayer();

        

        

    }

    this.getPos = function () {

        
        return this.pos;
        
    }

    this.getAngle = function () {


        return this.angle;

    }


   



    
    

    
}


