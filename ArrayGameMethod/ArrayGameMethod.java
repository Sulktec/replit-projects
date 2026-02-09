import java.util.Scanner; // Import the Scanner class


class ArrayGameMethod {


    public static void roomLayout(String[][] column)  {


        int indexY = 0;
        int indexX = 0;

        while (indexY < column.length) {

            while (indexX < column[indexY].length) {

                System.out.print(column[indexY][indexX]);

                // increment indexX by one
                indexX++;
            }

            System.out.println("");

            indexX = 0;

            indexY++;

        }


    }


    public static void roomLogic(String[][] column) {

        int indexY = 0;
        int indexX = 0;


        int playerX = 0;
        int playerY = 0;

        // array that holds treasure
        int indexTreasure = 0;
        int[] treasureX = new int[9];
        int[] treasureY = new int[9];


        // array that hold keys
        int indexKey = 0;
        int[] keyX = new int[9];
        int[] keyY = new int[9];


        while (indexY < column.length) {

            while (indexX < column[indexY].length) {



                if (column[indexY][indexX].equals("P")) {

                    playerX = indexX;
                    playerY = indexY;


                }




                // door code

                // North

                if (column[indexY][indexX].equals("N")) {

                    System.out.println("there is a door to the north");

                }
                // East
                if (column[indexY][indexX].equals("E")) {

                    System.out.println("there is a door to the east");

                }
                // South
                if (column[indexY][indexX].equals("S")) {

                    System.out.println("there is a door to the south");

                }
                // West
                if (column[indexY][indexX].equals("W")) {

                    System.out.println("there is a door to the west");;

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



            indexX = 0;

            indexY++;

        }


        // Treasure and key code (used arrays so I can print out the X and Y value of every key/treasure on the            map which can help me when I'm debugging)


        int indexTemp = 0;

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


    }


    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here
        // start of Map

        // end of map

        String[] row1 = { "#", "#", "N", "#", "#" };
        String[] row2 = { "#", "K", "T", " ", "#" };
        String[] row3 = { "#", " ", "P", "K", "#" };
        String[] row4 = { "#", " ", "T", "T", "#" };
        String[] row5 = { "#", "#", "S", "#", "#" };

        String[][] column = { row1, row2, row3, row4, row5 };


        roomLayout(column);
        roomLogic(column);



        // code ends here
    }// run


}// class