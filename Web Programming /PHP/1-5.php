<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>1-5</title>
  </head>
  <body>
    <?php
      $age = 19;
      if ($age >= 18 && $age <= 35) {
        echo "Счастливчик!";
      }elseif ($age >= 1 && $age <= 17) {
        echo "Ne povezlo";
        echo "Too young";
      }else {
        echo "Ne povezlo";
      }
     ?>
  </body>
</html>
