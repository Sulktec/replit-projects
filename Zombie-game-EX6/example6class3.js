/*
    this class will move around randomly by adding
    new forces its velocity vector 

    also create something so the walker will wrap 
*/

class Walker {
    constructor(x, y) {

        rectMode(CENTER);
        
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.width = 50;
        this.height = 50;

        this.display = false;
        
        this.randomXforce = [-0.01, 0.01];
        this.randomYforce = [-0.01, 0.01];

    }

    drawHitBox() {
        push();

        rectMode(CENTER);

        if (this.display === false) {

            noFill()
            noStroke();

            translate(this.position.x,this.position.y)
            let temp = [this.position.x, this.position.y  ,this.width]

            this.hitBoxArray = temp;


        } 

        if (this.display === true) {


                let offset =  0
                fill('yellow')

                translate(this.position.x,this.position.y)
                circle(0,0,this.width);

                let temp = [this.position.x, this.position.y  ,this.width]

                this.hitBoxArray = temp;





        }



        pop();
    }

    getHitBox() {

        return this.hitBoxArray;
    }


    applyAcceleration() {
        let randomForce = createVector(random(this.randomXforce), random(this.randomYforce))
        this.velocity.add(randomForce);
    }

    applyVelocity() {
        this.position.add(this.velocity);
    }

    render() {
        fill("lime");
        rect(this.position.x, this.position.y, this.width, this.height);
    }

    animate() {
        this.applyAcceleration();
        this.applyVelocity();
        this.render();
    }


}