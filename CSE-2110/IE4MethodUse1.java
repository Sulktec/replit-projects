import java.util.Scanner;

class IE4MethodUse1 {

    
    public static String startRoom(String userChoice, String room) { // startRoom
        String temp = room;

        if (userChoice.equals("forward")) {
            temp = "lobby";
            System.out.println("\n\n\n\n\n\nyou enter the house, you are now in the lobby");

        }

        else if (userChoice.equals("exit")) {

            System.out.println("\n\n\n\n\nuser has quit the game");
        }

        else {
            System.out.println("\n\n\n\n\ninvalid choice you remain where you are");
        }

        return temp;
    }

    public static String lobbyRoom(String userChoice, String room) { // lobbyRoom
        String temp = room;

        if (userChoice.equals("backward")) {
            temp = "start";
            System.out.println("\n\n\n\n\nyou leave the house, you are now at the start");
        }

        else if (userChoice.equals("left")) {
            temp = "parlour";
            System.out.println("\n\n\n\n\nyou choose the door on the left, you are now in the parlour");
        }

        else if (userChoice.equals("right")) {
            temp = "dining room";
            System.out.println("\n\n\n\n\nyou take the door on the right, you are now in the dining room");
        }

        else if (userChoice.equals("exit")) {
            System.out.println("\n\n\n\n\nuser has quit the game");
        }

        else {
            System.out.println("\n\n\n\n\ninvalid choice, you remain where you are");
        }

        return temp;
    }

    public static String parlourRoom(String userChoice, String room) { // parlourRoom
        String temp = room;

        if (userChoice.equals("right")) {
            temp = "lobby";
            System.out.println("\n\n\n\n\nyou leave the parlour, you are now in the lobby");

        }      

        else if (userChoice.equals("exit")) {

            System.out.println("\n\n\n\n\nuser has quit the game");
        }

        else {
            System.out.println("\n\n\n\n\ninvalid choice you remain where you are");
        }


        return temp;
    }


    public static String diningRoom(String userChoice, String room) { // diningRoom
        String temp = room;

        if (userChoice.equals("left")) {
            temp = "lobby";
            System.out.println("\n\n\n\n\nyou leave the dining room, you are now in the lobby");

        }       

        else if (userChoice.equals("exit")) {

            System.out.println("\n\n\n\n\nuser has quit the game");
        }

        else {
            System.out.println("\n\n\n\n\ninvalid choice you remain where you are");
        }


        return temp;
    }







    

    public static void userOption() {
        System.out.println("\n\n");
        System.out.println("your options are:");
        System.out.println("forward");
        System.out.println("backward");
        System.out.println("left");
        System.out.println("right");
        System.out.println("pick up item");
        System.out.println("type exit to quit the game");
        System.out.print("type the direction you would like to move: ");
    }




    

    public static void run() {
        // code starts here
        Scanner myObj = new Scanner(System.in);
        String userChoice = "";
        String room = "start";
        boolean hasKey = false;

        System.out.println("\n\nyou left your car keys in the house. Go Find it.\n\n");
        
        while (!userChoice.equals("exit")) {

            if (room.equals("start")) { // beginning of start
                System.out.println("\n\n");
                System.out.println("\nyou are standing outside\n");
                System.out.println("there is a door to your front");
                System.out.println("there nothing to your back");
                System.out.println("there is nothing to your left");
                System.out.println("there is nothing to your right");
                System.out.println("there is nothing to pick up in the room");

                userOption();

                userChoice = myObj.nextLine();

                room = startRoom(userChoice, room);

            } // end of start

            else if (room.equals("lobby")) { // start of lobby

                System.out.println("\n\n");
                System.out.println("\nyou are in the lobby\n");
                System.out.println("there is nothing to your front");
                System.out.println("there is a door to your back");
                System.out.println("there is a door to your left");
                System.out.println("there is a door to your right");
                System.out.println("there is nothing to pick up in the room");

                userOption();

                userChoice = myObj.nextLine();

                room = lobbyRoom(userChoice, room);

            } // end of lobby

            else if (room.equals("parlour")) { // beginning of parlour

                System.out.println("\n\n");
                System.out.println("\nyou are now in the parlour\n");
                System.out.println("there is nothing to your front");
                System.out.println("there is nothing to your back");
                System.out.println("there is nothing to your left");
                System.out.println("there is a door to your right");
                System.out.println("there is something to pick up in the room");

                userOption();

                userChoice = myObj.nextLine();

                if (userChoice.equals("pick up item")) {
                    
                   System.out.println("\n\n\nYou found your car keys!");

                    hasKey = true;

                }  
                else {
                room = parlourRoom(userChoice, room);
                }

                
            } // end of parlour

            else if (room.equals("dining room")) { // beginning of dining room

                System.out.println("\n\n");
                System.out.println("\nyou are now in the dining room\n");
                System.out.println("there is nothing to your front");
                System.out.println("there is nothing to your back");
                System.out.println("there is a door to your left");
                System.out.println("there is nothing to your right");
                System.out.println("there is nothing to pick up in the room");

                userOption();

                userChoice = myObj.nextLine();

                room = diningRoom(userChoice, room);

                    
            } // end of dining room

            
            if (hasKey == true) {
                userChoice = "exit";
                System.out.println("\n\n\nyou have won");
            }
        }

        myObj.close(); // closes scanner myObj
        
        // code ends here
    }// run

}
// class