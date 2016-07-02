/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package iris_app;

import static java.lang.Integer.parseInt;
import java.util.Scanner;
import static javafx.beans.binding.Bindings.length;

/**
 *
 * @author Lutsyk
 */


public class Iris_app {
    public interface virginica{
        public interface sepal_len{
            String min = "4.9";
            String max = "7.9";
        }
        public interface sepal_wid{
            String min = "2.2";
            String max = "3.8";
        }
         public interface petal_len{
            String min = "4.5";
            String max = "6.9";
        }
         public interface petal_wid{
            String min = "1.4";
            String max = "2.5";
        }
    }
    
    
    public interface versicolor{
        public interface sepal_len{
            String min = "4.9";
            String max = "7.0";
        }
         public interface sepal_wid{
            String min = "2.0";
            String max = "3.4";
        }
         public interface petal_len{
            String min = "3.0";
            String max = "5.1";
        }
         public interface petal_wid{
            String min = "1.0";
            String max = "1.8";
        }
    } 
    
    public interface setosa{
        public interface sepal_len{
            String min = "4.3";
            String max = "5.8";
        }
         public interface sepal_wid{
            String min = "2.3";
            String max = "4.4";
        }
         public interface petal_len{
            String min = "1.3";
            String max = "1.9";
        }
         public interface petal_wid{
            String min = "0.2";
            String max = "0.6";
        }
    } 
    
    
    public static String Iris(String sepal_len, String sepal_wid, String petal_len, String petal_wid){
if (petal_wid.compareTo("0.6") <= 0)
return "Iris-setosa";
        
//if (sepal_wid.compareTo("3.5") < 2.10) 
//return "Iris-versicolor";

//if (sepal_wid.compareTo("3.6") < 2.45 & petal_len.compareTo("5.0") < 4.55)
 //return "Iris-versicolor";
        
//if (sepal_wid.compareTo("7.1") < 2.95 & petal_wid.compareTo("1.7") < 1.35) 
//return "Iris-versicolor";
        
//if (petal_len.compareTo("5.2") >= 2.45 & petal_len.compareTo("2.9") < 4.45) 
//return "Iris-versicolor";
        
//if (sepal_len.compareTo("5.0") >= 5.85 & petal_len.compareTo("5.0") < 4.75)
//return "Iris-versicolor";
        
//if (sepal_wid.compareTo("3.3") < 2.55 & petal_len.compareTo("4.9") < 4.95 & petal_wid.compareTo("1.7") < 1.55) 
 //return "Iris-versicolor";
         
//if (petal_len.compareTo("3.1") >= 2.45 & petal_len.compareTo("5.0") < 4.95 & petal_wid.compareTo("1.7") < 1.55) 
//return "Iris-versicolor";
        
//if (sepal_len.compareTo("5.0") >= 6.55 & petal_len.compareTo("5.0") < 5.05)
//return "Iris-versicolor";
        
//if (sepal_wid.compareTo("3.3") < 2.75 & petal_wid.compareTo("1.6") < 1.65 & sepal_len.compareTo("6.9") < 6.05) 
//return "Iris-versicolor";
        
//if (sepal_len.compareTo("5.0")>= 5.85 & sepal_len.compareTo("6.9") < 5.95 & petal_len.compareTo("5.0") < 4.85) 
//return "Iris-versicolor";
        
if (petal_len.compareTo("4.5") >= 5.15)
 return "Iris-virginica";
         
if (petal_wid.compareTo("1.4") >= 1.85)
 return "Iris-virginica";
         
if (petal_wid.compareTo("1.4") >= 1.75 & sepal_wid.compareTo("3.8") < 3.05) 
return "Iris-virginica";

if (petal_len.compareTo("4.5") >= 4.95 & petal_wid.compareTo("2.5") < 1.55) 
return "Iris-virginica";

if (Double.parseDouble(sepal_len) >= 7.0)
 return "Iris-virginica";

if (Double.parseDouble(sepal_wid) >= 3.4)
 return "Iris-virginica";

if (Double.parseDouble(petal_wid) >= 1.9)
 return "Iris-virginica";

if (Double.parseDouble(petal_len) >= 5.1)
 return "Iris-virginica";
        
else return "Iris-versicolor";

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true){
        String[] s = sc.next().split(",");
            System.out.println(Iris(s[0],s[1],s[2],s[3]));
        }
    }

}
