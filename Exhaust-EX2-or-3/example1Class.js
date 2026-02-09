

class Particle{
    constructor(x,y){
        this.position = createVector(x,y);
        this.acceleration = createVector(0,0);
        this.velocity = createVector(0,0);
        this.lifeSpan = 255; 
    }

    applyForce(force){
        this.acceleration.add(force);
        
    }
    
    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    
    
    show() {
        stroke(0);
        fill(175);
        circle(this.position.x, this.position.y, 8);
    }


    isDead(){
        if(this.lifeSpan < 0){
            return true; 
        } else{
            return false;
        }
    }
    
    
}