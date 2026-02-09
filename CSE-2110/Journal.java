import java.util.Scanner;


class Journal{

    // global variables

    static Scanner myObj = new Scanner(System.in);
    static boolean exit = false;
    static String[] entryTitle = new String[500];
    static String[] entryContent = new String[500];
    static int entryNumber = 0;
    static String userChoice = "";
    static int userNumber = 0;
    

  // next screen  System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");


    public static void removeAllTextOnScreen() {
        System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    }

    // Journal Making

    public static void journalMaker(){
        removeAllTextOnScreen();      
        

        journalTitleMaker();

        
        
        journalEntryMaker();

        // adds one to entry number for next entry

        
        entryNumber = entryNumber + 1;
    }


    public static void journalTitleMaker(){     
            System.out.print("Create a Title for your Journal Entry:");
        
            userChoice = myObj.nextLine();

            entryTitle[entryNumber] = userChoice;

            System.out.println("\n\nYour title is " + entryTitle[entryNumber]);


    }


    public static void journalEntryMaker(){
            System.out.println("Put text here:");
        
            userChoice = myObj.nextLine();

            entryContent[entryNumber] = userChoice;

            System.out.println("\n\nEntry " + entryTitle[entryNumber] + " has been created");
    }

    public static void journalEntrySelector(){
        removeAllTextOnScreen();
        System.out.println("Press enter to exit\n");
        
        int index = 0;
        
        while (index < entryNumber) {

            System.out.println("\n" + index + ". " + entryTitle[index] + "\n");

            index = index + 1;
            
        }

        

      
        
        userChoice = myObj.nextLine();

        if (numberCheck(userChoice) == true) {
        
        userNumber = Integer.parseInt(userChoice);

        }

        if (userNumber <= entryNumber - 1) {
            
            journalEntryViewer(userNumber);
        } else {
            
            System.out.println("\n\nInvalid Option");  
            System.out.println("Press enter to continue.");
            userChoice = myObj.nextLine();
        }
        
    
    }


    public static boolean numberCheck(String temp) { 
     try {  
        Integer.parseInt(temp);  
        return true;
    } catch(NumberFormatException e){  
        return false;  
        }  
    }

    public static void journalEntryViewer(int temp){
        removeAllTextOnScreen();
        System.out.println("Press enter to exit\n\n");
        
        System.out.println("\nTitle: " + entryTitle[temp]);

        System.out.println("\n" + entryContent[temp]);

        

        userChoice = myObj.nextLine();
        

    
    }
    


    public static void options(){
        removeAllTextOnScreen();
        System.out.println("Please pick one.");
        System.out.println("   1. Create journal entry");
        System.out.println("   2. View journal entries");
        System.out.println("   3. Exit");
        System.out.print("Your Choice is:");
        
    }

    
    public static void optionChoose() {
        if (userChoice.equals("1")) {

            journalMaker();
            
        }

        if (userChoice.equals("2") && entryNumber > 0) {

            journalEntrySelector();
            
        } else if (userChoice.equals("2") && entryNumber == 0) {
            System.out.println("\n\n\n\nHey, make an entry first.");
            System.out.println("Press enter to continue.");
            userChoice = myObj.nextLine();
        }

        if (userChoice.equals("3")) {

            System.out.println("\nGoodbye!\n\nErasing all of you data...");
            
            exit = true;
            
        }

        
        
        
    }
    
    
    public static void run(){ // run
    //code starts here
        
        System.out.println("Welcome to the Journal Program!");
        while (exit == false) {

            options();
            userChoice = myObj.nextLine();
            optionChoose();

            
        }

        
    //code ends here
    }//run

}//class