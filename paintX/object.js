class Stroke {


    constructor (x,y,s,c, ax, ay, as, ac) {
        this.x = x;
        this.y = y;
        this.size = s;
        this.color = c;
        this.arrayX = ax;
        this.arrayY = ay;
        this.arrayS = as;
        this.arrayC = ac;
        
    }

    setCoord(x, y) {

        this.x = x;
        this.y = y;

        
    }

    setPaint(s,c) {
        this.size = s;
        this.color = c;
        
    }

    setArray(ax, ay, as) {

        this.arrayX = ax;
        this.arrayY = ay;
        this.arrayS = as;
        
    }


    // place new stoke

    placeStroke() {

        push();


        noStroke();
        
        fill(this.color);
        circle(this.x, this.y, this.size)

        
        
            this.arrayX.push(this.x);
            this.arrayY.push(this.y);
            this.arrayS.push(this.size);
            this.arrayC.push(this.color);
        pop();
        
    }

    findArrayX() {
        return this.arrayX;
    }
    findArrayY() {
        return this.arrayY;
    }
    findArraySize() {
        return this.arrayS;
    }


    resetArray() {

        for(let i = 0; i < this.arrayX.length; i++) {

            this.arrayX.pop();
            this.arrayY.pop();
            this.arrayS.pop();
            this.arrayC.pop();
            
        }
        

        
    }

    
    


    // updating stroke


    // stor stroke


    // place old stroke

    
}

class Cursor {

    constructor(x,y,s) {

        this.x = x;
        this.y = y;
        this.size = s;
        
        
    }

    setCoord(x,y) {

        this.x = x;
        this.y = y;
        
    }

    setScale(s) {

        this.size = s;
        
    }

    drawCursor() {
        push();

        stroke('green')
        noFill();
        circle(this.x, this.y,this.size);

        pop();

    }

    
}