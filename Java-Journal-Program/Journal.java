import java.util.Scanner;


class Journal{

    // global variables

    static Scanner myObj = new Scanner(System.in);
    static boolean exit = false;
    static String[] entryTitle = new String[300];
    static String[] entryContent = new String[300];
    static int entryNumber = 0;
    static int maxEntires = 300;
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

        
        if (userChoice.equals("")) {

        } else if (!userChoice.equals("")) {
            
            
            journalEntryMaker();
            
    
        
        }
    }


    public static void journalTitleMaker(){     
            System.out.println("Don't type anything and Press enter to cancel\n");
            System.out.print("Create a Title for your Journal Entry:");
            userChoice = myObj.nextLine();

            entryTitle[entryNumber] = userChoice;

            System.out.println("\n\nYour title is " + entryTitle[entryNumber]);


    }


    public static void journalEntryMaker(){
            System.out.println("\n\n\nDon't type anything and Press enter to cancel\n");
            System.out.println("Put entry text here:");

            userChoice = myObj.nextLine();

            if (userChoice.equals("")) {
                
                
            } else if (!userChoice.equals("")) {
                entryContent[entryNumber] = userChoice;

                System.out.println("\n\nEntry " + entryTitle[entryNumber] + " has been created");
                System.out.println("Press enter to continue");

                entryNumber = entryNumber + 1;
                userChoice = "";
                myObj.nextLine();

            }


    }

    public static void journalEntrySelector(){
        removeAllTextOnScreen();
        userNumber = -1;
        

        int index = 0;

        while (index < entryNumber) {

            System.out.println("\n" + index + ". " + entryTitle[index] + "\n");

            index = index + 1;

        }
        
        
        System.out.println("\nPress enter to exit\n\n");
        System.out.print("Your Choice is:");



        userChoice = myObj.nextLine();

        if (numberCheck(userChoice) == true) {

        userNumber = Integer.parseInt(userChoice);

        }

        if (userNumber <= entryNumber - 1 && userNumber >= 0) {

            journalEntryViewer(userNumber);
        } else {

            if (userChoice.equals("")) {

                
            } else if (!userChoice.equals("")) {
            System.out.println("\n\nInvalid Option");  
            System.out.println("Press enter to continue.");
            myObj.nextLine();
            }
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
        

        System.out.println("\nTitle: " + entryTitle[temp]);

        System.out.println("\n" + entryContent[temp]);

        System.out.println("\n\nPress enter to exit");

        myObj.nextLine();;



    }



    public static void options(){
        removeAllTextOnScreen();
        System.out.println("Please pick one.\n");
        System.out.println((maxEntires - entryNumber) + " entries left");
        System.out.println("   1. Create journal entry");
        System.out.println("   2. View journal entries");
        System.out.println("   3. Exit");
        System.out.print("Your Choice is:");

    }


    public static void optionChoose() {
       
        userChoice = myObj.nextLine();
        if (userChoice.equals("1") && entryNumber < maxEntires) {

            journalMaker();

        } else if (userChoice.equals("1") && entryNumber >= maxEntires) {
            System.out.println("\n\n\n\nSorry, you can't make anymore entries.");
            System.out.println("Press enter to continue.");
            myObj.nextLine();
        }

        if (userChoice.equals("2") && entryNumber > 0) {

            journalEntrySelector();

        } else if (userChoice.equals("2") && entryNumber == 0) {
            System.out.println("\n\n\n\nHey, make an entry first.");
            System.out.println("Press enter to continue.");
            myObj.nextLine();
        }

        if (userChoice.equals("3")) {

            System.out.println("\nGoodbye!\n\nErasing all of you data...");

            exit = true;

        }




    }


    public static void run(){ // run
    //code starts here

        System.out.println("Welcome to the Journal Program!");
        System.out.println("Press enter to continue.");
        myObj.nextLine();
        
        while (exit == false) {
            userChoice = "";
            options();
            optionChoose();


        }


    //code ends here
    }//run

}//class