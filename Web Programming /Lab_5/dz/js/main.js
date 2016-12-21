$(document).ready(function() {
  // alert(0);
  // $('.exit').html("Вы выбрали пиццу с: ");
  $('#but').on('click',function () {



    $txtarr = [];

      // alert(0);
      $(".checkb:checked").each(function(i) {
        $txt = $(this).val();
        $txtarr[i]=$txt;
      });
      $(".checka:checked").each(function(i) {
        $txt2 = $(this).val();
        // $txtarr[i]=$txt;
      });
      $totalcost= 0;
      function costcheck() {
        if($('#cost15').is(":checked")){
              $('#cost1').attr("checked",'checked');
              $('#cost2,#cost3').removeAttr("checked");
              // $('#cost3').removeAttr("checked");
        }else if ($('#cost25').is(":checked")) {
          $('#cost2').attr("checked",'checked');
          $('#cost1,#cost3').removeAttr("checked");
        }else if ($('#cost35').is(":checked")) {
          $('#cost3').attr("checked",'checked');
          $('#cost1,#cost2').removeAttr("checked");
        };
        if ($('#cost45').is(":checked")) {
          $('#cost4').attr("checked",'checked');
        };
        if ($('#cost55').is(":checked")) {
          $('#cost5').attr("checked",'checked');
        };
        if ($('#cost65').is(":checked")) {
          $('#cost6').attr("checked",'checked');
        };
         if ($('#cost75').is(":checked")) {
          $('#cost7').attr("checked",'checked');
        }else {
          $('#cost7').removeAttr("checked",'checked')
        };
         if ($('#cost85').is(":checked")) {
          $('#cost8').attr("checked",'checked');
        }
      };
      costcheck();

  $(".cost:checked").each(function(i) {

    $totalcost += parseInt($(this).val());
  });
// alert($totalcost);

$phone = $('#phone').val();
$phoneL = $('#phone').val().length;

$adress = $('#adress').val();
$adressL = $('#adress').val().length;


      $('.exit').html(function () {
        // $(this).html("Вы выбрали<span> "+$txt2+"</span> пиццу с:<br> ");
        // for(i=0; i< $txtarr.length; i++){
        //   if(i == $txtarr.length -1){
        //   $(this).append(""+$txtarr[i]+"; <br>");}
        //   else {
        //     $(this).append(""+$txtarr[i]+",<br>")
        //   }
        // }
          $(this).append(""+ $totalcost + "<br>");
          // $(this).append("Доставка на адрес: "+ $adress + "<br>Будьте на свзи по номеру: "+ $phone);

      });

  })
});
