class wheel {


    constructor (pos, size, angle, amount, angleAmount, colorChange) {

        
        
        this.posOffSet = pos;
        this.size = size;
        this.angle = angle;
        this.amount = amount;
        this.color1 = 0;
        this.color2 = 0;
        this.color3 = 0;
        this.colorChangeAmount = colorChange;
        this.index = 0;
        this.angleAmount = angleAmount;
        
        

        
    }

    makeWheel () {

        fill(this.color1, this.color2, this.color3);

        

        for (let index = 0; index < this.amount*25; index = index + 25) { // x*25 x is the amount of circles 

        circle(index+this.posOffSet, index+this.posOffSet, this.size);
        }

        
    }

    spinWheel() {

       
        
        ellipseMode(CORNER);
        
        this.angle = this.angle + this.angleAmount;

        rotate(this.angle);

        this.changeColor()

        this.makeWheel();

        

       
    }


    changeColor() {

        

        

        if (this.index  == this.colorChangeAmount) {
            
        this.color1 = Math.floor(Math.random() * 256);
        this.color2 = Math.floor(Math.random() * 256);
        this.color3 = Math.floor(Math.random() * 256);

            this.index  = 0;

            } else {

                this.index++;
            
            }

            

        
        
        
    }
    

   

    





   

    
}

class center {

    constructor (x,y,size, color) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        
    }

    makeCenter () {

        fill(this.color);
        circle(this.x,this.y,this.size);
        
    }
    
}

class stem {


    constructor (x,y,dx,dy, color) {

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        
        
    }

    makeStem() {

        fill("green");
        rect(this.x, this.y, this.dx, this.dy);
        
    }

    
}