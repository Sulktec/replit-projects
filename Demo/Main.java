import java.util.Scanner;
import java.util.Random;

class Main {
  public static void main(String[] args) {
   
    Scanner myObj = new Scanner(System.in);

    Random rand = new Random();
    
    
    
    System.out.println("What's your name");
    
   
    
    
    String name = myObj.nextLine();

    
    
    
    
    System.out.println("\nhi " + name);

    System.out.println("\nSo, " + name + " where do you live?");

    
    
    
    String city = myObj.nextLine(); 

   
    
    
    System.out.println("\nOkay " + name + " I'm moving to " + city);

    System.out.println("\nNow I'll pick a number in between 0 and the number of your choice");

    
    int number = Integer.parseInt(myObj.nextLine());

    int numberRandom = rand.nextInt(number);

    
    
    System.out.println("\nMy number is " + numberRandom);

    System.out.println("\nNow " + name + ", do you like this number (1 for yes, 2 for no)");

    
    int response = Integer.parseInt(myObj.nextLine());

   
    
    if (response == 1) {

      System.out.println("\nWow, you do like " + numberRandom);
      
    } else if (response == 2) {

      System.out.println("\nOh sorry that you didn't like " + numberRandom);
      
    } else {

      System.out.println("\nHey you didn't answer my question :( ");
      
    }
  }
}