class Bullet{

    constructor(x,y,w,h,heading,speed){
        
        this.speed = speed;
        this.width = w;
        this.height = h;
        this.position = createVector(x,y);
        this.heading = heading * (PI/180);
        print(this.heading)
        this.velocity = p5.Vector.fromAngle(this.heading);
        this.heading = heading;
        this.display = false;
        this.hitBoxArray = [];
        


        this.velocity.x = this.velocity.x * this.speed;
        this.velocity.y = this.velocity.y * this.speed;

        /*
        to convert an angle to a vector use:  p5.Vector.fromAngle();

        2 configureations
        p5.Vector.fromAngle(angle);
            this will take an angle, and assume a resultant vector  of length 1 (hypotenuse),
            and calculate the x and y compnent vectors using the length 

        
        p5.Vector.fromAngle(angle, arm length);
            the will take an angle, and calculate the x and y compnent vectors, 
            but you determine what the resultant vector length/magnitude is
        */

        
        
    }

    drawHitBox() {
        push();

        translate(this.position.x,this.position.y);
        rotate(this.heading);
        

        if (this.display === false) {

            noFill()
            noStroke();

            for(let g = 0; g < this.width/this.height; g++) {

                let offset =  this.width/2 - this.height * g;
                
                let temp = [this.position.x + offset-(this.height/2), this.position.y  ,this.height]

                this.hitBoxArray[g] = temp;

            }


        } 

        if (this.display === true) {

            for(let g = 0; g < this.width/this.height; g++) {

                let offset =  this.width/2 - this.height * g;
                fill('yellow')
                

                circle(0+ offset-(this.height/2),0  ,this.height);

                let temp = [this.position.x + offset-(this.height/2), this.position.y  ,this.height]

                this.hitBoxArray[g] = temp;

            }



        }



        pop();
    }

    getHitBox() {

        return this.hitBoxArray;
    }

    applyVelocity() {
        
        this.position.add(this.velocity);
    }

    render() {

        
        push();
        
        translate(this.position.x, this.position.y);
        rotate(this.heading);
        
        fill('black')
        
        rect(0, 0, this.width,this.height)
        pop();
    }



    

    
}