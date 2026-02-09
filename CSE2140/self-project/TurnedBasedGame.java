import java.util.Scanner;
class TurnedBasedGame {
  public static void main(String[] args) {
    
    // Global Variables

    Scanner myObj = new Scanner(System.in);
    boolean  gameOver = false;
    String screen = "title";

    
    // Game Code

    while (gameOver == false) {

        
        
        if (screen.equals("title")) {
        System.out.println("\n\n");
        System.out.println("___  ____     _           _    _            _     _   _____ ");
        System.out.println("|  \\/  (_)   | |         | |  | |          | |   | | / __  \\");
        System.out.println("| .  . |_ ___| |_ _   _  | |  | | ___  _ __| | __| | `' / /'");
        System.out.println("| |\\/| | / __| __| | | | | |/\\| |/ _ \\| '__| |/ _` |   / /  ");
        System.out.println("| |  | | \\__ \\ |_| |_| | \\  /\\  / (_) | |  | | (_| | ./ /___");
        System.out.println("\\_|  |_/_|___/\\__|\\__, |  \\/  \\/ \\___/|_|  |_|\\__,_| \\_____/");
        System.out.println("                   __/ |                                    ");
        System.out.println("                  |___/                                     ");

        

        System.out.println("\n\nPress 1 to play");
        

        String input = myObj.nextLine();


        if (input.equals("1")) {

            screen = "character select";
            
        }
            
            
        }

        if (screen.equals("character select")) {

            System.out.println("");            

            String input = myObj.nextLine();
        }
        
        
    } 

      
  }
}