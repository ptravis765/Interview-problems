import java.util.*;
/**
 * Takes in 2 integer values from the user and returns an ordered list of
 * prime numbers that are between the two numbers
 *
 * @author Travis Peterson
 * @version 1/7/19
 */
public interface PrimeNumberGenerator 
{
    List<Integer> generate(int startingValue, int endingValue);
    Boolean isPRime(int value);
}

