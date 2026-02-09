function fish3(userChoicex, userChoicey, size, speed, colour) {

    this.x = userChoicex;
    this.y = userChoicey;
    this.scale = size;
    this.speed = speed;
    this.colour = colour;

    //class methods generally operate on data that the class holds
    //class methods can use other class methods 
    //the main file interacts with object through it's methods
        //in plain english, methods are called from main file


    this.drawFish = function(){


        
        x = this.x; // this.x and x refer to 2 different variables
        y = this.y;
        s = this.scale;
        c = this.colour;

        fill(c);
        ellipse(x, y, (120)*s, 60*s);
        triangle(x + (60*s), y, x + ((60 + 20)*s), y - (20*s), x + ((60 + 20)*s), y + 20*s);

    }

     this.drawFish2 = function() {

        //body
         x = this.x; // this.x and x refer to 2 different variables
         y = this.y;
         s = this.scale;
         c = this.colour;

         fill(c);
         ellipse(x, y, (40)*s, 20*s);
         triangle(x + (15*s), y, x + ((20 + 6)*s), y - (6*s), x + ((20 + 6)*s), y + 6*s);
         fill('white');
         ellipse(x-40, y, s*3, s*3);
         


    }

    this.moveFish = function() {

        sp = this.speed

        this.x = this.x - sp;

        
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

