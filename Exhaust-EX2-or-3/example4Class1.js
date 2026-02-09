/*
the exhaust class modified so the opposite force(oppFor) 
is calculated based on a heading(where it's pointing) 
instead of flipping a vector and limiting the magnitude

exhaust was modified to take in 1 extra thing, heading
    1) heading has 180 added to point in the opposite direction
    2) use fromAngle to generate a vector using polar coordinates
*/
class Exhaust{

    constructor(x,y, heading){
        this.position = createVector(x,y);
        this.acc = createVector(0,0);
        this.vel = createVector(0,0);


        this.oppFor = p5.Vector.fromAngle((heading + 180) * PI/180,0.01) 
        this.random = [-0.01,0.01];
        this.lifeSpan = 255;

    }

      show() {

        fill("red");
        circle(this.position.x, this.position.y, 8);
      }


      update() {

          let randomVector = createVector(random(this.random),random(this.random));

        this.acc.add(this.oppFor);
        this.acc.add(randomVector);
        this.vel.add(this.acc);
        this.position.add(this.vel);
        this.acc.mult(0);
        this.lifeSpan = this.lifeSpan - 3; 
      }

    isDead(){
        if(this.lifeSpan < 0){
            return true;
        } else{
            return false;
        }

    }



}