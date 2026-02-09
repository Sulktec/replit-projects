import java.util.Scanner; // Import the Scanner class

class IE2printingRoomStarter {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default

        String[] row1 = { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};
        String[] row2 = { "#", " ", " ", " ", "#", "#", " ", " ", " ", "#", "#", " ", " ", " ", "#"};
        String[] row3 = { "#", " ", "1", " ", "#", "#", " ", "2", " ", "#", "#", " ", "3", " ", "#"};
        String[] row4 = { "#", " ", " ", " ", "#", "#", " ", " ", " ", "#", "#", " ", " ", " ", "#"};
        String[] row5 = { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};
        String[] row6 = { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};
        String[] row7 = { "#", " ", " ", " ", "#", "#", " ", " ", " ", "#", "#", " ", " ", " ", "#"};
        String[] row8 = { "#", " ", "4", " ", "#", "#", " ", "5", " ", "#", "#", " ", "6", " ", "#"};
        String[] row9 = { "#", " ", " ", " ", "#", "#", " ", " ", " ", "#", "#", " ", " ", " ", "#"};
        String[] row10= { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"};

        


        String[][] map = { row1, row2, row3, row4, row5,row6, row7, row8, row9, row10};  
        printmap(map);
        
    }// run

    public static void printmap(String[][] column){

        int indexColumn = 0;
        int indexRow = 0;

        while (indexColumn < column.length) {

            String append = "";


            while(indexRow < column[indexColumn].length){
                append = append + column[indexColumn][indexRow];
                indexRow++;
            }//end inner while
            System.out.println(append);
            indexRow = 0;
            indexColumn++;
        }//end outer while

    }


    
}// class