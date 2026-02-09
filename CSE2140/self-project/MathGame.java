import java.util.Scanner;
class TurnedBasedGame {
  public static void main(String[] args) {
    
    // Global Variables

    Scanner myObj = new Scanner(System.in);
    boolean  gameOver = false;
    String screen = "title";
    int Score = 0;

    
    // Game Code

    while (gameOver == false) {

        
        
        if (screen.equals("title")) {
        System.out.println("\n\nMath Game");

        System.out.println("\n\nPress 1 to play");
        

        String input = myObj.nextLine();


        if (input.equals("1")) {

            screen = "game";
            
        }
            
            
        }

        if (screen.equals("game")) {

            System.out.println("");            

            String input = myObj.nextLine();
        }
        
        
    } 

      
  }
}