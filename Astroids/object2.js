function Lasers(shipPos, shipAngle) {

    this.pos = createVector(shipPos.x, shipPos.y);
    this.vel = p5.Vector.fromAngle(shipAngle);
    this.vel.mult(10);

    this.render = function() {
        push();

        
        

        stroke('white')
        fill('white')
       
        square(this.pos.x,this.pos.y ,5)
        
      
        pop();
    }

    this.update = function() {

        this.pos.add(this.vel);
        
    }

    this.hits = function(asteroidPos, asteroidR) {

       var d = dist(this.pos.x, this.pos.y, asteroidPos.x, asteroidPos.y );

       

        if (d < asteroidR) {

            return true;
        } else {


            return false;
        }

   

        
    
    }

    this.offscreen = function () {

    

        if (this.pos.x > width + 5|| this.pos.x < -5) {
            
            return true;
        }



        if (this.pos.y > height - 5 || this.pos.y < 5) {

            return true;
        }

    return false;

    }
    
}