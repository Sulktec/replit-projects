class Confetti extends Particle{

    constructor(x,y,c,s,h,r) {
        super(x,y);
        this.color = c;
        this.size = s;
        this.heading = h;

        this.oppositeForce = p5.Vector.fromAngle((h + r) * PI/180,0.1)
        
    }


    applyOppositeForce(){
        this.acceleration.add(this.oppositeForce);
        // this.acceleration.limit(0.01)
    }



    show() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.heading);
        stroke(0,this.lifeSpan);
        fill(this.color[0],this.color[1],this.color[2],this.lifeSpan);
        //circle(0,0,this.size);
        rect(0,0,this.size,this.size);
        pop();
    }






}