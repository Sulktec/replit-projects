public class Lesson3Ex1
{
    public static void main(String args[])
    {
    	//code starts here
        //3 ways to concatinate, not doing addition 

        String firstPhrase = "Hello";
        String secondPhrase = "good buddy";

        // method 1
        String combinedMessage = firstPhrase + secondPhrase;
        System.out.println(combinedMessage);


        //method 2 
        System.out.println(firstPhrase + " " + secondPhrase);


        //method 3
        System.out.println("hello" + " " + "good buddy"); 


        /*exercise, create 2 variables, then print them on the same line using one of the above methods
        */

        String wordOne = "Two";
        String wordTwo = "Words";
       
        // method 1
        System.out.println(wordOne + " " + wordTwo);
       
        // method 2
        String combinedWord = wordOne + " " + wordTwo; 
        System.out.println(combinedWord);
        
        // method 3
        System.out.println("Two" + " " + "Words"); 

        
            
    	//code ends here
    }
}