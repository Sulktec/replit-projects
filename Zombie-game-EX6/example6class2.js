class Line{

    constructor(x,y,heading){
        rectMode(CORNER);
        this.position = createVector(x,y);
        this.heading = heading;

    }

    getHeading(angle) {

        this.heading = angle;
    }

    render() {

        
        
        push();
        rectMode(CORNER);
        translate(this.position.x, this.position.y);
        rotate(this.heading);
        noStroke();
        fill(255,0,0)
        
        rect(0, 0, 600,1)
        pop();
    }



    

    
}