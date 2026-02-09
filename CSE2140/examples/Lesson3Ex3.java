/*
finding a substring
*/ 

public class Lesson3Ex3
{
    public static void main(String args[])
    {

        String myPet = "sparky the dog";
        String smallPart;
        String smallSection;
        /*

        characters in a string have an index

        s p a r k y   t  h  e    d  o  g 
        0 1 2 3 4 5 6 7  8  9 10 11 12 13
        */
        
        smallPart = myPet.substring(4); // this prints index 4 and onwards
        // if no ending point is specifed, the method will assume end of string

        System.out.println(smallPart);

        //smallSection = myPet.substring(4,10); //this prints from index 4 to 10, inclusive of the endpoints
        //System.out.println();


        //note that substring does not modify what's stored in the myPet Variable. You can call it multiple times to get different things

        // talk about debugging
        
        //String section1 = myPet.substring(0,3);
        //String section2 = myPet.subString(7,10);
        //String section3 = myPet.substring(11,14);

        //System.out.println(section1 + " " + section2 + " " + section3);


        /*
        Exercise: create a hidden message in your string. Extract it using the substring method. 
        */

        String food = "pizza is the coolest food";

        String part1 = food.substring(0, 3);
        String part2 = food.substring(6, 8);
        String part3 = food.substring(13, 17);


        System.out.println(part1 + " " + part2 + " " + part3);

        
    

        
    }
}
