
function fish7(userChoicex, userChoicey, size, speed, bodycolour, hasItem, bowYOffset, diamondXOffset, diamondYOffset,hatYOffset, tailColour, diamondColour) {

    this.x = userChoicex;
    this.y = userChoicey;
    this.scale = size;
    this.speed = speed;
    this.bodycolour = bodycolour;
    this.items = hasItem;
    this.bowYO = bowYOffset;
    this.dXO = diamondXOffset;
    this.dYO = diamondYOffset;
    this.hYO = hatYOffset;
    this.tailColour = tailColour;
    this.diamondColour = diamondColour;

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
         

         fill(this.bodycolour);
         ellipse(x, y, (120)*s, 60*s);
         fill(this.tailColour);
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


        this.drawFish2();
        this.moveFish();
        this.resetFish();


    }

    this.bowFish = function() {


        this.drawFish2();

        if (this.bow === 'true') {
            this.drawBow(this.x,this.y+this.bowYO);

        }


    }

    this.weirdFish = function() {

        this.drawFish2();
        if (this.items === 'true') {
            this.diamond();
            this.hat();

        }


    }

    this.diamond = function() {

        //quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY])
        fill(this.diamondColour);
        quad((this.x-5) - this.dXO, this.y, this.x, this.y-this.dYO, (this.x+5) + this.dXO, this.y, this.x, this.y+this.dYO);

        quad((this.x-10) - this.dXO, this.y, this.x, this.y-this.dYO, (this.x+10) + this.dXO, this.y, this.x, this.y+this.dYO);

        quad(this.x - this.dXO, this.y, this.x, this.y-this.dYO, this.x + this.dXO, this.y, this.x, this.y+this.dYO);


    }


    this.hat = function() {

        fill('white');
        rect(this.x-5,this.y-this.hYO,30*this.scale,10*this.scale);

        fill('black');
        rect(this.x-5,this.y-this.hYO,30*this.scale,5*this.scale);


        rect(this.x-5+((30/6)*this.scale),this.y-this.hYO-(40*this.scale),20*this.scale,40*this.scale);

    }

    this.animateWeirdFish = function() {

        this.weirdFish();
        this.moveFish();
        this.resetFish();




    }

    this.changeColourBody = function(colour) {

        this.bodycolour = colour;

        
        

        
    }

    this.changeColourTail = function(colour) {


        this.tailColour = colour;





    }

    this.changeColourDiamond = function(colour) {

        this.diamondColour = colour;




    }



}
