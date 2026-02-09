import java.util.Scanner; // Import the Scanner class

class IE1ovservableUniverse {

    public static void run() {

        int centrex = 5;
        int centrey = 5;

        String[] row1 = { "#", "#", "#", "#", "#", "#", "#", "#", "#" };
        String[] row2 = { "#", "@", "@", "@", "@", "@", "@", "@", "#" };
        String[] row3 = { "#", "@", "f", "f", "f", "f", "f", "@", "#" };
        String[] row4 = { "#", "@", "f", "g", "g", "g", "f", "@", "#" };
        String[] row5 = { "#", "@", "f", "g", "C", "g", "f", "@", "#" };
        String[] row6 = { "#", "@", "f", "g", "g", "g", "f", "@", "#" };
        String[] row7 = { "#", "@", "f", "f", "f", "f", "f", "@", "#" };
        String[] row8 = { "#", "@", "@", "@", "@", "@", "@", "@", "#" };
        String[] row9 = { "#", "#", "#", "#", "#", "#", "#", "#", "#" };
            

        String[][] universe = { row1, row2, row3, row4, row5,row6, row7, row8, row9};        // my solution 


     printUniverse(universe);
        
    }// run



    public static void printUniverse(String[][] column){

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


    public static void printObservableUniverse(String[][] column, int centrex, int centrey){



        int indexColumn = centrex - 2;
        int indexEnd = centrey + 2;
        
        int indexRow = 0;

        while (indexColumn < indexEnd) {

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