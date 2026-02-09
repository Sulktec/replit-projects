
import java.util.Scanner; // Import the Scanner class

class Ex5_linearSearch {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here

        String[] teachers = {"Qiu", "Peggy", "Chambers", "Perry"};

        int teacherIndex = linearSearch(teachers, "Peggy"); 

        
        if(teacherIndex > -1){
            System.out.println(teachers[teacherIndex] + " is a teacher");
        }else{
            System.out.println("search term is not in list");
        }
        
        // code ends here
    }// run

    
    public static int linearSearch(String[] array, String searchTerm ){
        
        for(int index =0; index < array.length; index ++){
            if(searchTerm.equalsIgnoreCase( array[index]  )  ){
                return index;
            }        
        }
        return -1;       
    }//linearSearch


    

}// class