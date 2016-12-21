<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>1-7</title>
  </head>
  <body>
    <?php
      $items['Name'] = "John Snow";
      $items['Address'] = "Black castle";
      $items['Phone'] = "123-45-54";
      $items['Mail'] = "Whitewalkerssuck@westeros.no";

      foreach ($items as $key => $value) {
        echo "$key is: \"$value\"; <br>";
      }
     ?>
  </body>
</html>
