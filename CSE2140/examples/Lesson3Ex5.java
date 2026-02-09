/*
concatination of mixed types
*/ 

public class Lesson3Ex5
{
    public static void main(String args[])
    {

    int number = 27;

    String message = "what day of the month is it?";

    String mixedCombo = message + " " + 27;  // when adding an integer to a string, it will treat the integer as a string

    System.out.println(mixedCombo); 


    //execise: trying concatinating the variables inside the print statement 

    System.out.println(message + " " + 27); 

        
    }
}
