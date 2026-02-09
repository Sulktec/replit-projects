class Particle{

    constructor(x,y) {
        this.position = createVector(x,y);
        this.acceleration = createVector(0,0);
        this.velocity = createVector(0,0);
        this.lifeSpan = 255;
    }
q
    applyForce(force) {
        this.acceleration.add(force)
    }

    update() {
        
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

         this.lifeSpan = this.lifeSpan - 2.0;
    }

    show() {
        stroke(0,this.lifeSpan);
        fill(175,this.lifeSpan);
        circle(this.position.x, this.position.y, 8);
    }


    isDead() {

        if (this.lifeSpan < 0) {

            return true;
        } else {

            return false;
        }
        
    }


    
}