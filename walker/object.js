class Walker {

    constructor() {

        this.x = width/2;
        this.y = height/2;

        this.mouseX;

        this.mouseY;
        
    }

    show() {
        strokeWeight(1)
        stroke(0);
        point(this.x, this.y);

        
    }

    setterStep(x,y) {

        if (Number.isInteger(x)) {


            this.mouseX = x;

        }

        if (Number.isInteger(y)) {

            this.mouseY = y;

        }

        
        
    }

      step() {

        let mouseChance = floor(random(100));
          
        
          
        let chanceX = floor(random(101));
        let chanceY = floor(random(101));


 

        if (mouseChance >= 40) {
          
            if (chanceX < 40) {
    
                this.x--;
                
            } else {
    
                this.x++;
                
            }
    
              
              if (chanceY < 40) {
    
                  this.y--;
    
              } else {
    
                  this.y++;
    
              }
            
       
      } else {
            // 10 - 50 = -30 < 50 == true

          
            
        if ((this.mouseX - this.x) <= 0) {


             this.x--;
            
        } else {

            this.x++;
        }

            
        if (this.mouseY - this.y <= 0) {

            this.y--;
            
        } else {

            this.y++;
            
        }

            
            
    
          
      }
      
       
      }
    }

    

    
