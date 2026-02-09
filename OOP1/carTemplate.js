function carTemplate(userChoicex, userChoicey, dX, dY, speed) {

    this.x = userChoicex;
    this.y = userChoicey;
    this.dimensionX = dX;
    this.dimensionY = dY;
    this.speed = speed;

    this.drawCar = function() {

        x = this.x;
        y = this.y;
        dimensionX = this.dimensionX;
        dimensionY = this.dimensionY;




        //body
        fill('gold');
        rect(x,y,dimensionX,dimensionY);
        rect(x-dimensionX/3,y,dimensionX/2,dimensionY/1.5)


        //window
        fill('pink');
        rect(x,y,dimensionX/3,dimensionY/3)

        
        
        


    }

    this.moveCar = function() {

        s = this.speed;

        this.x = this.x - s;
        this.y = this.y - s;


    }

    this.resetCar = function() {


        if(this.x < 0) {

            this.x = 600
        }

        if(this.y < 0) {

            this.y = 600
        }


    }


}