public class NameThatCelebrity {
    public static void main(String args[]) {
        // code starts here

        String celebritySecret = "Mark is excellent at parking";
        //                        

        String part1 = celebritySecret.substring(0,4);
        String part2 = celebritySecret.substring(5,6);
        String part3 = celebritySecret.substring(21,22);
        String part4 = celebritySecret.substring(13,14);
        String part5 = celebritySecret.substring(5,6);
        String part6 = celebritySecret.substring(8,9);
        String part7 = celebritySecret.substring(23,24);

        String celebritySecretReveal = part1 + part2 + part3 + part4 + part5 + part6 + part7;

        System.out.println(celebritySecretReveal);

        // code ends here
    }
}
