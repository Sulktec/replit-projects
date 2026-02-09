import java.util.Scanner; // Import the Scanner class


class RoomGame {
  public static void run() {
        // String[] row1 = { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};
        // String[] row2 = { "#", "☃", " ", " ", "#", "#", " ", "T", " ", "#", "#", " ", " ", " ", "#"};
        // String[] row3 = { "#", " ", "1", " ", "E", "W", " ", "2", " ", "E", "W", " ", "3", "T", "#"};
        // String[] row4 = { "#", " ", "T", " ", "#", "#", " ", " ", " ", "#", "#", " ", " ", " ", "#"};
        // String[] row5 = { "#", "#", "S", "#", "#", "#", "#", "S", "#", "#", "#", "#", "S", "#", "#"};
        // String[] row6 = { "#", "#", "N", "#", "#", "#", "#", "N", "#", "#", "#", "#", "N", "#", "#"};
        // String[] row7 = { "#", " ", " ", " ", "#", "#", " ", " ", " ", "#", "#", " ", " ", " ", "#"};
        // String[] row8 = { "#", "T", "4", " ", "E", "W", " ", "5", " ", "E", "W", " ", "6", "T", "#"};
        // String[] row9 = { "#", " ", " ", " ", "#", "#", " ", "T", " ", "#", "#", " ", " ", " ", "#"};
        // String[] row10 ={ "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};





      String[] row1 = { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};
      String[] row2 = { "#", "☃", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", "T", "#"};
      String[] row3 = { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row4 = { "#", " ", " ", "1", " ", " ", "E", "W", " ", " ", "2", " ", " ", "E", "W", " ", " ", "3", " ", " ", "#"};
      String[] row5 = { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row6 = { "#", " ", " ", "T", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row7 = { "#", "#", "#", "S", "#", "#", "#", "#", "#", "#", "S", "#", "#", "#", "#", "#", "#", "S", "#", "#", "#"};
      String[] row8 = { "#", "#", "#", "N", "#", "#", "#", "#", "#", "#", "N", "#", "#", "#", "#", "#", "#", "N", "#", "#", "#"};
      String[] row9 = { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row10= { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row11= { "#", "T", " ", "4", " ", " ", "E", "W", " ", " ", "5", " ", " ", "E", "W", " ", " ", "6", " ", " ", "#"};
      String[] row12= { "#", " ", " ", " ", " ", " ", "#", "#", " ", "T", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row13= { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row14= { "#", "#", "#", "S", "#", "#", "#", "#", "#", "#", "S", "#", "#", "#", "#", "#", "#", "S", "#", "#", "#"};
      String[] row15= { "#", "#", "#", "N", "#", "#", "#", "#", "#", "#", "N", "#", "#", "#", "#", "#", "#", "N", "#", "#", "#"};
      String[] row16= { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", "T", "#", "#", " ", " ", " ", " ", "T", "#"};
      String[] row17= { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row18= { "#", " ", "T", "7", " ", " ", "E", "W", " ", " ", "8", " ", " ", "E", "W", " ", " ", "9", " ", " ", "#"};
      String[] row19= { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", "T", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row20= { "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#", "#", " ", " ", " ", " ", " ", "#"};
      String[] row21= { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};
        //               0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20






        String[][] map = { row1, row2, row3, row4, row5,row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19, row20, row21};  
        // aroundPlayer = {up, right, down, left}

        int layerLevel = 3;
        String starterRoom = "1";

        int playerX = 1;
        int playerY = 1;

        int treasureAmount = 0;



        System.out.println("Collect all of the treasure to win.\n\n");

        printmap(map);

        numberFind(map, layerLevel, starterRoom, playerX, playerY, treasureAmount);

  }



    public static void numberFind(String[][] column, int layerLevel, String room, int playerX, int playerY, int treasureAmount) {

    int yAxis = 0;
    int xAxis = 0;

    int numberX = 0;
    int numberY = 0;


        while (yAxis < column.length) {

            while (xAxis < column[yAxis].length) {

                if (column[yAxis][xAxis].equals(room)) {

                    numberX = xAxis;

                    numberY = yAxis;

                }

                xAxis++;
            } 

            xAxis = 0;

            yAxis++;

    }


    printObservableUniverse(column, numberY, numberX, layerLevel, playerX, playerY, room, treasureAmount);




}


    public static int treasureAmountInMap(String[][] map) {
        int treasureInTheMap = 0;
        int indexColumn = 0;
        int indexRow = 0;

        while (indexColumn < map.length) {


            while(indexRow < map[indexColumn].length){

                if (map[indexColumn][indexRow].equals("T")) {

                   treasureInTheMap++;

                }

                indexRow++;
            }//end inner while

            indexRow = 0;
            indexColumn++;
        }//end outer while



        return treasureInTheMap;

    }




    public static void printObservableUniverse(String[][] column, int centrey, int centrex, int layerDepth, int playerX, int playerY, String room, int treasureAmount){




    Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default


    int treasureInTheMap = treasureAmountInMap(column);

    if (treasureInTheMap > 0) {


    System.out.println("\n\nTreasure Amount: " + treasureAmount);
    System.out.println("The room you're currently in:");

    int offsetx = -layerDepth;
    int offsety = layerDepth;

    int indexColumn = centrey + offsetx;
    int indexEnd = centrey + offsety;


    int indexRow = centrex + offsetx;
    int indexRowEnd = centrex + offsety;

    int[] playerPos = new int[2];

    String[] aroundPlayer = new String[6]; 






    while (indexColumn <= indexEnd) {

        String append = "";


        while(indexRow <= indexRowEnd){
            append = append + column[indexColumn][indexRow];
            indexRow++;

            // System.out.println(" a this point append contains " + append);
            // System.out.println(" a this point we are in column[" + indexColumn + "]"  + "[" + indexRow + "]");
            // System.out.println(" press enter to continue");
            // String unusedVariable = myObj.nextLine();

        }//end inner while
        System.out.println(append);
        indexRow = centrex + offsetx;
        indexColumn++;
    }//end outer while







        aroundPlayer = aroundPlayer(column, playerX, playerY);

        movement(column, playerX, playerY, aroundPlayer, room, layerDepth, treasureAmount);



    } else if (treasureInTheMap <= 0) {


        System.out.println("You've found all of the treasures. YOU WIN!");


    }



}






    public static String[] aroundPlayer(String[][] column, int playerX, int playerY) {

        String[] aroundPlayer = new String[6]; 

        // aroundPlayer = {up, right, down, left, roomChanged or "", room}

        aroundPlayer[0] = column[(playerY-1)][playerX];
        aroundPlayer[1] = column[playerY][(playerX+1)];
        aroundPlayer[2] = column[(playerY+1)][playerX];
        aroundPlayer[3] = column[playerY][(playerX-1)];


        // Make variable debug true to see what the player sees.

        boolean debugPlayerSight = false;

        if (debugPlayerSight == true) {

            System.out.println(" up/0 = " + aroundPlayer[0] + " right/1 = " +  aroundPlayer[1] +" down/2 = " +  aroundPlayer[2] + " left/3 = " +  aroundPlayer[3]);

        }



        return aroundPlayer;
    }




    public static void movement(String[][] column, int playerX, int playerY, String[] aroundPlayer, String roomString, int layerDepth, int treasureAmount) {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default

        System.out.println("\nWASD to move");

        int roomNum = Integer.parseInt(roomString);

        String userChoice = myObj.nextLine();

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");



        if (userChoice.equalsIgnoreCase("W") && !aroundPlayer[0].equals("#")) {

            if (aroundPlayer[0].equals("N")) {
                column[playerY][playerX] = " ";
                roomNum = roomNum - 3;

                playerY = playerY - 3;
            } else if (aroundPlayer[0].equals(" ") || aroundPlayer[0].equals("T")) {
                column[playerY][playerX] = " ";

                if (aroundPlayer[0].equals("T")) {

                    treasureAmount++;

                }

                playerY--;
            } else {

                System.out.println("Wrong imput or will go out of bounds");
            }

        } else if (userChoice.equalsIgnoreCase("A") && !aroundPlayer[3].equals("#")) {

            if (aroundPlayer[3].equals("W")) {
                column[playerY][playerX] = " ";
                roomNum = roomNum - 1;

                playerX = playerX - 3;
            } else if (aroundPlayer[3].equals(" ") || aroundPlayer[3].equals("T")){
                column[playerY][playerX] = " ";

                if (aroundPlayer[3].equals("T")) {

                    treasureAmount++;

                }

                playerX--;
            } else {

                System.out.println("Wrong imput or will go out of bounds");
            }


        } else if (userChoice.equalsIgnoreCase("S") && !aroundPlayer[2].equals("#")) {

            if (aroundPlayer[2].equals("S")) {
                column[playerY][playerX] = " ";
                roomNum = roomNum + 3;

                playerY = playerY + 3;
            } else if (aroundPlayer[2].equals(" ") || aroundPlayer[2].equals("T")) {
                column[playerY][playerX] = " ";

                if (aroundPlayer[2].equals("T")) {

                    treasureAmount++;

                }

                playerY++;
            } else {

                System.out.println("Wrong imput or will go out of bounds");
            }


        } else if (userChoice.equalsIgnoreCase("D") && !aroundPlayer[1].equals("#")) {

            if (aroundPlayer[1].equals("E")) {
                column[playerY][playerX] = " ";
                roomNum = roomNum + 1;

                playerX = playerX + 3;
            } else if (aroundPlayer[1].equals(" ") || aroundPlayer[1].equals("T")){
                column[playerY][playerX] = " ";

                if (aroundPlayer[1].equals("T")) {

                    treasureAmount++;

                }

                playerX++;
            } else {

                System.out.println("Wrong imput or will go out of bounds");
            }


        } else {

            System.out.println("Wrong imput or will go out of bounds");
        }

        roomString = String.valueOf(roomNum);






        playerPosChange(column, playerX, playerY, roomString, layerDepth, treasureAmount);

    }


    public static void playerPosChange(String[][] column, int playerX, int playerY, String room, int layerDepth, int treasureAmount) {



        column[playerY][playerX] = "☃";


        numberFind(column, layerDepth, room, playerX, playerY, treasureAmount);


    }







    public static void printmap(String[][] column){
        System.out.println("The entire map:");
        int indexColumn = 0;
        int indexRow = 0;

        while (indexColumn < column.length) {


            while(indexRow < column[indexColumn].length){

                System.out.print(column[indexColumn][indexRow]);
                indexRow++;
            }//end inner while
            System.out.println("");
            indexRow = 0;
            indexColumn++;
        }//end outer while

    }




}


