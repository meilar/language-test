$(document).ready(function() {
  let userScore = 0;

  $("button#btn-go").click(function() {
    console.log("load and button is working");
    $("div.intro").hide();
    $("div.questions").show();
    $("button#btn-submit").show();
  });

  $("button#btn-submit").click(function() {
    $("div.questions").toggle();
    $("div.waiting").show();
    setTimeout(function() {
      $("div.waiting").toggle();
      
      if (userScore >= 5) {
        $("div#ans-3").show();
      } else if (userScore === 4 || userScore === 5) {
        $("div#ans-2").show();  
      } else {
        $("div#ans-1").show();
      }

    }, 3000);

  });

  $("button#btn-reset").click(function() {
    location.reload();
  });

});