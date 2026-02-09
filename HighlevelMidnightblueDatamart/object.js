function fish2(userChoicex, userChoicey, size, speed, colour) {

    this.x = userChoicex;
    this.y = userChoicey;
    this.scale = size;
    this.speed = speed;
    this.colour = colour;





     this.drawFish = function() {

        
         x = this.x; 
         y = this.y;
         s = this.scale;
         col = this.colour;

         fill(col);
         ellipse(x, y, (120)*s, 60*s);
         triangle(x + (60*s), y, x + ((60 + 20)*s), y - (20*s), x + ((60 + 20)*s), y + 20*s);
         fill('black');
         ellipse(x-40, y, s*8, s*8);
         


    }

    this.drawBow = function(bx, by) {

        
        fill('red');
        triangle(bx,by, bx+12,by-12, bx+12,by+12);
        triangle(bx,by, bx-12,by-12, bx-12,by+12); 
        circle(bx,by,8);

        
        
    }

    this.moveFish = function() {

        speed = this.speed

        this.x = this.x - speed;

        
    }

    this.resetFish = function() {

        s = this.scale;;

        if (this.x < - ((60+20)*s)) {
            this.x = 600 + ((60+20)*s);
        }

        
    }

    this.animateFish = function() {

        
        this.drawFish();
        this.moveFish();
        this.resetFish();

        
    }

}

