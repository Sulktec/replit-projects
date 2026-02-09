
//this example is being extended again to track fish colour

//step 1 added attributes to constructor arguments
function fish8(userChoicex, userChoicey, size, hasBow, bcolour,tcolour, speed, bowColour) {

    this.x = userChoicex;
    this.y = userChoicey;
    this.scale = size;
    this.bow = hasBow; // hasBow  can be 'true' or 'false'
    this.speed = speed;
    this.bowColour = bowColour;

    //step 2 created the attributes
    //this.bodyColour can be thought of as let bodyColour 
    this.bodyColour = bcolour;
    this.tailColour = tcolour;
 

    //class methods generally operate on data that the class holds
    //class methods can use other class methods 
    //the main file interacts with object through it's methods
    //in plain english, methods are called from main file


    this.drawFish = function() {

        x = this.x; // this.x and x refer to 2 different variables
        y = this.y;
        s = this.scale;

        fill('green');
        ellipse(x, y, (120) * s, 60 * s);
        triangle(x + (60 * s), y, x + ((60 + 20) * s), y - (20 * s), x + ((60 + 20) * s), y + 20 * s);

    }
    //new to this example, a class function to draw a bow
    this.drawBow = function(bx, by){
        fill(this.bowColour);
        triangle(bx,by, bx+12*s,by-12*s, bx+12*s,by+12*s);
        triangle(bx,by, bx-12*s,by-12*s, bx-12*s,by+12*s); 
        circle(bx,by,8*s);
    }

    //generally, a function or method only does 1 thing, and it should not be longer than a screen
    this.moveFish = function() {
        this.x = this.x - this.speed

    }

    this.resetFish = function() {

        if (this.x < -(120*this.scale)) {
            this.x = 800;
        }

    }


    //the last function we're making will animate the fish 
    this.animateFish = function() {
       
        this.drawFishCustom();
        if (this.bow === 'true') {
            this.drawBow(this.x-(15*this.scale), this.y-(25*this.scale));

        }
        this.moveFish();
        this.resetFish();

  

    }

    this.bowFish = function() {
        this.drawFish();

        if (hasBow === 'true') {
            this.drawBow(this.x-(15*this.s), this.y-(25*this.s));
        }
    }

    this.animateBowFish = function() {
        this.bowFish();
        this.moveFish();
        this.resetFish();
    }


    //step 3 create a new function that draws with colour 
    this.drawFishCustom = function() {

        x = this.x; // this.x and x refer to 2 different variables
        y = this.y;
        s = this.scale;

        //step 4, change the fills 

        fill(this.bodyColour); // 'green swapped out with bodyColour variable'
        ellipse(x, y, (120) * s, 60 * s);

        fill(this.tailColour);
        triangle(x + (60 * s), y, x + ((60 + 20) * s), y - (20 * s), x + ((60 + 20) * s), y + 20 * s);

       
         fill('black');
         ellipse(x-(40*s), y, s*8, s*8);

    }


    //step5 create a setter method 
    this.setBodyColour = function(newColour,newColour2){
        this.bodyColour = newColour;
    }


}