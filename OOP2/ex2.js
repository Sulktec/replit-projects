/*

procedural programming is what we've been doing so far, code is executed 
from top to bottom 

one major downside: when trying to represent complex things, 
the data is scattered through the code. 
    #This makes the program harder to maintain, because more things
    have to be changed. Example, your data/code is spread out 

    OOP combines a group of related varaibles and functions into a "unit"
    using the fish example, the x,y and speed could be grouped together once
    and reused many times. 

    Terminology: 

        variables in a template are known as attributes  <- we use this
        but may also be called fields,properties or class variables 

    An object is something from the real world. It can be physical or abstract. 
        a physical example could be a fish 
            may want to keep track of things such as age, species, and weight

        an abstract could be an appointment 
            may want to keep track of things such as time, location, who is servicing appointment
            #getting a haircut

    What we did above is called abstraction. You're simplifying reality. 

    Objects are created with templates AKA classes. 
        the template will define the object's attributes and methods(functions in class)


    Major benefit is you can write template once and reuse it many times. 
    Relevant data is grouped together, this helps reduce errors. 

    WET "we enjoy typing" <- we do not enjoy typing


    a template or custom class/datatype can be in the same file 
    as your main code, or in it's own file. 

    

*/

let Song;
function setup() {
  createCanvas(600, 600);
  background('lightSkyBlue');
    // create objects in setup

    Song = new fish(300,300);
    
}

function draw() {

    // to use object function objectname.function_name();

    Song.drawFish()

}

