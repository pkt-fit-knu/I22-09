<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Тестирую PHP</title>
  </head>
  <body>
    <?php
    $index1 = 5;
    print(gettype($index1));
    print("\r");
    $index2 = true;
    print(gettype($index2));
    print("\n");
    $index3 = "Hello";
    print(gettype($index3));
    print("\n");
    $index4 = 4.3;
    print(gettype($index4));
    print("\n");
    $index5 = array(1 => 1 );
   
    print(gettype($index5));

    
    ?>
  </body>
</html>
