class Circle {

    constructor(x,y,size,xSpeed, ySpeed) {

        this.position = createVector(x,y)
        this.velocity = createVector(xSpeed, ySpeed)
        this.size = size;
    }

    draw() {

        fill('grey');
        circle(this.position.x,this.position.y,this.size)
    }

    move() {

        this.position.add(this.velocity);
        
        
    }

    bounce() {

        if (this.position.x <= this.size/2 || this.position.x >= 600-this.size/2) {

            this.velocity.x = this.velocity.x * -1;
        }

        if (this.position.y <= this.size/2  || this.position.y >= 600-this.size/2) {

            this.velocity.y = this.velocity.y * -1;
        }
    }

    render() {

         this.bounce();
         this.move();
         this.draw();
        
    }

    
    
}