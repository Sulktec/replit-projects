import java.util.Scanner;
class Calculator {
  public static void main(String[] args) {

// Global Variables

    Scanner myObj = new Scanner(System.in);
    boolean  gameOver = false;
    String screen = "menu";
    String operation = "";
    String input;
    double numberInput = 0;
    double answerValue = 0;

     System.out.println("");
    
    // Game Code

    while (gameOver == false) {

        
        // begin
        if (screen.equals("menu")) {
            System.out.println("\nYour current value is: " + answerValue);
            
            System.out.println("\n1. Add \n2. Subtract \n3. Multiply \n4. Divide\n5. Power\n6. End\n");
        
            input = myObj.nextLine();

            // add
            if (input.equals("1")) {
            
            operation = "add";

            screen = "operate";
            
            }

            //subtraction

            if (input.equals("2")) {

            screen = "operate";
            
            operation = "subtract";
            
            }

            // multiplication

            if (input.equals("3")) {

            screen = "operate";
            
            operation = "multiply";
            
            }

            // divison

            if (input.equals("4")) {

            screen = "operate";
            
            operation = "divide";
            
            }

            // square 

            if (input.equals("5")) {

            screen = "operate";
            
            operation = "power";
            
            }

            // end
            
            if (input.equals("6")) {

            screen = "end";
            
            
            
            }
           
            
        }
        
       
        
        
        
        
        // operation
        
        if (screen.equals("operate")) {

            System.out.println("\nwhat number do you want to " + operation + "?\n");

                
            numberInput = myObj.nextDouble();
            System.out.println("");
            
            if (operation.equals("add")) {
            answerValue = answerValue + numberInput;

            }

             if (operation.equals("subtract")) {
            answerValue = answerValue - numberInput;

            }

             if (operation.equals("multiply")) {
            answerValue = answerValue * numberInput;

            }

             if (operation.equals("divide")) {
            
                 if (numberInput != 0) {
                 answerValue = answerValue / numberInput;
                 } else {

                     System.out.println("WOAH! you can't divide by 0, try doing something else.");
                     
                 }

            }

             if (operation.equals("square")) {
            answerValue = Math.pow(answerValue, numberInput);

            }



            screen = "menu";
        }
            
            
        
        if (screen.equals("end")) {

            System.out.println("Thank you for using this calculator!");

            gameOver = true;
            
        }
        
        
    } 

   
       myObj.close();
  }

     
}