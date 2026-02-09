import java.util.Scanner;
import java.util.Random;
class MistyWorld2{

// global variable
   static boolean  gameOver = false; 
   static Scanner myObj = new Scanner(System.in); 
   static String input;
   static boolean battle = false;
    
    // player
    static String screen = "title";
    static int playerHealth = 100;
    static int playerMaxHealth = 100;
    static int playerRegAttack = 10;
    static int playerStrongAttack = 10;
    static boolean playerShieldToggled = false;
    static int playerShieldDurability = 10;
    static int playerHeals = 3;
    
    

    // enemy
    static int enemyHealth = 120;
    static int enemyDamage = 10;
    

    public static void fight() { // beginning of fight method

        System.out.println("\n\n\nYou being attack\n\n\n\n\n\n");

        battle = true;

        while (battle == true) {
            
            System.out.println("1. Regular Attack\n2. Strong Attack\n3. Heal: " + playerHeals + " left\n4. Toggle Shield: " + playerShieldToggled);

            
            input = myObj.nextLine();

            System.out.println("\n\n\n\n\n");

            
            
        }
        
        
        
    } // end of fight method


    

    
    public static void run(){ // start run
    
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

        }

        System.out.println("\n\nPress 1 to play");
        

        input = myObj.nextLine();


        if (input.equals("1")) {

            screen = "fight";
            
        }
            
            
        

        if (screen.equals("fight")) {

            fight();
    
        }

    }
    
    }// end run

}//class