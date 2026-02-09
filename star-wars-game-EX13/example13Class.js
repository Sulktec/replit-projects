class Enemy{

    constructor(img,x,y,xspeed,yspeed,size,display){

        this.image = img;
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed; 
        this.size = size;
        
        
        //to add the hit box, track more info for each object
        // circle centre (x,y), circle radius 

        this.circlex = x; // different varaibles to offset circle
        this.circley = y;
        this.circleRadius = 5;
        this.hitBoxArray = [];
        this.display = display;
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

    getHitBoxes() {


        return this.hitBoxArray;
    }

    drawEnemy(x,y) {
        
        
        image(this.image,this.x, this.y, this.size,this.size)
        
    }

    moveEnemy(x,y,xpseed,yspeed) {

        this.x = this.x - this.xspeed;

        this.y = this.y + this.yspeed;
        
    }

    enemyRebound(x,y,xspeed,yspeed) {

        if (this.y <= 0) {

             this.yspeed = this.yspeed * -1;
            
        } else if (this.y+(this.size/2) >= 600) {

            this.yspeed = this.yspeed * -1;
            
        }
    }

    render() {
        this.drawHitBox();
        this.drawEnemy();
        this.enemyRebound();
        this.moveEnemy();
        
    }


    //draw function

    //render function




}


