class Particle{

    constructor(x,y) {
        push();

        this.position = createVector(x,y);
        this.acceleration = createVector(0,0);
        this.velocity = createVector(0,0);
        this.random = [-0.1,0,0.1]
        this.lifeSpan = 255;

        this.heading = 0;
        this.angularVel = 0;
        this.aa = 0;
        pop();
    }

    updateAccel(force) {

        this.acceleration.add(force)
    }

    updateVelocity() {

        this.velocity.add(this.acceleration)
        this.acceleration.mult(0);
    }

    updatePos() {
        this.position.add(this.velocity.x ,this.velocity.y);

        

    }

    updateLife() {

        this.lifeSpan = this.lifeSpan - 3.0;
        
    }

    updateAngle(){
        this.angularVel += this.aa; 
        this.heading += this.angularVel; 
    }

    applyRotation(rot){
        this.aa += rot 
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