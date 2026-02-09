function Asteroid(pos, size) {

    

    if (pos) {
    
        this.pos = createVector(pos.x, pos.y);;
        this.vel = p5.Vector.random2D();
        this.size = size * 0.5;
        

    } else {
        
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.size = random(25,75);
    }

 
    

    this.render = function() {
        push();



        stroke('white')
        
        translate(this.pos.x, this.pos.y);
        ellipse(0,0,this.size);
        
      
        pop();
    }

    this.update = function() {

        this.pos.add(this.vel);
        
    }


    this.breakup = function() {

        var newA = [];

        newA[0] = new Asteroid(this.pos, this.size)
        newA[1] = new Asteroid(this.pos, this.size)
        newA[2] = new Asteroid(this.pos, this.size)

        this.vel = 0;
        
        return newA;

        
        
        
    }

    

    this.edges = function () {

        s = this.size/2;

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

    this.getPos = function () {

        return this.pos;
        
    }

    this.getRadius = function () {

        return this.size;

    }
    
}