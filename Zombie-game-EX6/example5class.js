
//position = position + velocity //this is applying the to the object

//velocity = velcotiy + acceleration //this is how velocity changes over time (how fast it increases per frame)
 //   *any external forces applied to the object, can be "accumulated" in the acceration.

class OurCircle{

    constructor(x,y,r,c){
        //the object will need to track at least 3 things to model movement
            //a position vector
            // velocity
            // acceleration

        //syntax to create vector: variableName = createVector(xvalue or variable, y value or variable);
        this.position = createVector(x,y);

        this.velocity = createVector(1,1); //no velocity

        this.acceleration = createVector(0,0); // no acceleration 

        this.radius = r;
        this.colour = c;

        this.heading = 0;
        
        /*
        to model motion, always try to apply for each cycle, these 3 steps happen each cycle

        1) apply acceleration to force
        2) apply force to the object
        3) draw the object

        *** to move the object, change acceleration to a non-zero value 
        *** all external forces are "accumulated in the accleration"
        */
    }

    applyAcceleration(someForce){
        this.velocity.add(someForce); 
    }

    applyVelocity(){
        this.position.add(this.velocity);
    }

    drawOurCircle(){

        fill(this.colour);
        circle(this.position.x, this.position.y, this.radius);
    }

    drawOurSquare(){

        this.heading = atan2(this.velocity.y,this.velocity.x);
        //at this point, heading contains our rotation 
        
        
        fill(this.colour);
        //rect(this.position.x,this.position.y,2*this.radius,this.radius);

        push();
        translate(this.position.x, this.position.y);
        rotate(this.heading);
        rect(0,0,2*this.radius,this.radius);
        pop();
        
    }
    
    
}