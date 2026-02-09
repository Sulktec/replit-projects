import java.util.Scanner;
class IE2CreatingGameLoop{

    
    public static void run(){
    //code starts here
        Scanner myObj = new Scanner(System.in);
        String userChoice = "";
        String room = "start";

        while (!userChoice.equals("exit")) {

            if(room.equals("start")){ // beginning of start

            

            System.out.println("you are standing outside");
            System.out.println("there is a door to your front");
            System.out.println("there nothing to your back");
            System.out.println("there is nothing to your left");
            System.out.println("there is nothing to your right");
            System.out.println("there is nothing to pick up in the room");

            System.out.println("\n");


            System.out.println("your options are:");
            System.out.println("forward");
            System.out.println("backward");
            System.out.println("left");
            System.out.println("right");
            System.out.println("type exit to quit the game");
            System.out.print("type the direction you would like to move: ");


            userChoice = myObj.nextLine();

                if(userChoice.equals("forward")){
                room = "lobby";
                System.out.println("\nyou enter the house, you are now in the lobby");
                
            }

            else if(userChoice.equals("exit")){

                System.out.println("\nuser has quit the game");
            }


            else{
                System.out.println("\ninvalid choice you remain where you are");
            }

                System.out.println("");

            } // end of start

            else if (room.equals("lobby")) {
                
            }
        }

        
    //code ends here
    }//run

}//class