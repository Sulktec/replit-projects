class Player {

    constructor(img,deadImg,x,y,s,sx,sy,display) {

        this.image = img;
        this.deathImage = deadImg;
        this.x = x;
        this.y = y;
        this.size = s;
        this.speedx = sx;
        this.speedy = sy;
        this.display = display;
        this.hitBoxArray = [];
        this.alive = true;
    }

    getX() {

       return this.x; 
    }

    getY() {

        return this.y;
    }

    setSpeed(sx,sy) {

        this.speedx = sx;
        this.speedy = sy;
    }

    drawHitBox() {
        push();


        if (this.display === false) {

            noFill()
            noStroke();
            
        } 

        if (this.display === true) {

            fill('yellow');
            stroke('black');

            circle(this.x,this.y, this.size)

            
        }

        this.hitBoxArray = [this.x, this.y, this.size/2];

        pop();
    }

    isOutOfBOunds() {

        if (this.x <= this.size/2 || this.x >= 600 - this.size/2) {

            this.isAlive(false);
            
        }

        if (this.y <= this.size/2 || this.y >= 600 - this.size/2) {

            this.isAlive(false);
        }
        
    }

    isAlive(alive) {

        this.alive = alive;
        
    }

    getAlive() {


        return this.alive;
    }

    getHitBoxes() {
        

        return this.hitBoxArray;
    }

    drawPlayer() {

        image(this.image,this.x,this.y,this.size ,this.size )

    }

    movePlayer() {

        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;

    }

    render() {

        if (this.alive === true) {
        
            this.drawHitBox();
            this.drawPlayer();
            this.movePlayer();

        }
    }

    drawDeadEffect() {

        if (this.alive === false) {

            image(this.deathImage,this.x,this.y,this.size ,this.size )
            
        }
        
    }


}
