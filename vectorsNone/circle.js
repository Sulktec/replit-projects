class Circle {

    constructor(x,y,size,xSpeed, ySpeed) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.xDirection = -1;
        this.yDirection = 1;
        
    }

    draw() {

        fill('grey');
        circle(this.x,this.y,this.size)
    }

    move() {

        this.x = this.x + (this.xSpeed * this.xDirection);
        this.y = this.y + (this.ySpeed * this.yDirection);
        
        
    }

    bounce() {

        if (this.x <= this.size/2 || this.x >= 600-this.size/2) {

            this.xDirection = this.xDirection*-1
        }

        if (this.y <= this.size/2  || this.y >= 600-this.size/2) {

            this.yDirection = this.yDirection*-1
        }
    }

    render() {

         this.bounce();
         this.move();
         this.draw();
        
    }

    
    
}