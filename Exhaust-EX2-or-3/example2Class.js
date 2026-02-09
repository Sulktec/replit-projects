class Exhaust{

    constructor(x,y){
        this.position = createVector(x,y);
        this.acc = createVector(0,0);
        this.vel = createVector(0,0);
        this.temp = createVector(-x,-y); // temp is a really long vector pointing opposite of position 

        //non primitives are usually pass by reference 

        this.oppFor = p5.Vector.limit(this.temp,0.01);


        this.random = [-0.01,0.01];
        // the static version of limit returns a vector

        this.lifeSpan = 255;
    }

      show() {
        stroke(0,0,0,this.lifeSpan);
          
        fill(255,0,0,this.lifeSpan);    
        circle(this.position.x, this.position.y, 8);
      }


      update() {

          let randomVector = createVector(random(this.random),random(this.random));

        this.acc.add(this.oppFor);
        this.acc.add(randomVector);
        this.vel.add(this.acc);
        this.position.add(this.vel);
        this.acc.mult(0);
        this.lifeSpan = this.lifeSpan - 1; 
      }

    isDead(){
        if(this.lifeSpan < 0){
            return true;
        } else{
            return false;
        }

    }



}