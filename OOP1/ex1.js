let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightBlue');
}

function draw() {


    
    fish1 = new fishTemplate();

    fish1.setValues(300,300);
    fish1.movement(5 ,fish1.getX(), 120, 20);
    fish1.drawFish(fish1.getX(), fish1.getY(), 120, 60, 20);
    
}

function fishTemplate() {

    this.x = 0;
    this.y = 0;
    this.dimensionX = 0;
    this.dimensionY = 0;
    this.tailSize = 0;
    this.speed = 0;

    this.drawFish = function(x,y,dimensionX,dimensionY,tailSize) {

        //body
        fill('gold');
        ellipse(x,y, dimensionX, dimensionY);


        //tail
        fill('pink');
        triangle(x+(dimensionX/2),y, x+(dimensionX/2)+tailSize, y-tailSize, x+(dimensionX/2)+tailSize, y+tailSize);


    }

    this.movement = function(speed,x,dimensionX,tailSize) {

        
        var tailPoint = x+dimensionX+tailSize;

        if ( tailPoint < 0) {

            x = canvasX;

        }

        x = x - speed;


    }

    this.setValues = function(x,y) {
        this.x = x;
        this.y = y;
  
    }

    this.getX = function() {
        return this.x;
    }

    this.getY = function() {
        return this.y;
    }



    
}