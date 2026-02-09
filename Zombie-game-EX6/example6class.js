class OurRectangle{
    constructor(x,y,w,h,c,image){
        this.position = createVector(x,y);
        this.velocity = createVector(0,0); //velocity being applied is 0
        this.width = w;
        this.height = h;
        this.colour = c;
        this.image = image;
        this.treshold = 0.5;
        this.display = false;
        this.hitBoxArray = [];

        //next variables will track angles
        this.angle = 0;
        this.angVel = 0;
    }
    
    applyAcceleration(someForce){
        this.velocity.add(someForce); 
    }

    applyVelocity(){
        this.position.add(this.velocity);
    }

    getAngle() {

        return this.angle;
    }

    drawHitBox() {
        push();


        if (this.display === false) {

            noFill()
            noStroke();
        
            translate(this.position.x,this.position.y)
            rotate(this.angle);


            let temp = [this.position.x, this.position.y  ,this.width/1.5]

            this.hitBoxArray = temp;


        } 

        if (this.display === true) {


                let offset =  0
                fill('yellow')
                
                translate(this.position.x,this.position.y)
                rotate(this.angle);
                circle(0,0,this.width/1.5);

                let temp = [this.position.x, this.position.y  ,this.width/1.5]

                this.hitBoxArray = temp;

            



        }



        pop();
    }

    getHitBox() {

        return this.hitBoxArray;
    }

    //apply angular velocity and angular acceleration in the same way as above

    applyAngularAcceleration(someForce){
        
        this.angVel =  this.angVel + someForce;

        
    }

    applyAngularVelocity(){
        this.angle = this.angle + this.angVel; 
    }

    deccelerate() {

         
        
        if (this.angVel > this.treshold) {

            this.angVel = this.angVel - this.treshold;
        }

        if (this.angVel < this.treshold && this.angVel > -this.treshold) {

            this.angVel = 0;
        }

        if (this.angVel < -this.treshold) {

            this.angVel = this.angVel + this.treshold;
        }
    }

    //rendering is almost the same, but we use the objects angle
    //instead of calculating based on the velocity of object

    render(){
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        fill(this.colour);
        //rect(0,0,this.width,this.height)
        image(this.image,0,0,80,40)
        pop();
        
    }
    
}