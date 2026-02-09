class Projectile {

    constructor(x,y,w,h,s,display) {

        this.display = display;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = s;
        this.hitBoxArray = [];
    }

    setCoord(x,y) {

        this.x = x;
        this.y = y;

    }

    drawHitBox() {
        push();


        if (this.display === false) {

            noFill()
            noStroke();

            for(let g = 0; g < this.width/this.height; g++) {

                let offset =  this.width/2 - this.height * g;

                let temp = [this.x + offset-(this.height/2), this.y  ,this.width/4]

                this.hitBoxArray[g] = temp;

            }
            

        } 

        if (this.display === true) {

            for(let g = 0; g < this.width/this.height; g++) {

                let offset =  this.width/2 - this.height * g;
                fill('yellow')
                circle(this.x + offset-(this.height/2),this.y  ,this.width/2);

                let temp = [this.x + offset-(this.height/2), this.y  ,this.width/4]
                
                this.hitBoxArray[g] = temp;

            }

            

        }



        pop();
    }

    getX() {

        return this.x;
    }

    getHitBoxes() {


        return this.hitBoxArray;
    }

    drawProjectile() {

        fill("grey")
        rect(this.x, this.y, this.width, this.height);

    }

    moveProjectile() {

        this.x = this.x + this.speed;

    }

    render() {

       
        
        this.drawProjectile();
        this.drawHitBox();
        this.moveProjectile();

    }

}
