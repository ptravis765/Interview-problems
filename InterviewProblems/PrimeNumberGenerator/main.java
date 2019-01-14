import java.io.*;
import java.util.*;
/**
 * This program uses 2 functions. A main function and a boolean isInteger 
 * function.
 * 
 * The isInteger class takes in an object and checks to see if it is
 * an integer number. It will return true if so and return false if not
 * 
 * The main class will take in output from the user. 2 numbers to be specific.
 * And only numbers will be accepted, anything else and the user will be put
 * into a while loop that will repeat until a number is entered. After 2
 * numbers are entered the Generator class will be called to create a 
 * generator object that will be used to call the List<generate>() function
 * which will generate a list of all the prime numbers between the 2 numbers
 * entered.
 *
 * Travis Peterson
 * 1/7/19
 */
public class main
{
    public static boolean isInteger(Object object)
    {
        if(object instanceof Integer)
        {
            return true;
        }else{
            String string = object.toString();
            try{
                Integer.parseInt(string);
            }catch(Exception e){
                return false;
            }
        }
        return true;
    }
    public static void mainTest()
    {
        String number;
        int num1;
        int num2;
        boolean cont = false;
        Scanner scanner= new Scanner(System.in);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Enter the first number: ");
        number = scanner.next();
        cont = isInteger(number);
        if(cont){
            num1 = Integer.parseInt(number);
        }else{
            while(cont == false)
            {
                System.out.print("You must enter a number: ");
                number = scanner.next();
                cont = isInteger(number);
            }
            num1 = Integer.parseInt(number);
        }
        
        
        System.out.print("\nEnter the second number: ");
        number = scanner.next();
        cont = isInteger(number);
        if(cont){
            num2 = Integer.parseInt(number);
        }else{
            while(cont == false)
            {
                System.out.print("You must enter a number: ");
                number = scanner.next();
                cont = isInteger(number);
            }
            num2 = Integer.parseInt(number);
        }
        
        
        
        if(num1 > num2)
        {
            int tmp = num2;
            num2 = num1;
            num1 = tmp;
        } 
        
        Generator generator = new Generator();
        
        List<Integer> generatedList = generator.generate(num1,num2);
        System.out.println("\n" + generator.generate(num1,num2));
    }
}
