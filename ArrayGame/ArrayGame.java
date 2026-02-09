import java.util.Scanner; // Import the Scanner class

class ArrayGame {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here
        // start of Map
        String[] row1 = { "#", "#", "#", "#", "#" };
        String[] row2 = { "#", " ", "K", "K", "#" };
        String[] row3 = { "W", " ", "P", " ", "E" };
        String[] row4 = { "#", " ", "T", "T", "#" };
        String[] row5 = { "#", "#", "#", "#", "#" };
        // end of map

        String[][] column = { row1, row2, row3, row4, row5 };



        // Legend Variables

        //  “#” is used to represent a wall.
        // Space, or “ “, is used to to represent empty space in the room 
        // “P” is used to represent the player 
        int playerX = 0;
        int playerY = 0;
        // “N”, “E”, “S”, “W” are used to represent the 4 possible paths the player can take
        boolean doorNorth = false;
        boolean doorSouth = false;
        boolean doorEast = false;
        boolean doorWest = false;
        // “T” is used to represent treasure
        // “K” is used to represent a key 




        // indexes
        int indexY = 0;
        int indexX = 0;



        // array that holds treasure
        int indexTreasure = 0;
        int[] treasureX = new int[9];
        int[] treasureY = new int[9];


        // array that hold keys
        int indexKey = 0;
        int[] keyX = new int[9];
        int[] keyY = new int[9];


        // while loop that prints and calculates the row arrays
        while (indexY < column.length) {

            while (indexX < column[indexY].length) {

                System.out.print(column[indexY][indexX]);


                // player position

                if (column[indexY][indexX].equals("P")) {

                    playerX = indexX;
                    playerY = indexY;


                }



                // door code

                // North

                if (column[indexY][indexX].equals("N")) {

                    doorNorth = true;

                }
                // East
                if (column[indexY][indexX].equals("E")) {

                    doorEast = true;

                }
                // South
                if (column[indexY][indexX].equals("S")) {

                     doorSouth = true;

                }
                // West
                if (column[indexY][indexX].equals("W")) {

                    doorWest = true;

                }

                // treasure code

                if (column[indexY][indexX].equals("T")) {

                    treasureX[indexTreasure] = indexX;
                    treasureY[indexTreasure] = indexY;

                    indexTreasure++;
                }


                // key code

                if (column[indexY][indexX].equals("K")) {

                    keyX[indexKey] = indexX;
                    keyY[indexKey] = indexY;

                    indexKey++;
                }


                // increment indexX by one
                indexX++;
            }

            System.out.println("");

            indexX = 0;

            indexY++;

        }



        System.out.println("\n");

        // doors
        if (doorNorth == true) {

            System.out.println("there is a door to your north");         
        }

        if (doorEast == true) {

            System.out.println("there is a door to your east");           
        }

        if (doorSouth == true) {

            System.out.println("there is a door to your south");         
        }

        if (doorWest == true) {

            System.out.println("there is a door to your west");         
        }

        // declaring a new index

        int indexTemp = 0;

        // treasure

        while (indexTemp < indexTreasure) {
            String temp = "";

            // is it above player?

            if (treasureY[indexTemp] < playerY) {

                temp = temp + " North";

            }

            // is it below

            if (treasureY[indexTemp] > playerY) {

                temp = temp + " South";

            }


            // is it left of player?

            if (treasureX[indexTemp] < playerX) {

                temp = temp + " West";

            }


            // is it right of player?

            if (treasureX[indexTemp] > playerX) {

                temp = temp + " East";

            }

            System.out.println("there is a treasure to the player's" + temp);

            indexTemp++;
        }

        // reset indexTemp

        indexTemp = 0;


        // key

        while (indexTemp < indexKey) {
            String temp = "";

            // is it above player?

            if (keyY[indexTemp] < playerY) {

                temp = temp + " North";

            }

            // is it below

            if (keyY[indexTemp] > playerY) {

                temp = temp + " South";

            }


            // is it left of player?

            if (keyX[indexTemp] < playerX) {

                temp = temp + " West";

            }


            // is it right of player?

            if (keyX[indexTemp] > playerX) {

                temp = temp + " East";

            }

            System.out.println("there is a key to the player's" + temp);

            indexTemp++;
        }



        // debug

        //System.out.println("\n\nPlayer X: " + playerX + " Player Y: " + playerY);

        // code ends here
    }// run


}// class