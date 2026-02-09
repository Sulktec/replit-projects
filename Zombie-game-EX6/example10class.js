class Particle{

    constructor(x,y) {
        push();
        
        this.position = createVector(x,y);
        this.force = createVector(this.position.x*-1,this.position.y*-1);
        this.force.limit(0.1)
        this.acceleration = createVector(0,0);
        this.velocity = createVector(0,0);
        this.random = [-0.1,0,0.1]
        this.lifeSpan = 255;
        pop();
    }

    applyForce(force) {
        
    }

    update() {
        push();
        
        let randomVector = createVector(random(this.random),random(this.random));

        this.acceleration.add(this.force.x,this.force.y);
        this.acceleration.add(randomVector)
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity.x ,this.velocity.y);
        // this.position.limit();

        this.lifeSpan = this.lifeSpan - 5.0;
        this.acceleration.mult(0);
        pop()
    }

    

    show() {
        push();
        
        translate(this.position.x,this.position.y)
        stroke(0,this.lifeSpan);
        fill(175,this.lifeSpan);
        
        circle(0, 0, 8);
        pop();
    }


    isDead() {

        if (this.lifeSpan < 0) {

            return true;
        } else {

            return false;
        }
        
    }


    
}