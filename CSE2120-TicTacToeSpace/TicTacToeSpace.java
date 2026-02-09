import java.util.Scanner; // Import the Scanner class

class TicTacToeSpace {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here

        String player1Character = "X";
        String player2Character = "O";
        String userChoice = "";
        int[] characterPos = { 0 , 0 };
        int playerX = 0;
        int playerY = 0;
        int turns = 0;
        String winCondition = "";

        String[] row1 = { " ", "|", " ", "|", " " };
        String[] row2 = { "-", "|", "-", "|", "-" };
        String[] row3 = { " ", "|", " ", "|", " " };
        String[] row4 = { "-", "|", "-", "|", "-" };
        String[] row5 = { " ", "|", " ", "|", " " };







        String[][] map = { row1, row2, row3, row4, row5};


        boolean gameRun = true;

        while (gameRun == true) {











        // X

        characterPos = playerChoiceAndCheck(map, player1Character);

        playerX = characterPos[0];
        playerY = characterPos[1];


        map = updateMap(map, playerX, playerY, player1Character);

        winCondition = checkWin(map, player1Character);

        if (!winCondition.equals("")) {

            printmap(map);

            gameRun = false;

            System.out.println("\n\n\n" + winCondition);

            break;
        }

        turns++;




        // draw
        if (turns >= 9) {
            gameRun = false;

            playersDraw(map);

            break;
        }












        // O

        characterPos = playerChoiceAndCheck(map, player2Character);

        playerX = characterPos[0];
        playerY = characterPos[1];


        map = updateMap(map, playerX, playerY, player2Character);


        winCondition = checkWin(map, player2Character);

        if (!winCondition.equals("")) {

            printmap(map);

            gameRun = false;

            System.out.println("\n\n\n" + winCondition);

            break;
        }


        turns++;




        // draw
        if (turns >= 9) {
            gameRun = false;

            playersDraw(map);

            break;
        }


    }


    myObj.close();


        // code ends here
    }// run



    public static void playersDraw(String[][] map) {


        printmap(map);

        System.out.println("\n\n\nX and O DRAW!");

    }



    public static String checkWin(String[][] board, String character){
        String result = "";
        int charactersInLine = 0;
        int indexRow = 0;
        int indexColumn = 0;


        // rows


        while (indexColumn < 5) {

            while (indexRow < 5) {

                if (board[indexColumn][indexRow].equals(character)) {

                    charactersInLine++;

                    //System.out.println("\n\nyup");
                }

                indexRow = indexRow + 2;
            }

            if (charactersInLine >= 3) {

                result = (character + " wins");
            }

            indexColumn = indexColumn + 2;

            indexRow = 0;

            charactersInLine = 0;
        }


        // column


        charactersInLine = 0;
        indexRow = 0;
        indexColumn = 0;

        while (indexRow < 5) {

            while (indexColumn < 5) {

                if (board[indexColumn][indexRow].equals(character)) {

                    charactersInLine++;

                   // System.out.println("\n\nyup");
                }

                indexColumn = indexColumn + 2;
            }

            if (charactersInLine >= 3) {

                result = (character + " wins");
            }

            indexRow = indexRow + 2;

            indexColumn = 0;

            charactersInLine = 0;
        }


        // diagnol


        if (board[0][0].equals(character) && board[2][2].equals(character) && board[4][4].equals(character)) {

            result = (character + " wins");

        }

        if (board[0][4].equals(character) && board[2][2].equals(character) && board[4][0].equals(character)) {

            result = (character + " wins");

        }




        return result; // result stores the value to be returned 
    }



    public static int[] playerChoiceAndCheck(String[][] map, String character) {
        Scanner myObj = new Scanner(System.in);
        int userColumn = 0;
        int userRow = 0;
        boolean runLoop = true;


        int[] characterPos = { 0 , 0 };


        while (runLoop == true) {

            printmap(map);

            System.out.println("\n\n\n" + character + " choose your Row 0, 2, 4");

                userRow = myObj.nextInt();

            System.out.println("\n" + character + " choose your Column 0, 2, 4");
                userColumn = myObj.nextInt();





            // if the user inputs an incorrect number the program won't crash
            if (userColumn <= 4 && userRow <= 4 && userColumn >= 0 && userRow >= 0) {

                if (map[userRow][userColumn].equals(" ")) {

                    characterPos[0] = userColumn; 
                    characterPos[1] = userRow;

                    runLoop = false;  
                } else {

                    System.out.println("\n\n\nincorrect choice, choose again");
                }

            } else {
                System.out.println("\n\n\nincorrect choice, choose again");

            }

        }



        return characterPos;

    }



    public static String[][] updateMap(String[][] map, int xCoordinate, int yCoordinate, String Character){
        String[][] newMap; 
        //logic goes here
        newMap = map;

        newMap[yCoordinate][xCoordinate] = Character;

        return newMap;

    }



    public static void printmap(String[][] column) {
        System.out.println("\n\n");
        int indexColumn = 0;
        int indexRow = 0;

        while (indexColumn < column.length) {

            String append = "";

            while (indexRow < column[indexColumn].length) {
                append = append + column[indexColumn][indexRow];
                indexRow++;

            } // end inner while
            System.out.println(append);
            indexRow = 0;
            indexColumn++;
        } // end outer while

    }


}// class