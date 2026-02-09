/*
    this class will move around randomly by adding
    new forces its velocity vector 

    also create something so the walker will wrap 
*/

class Walker {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.width = 50;
        this.height = 50;

        this.randomXforce = [-0.01, 0.01];
        this.randomYforce = [-0.01, 0.01];

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