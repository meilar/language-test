$(document).ready(function() {
  
  // Business Logic
  
  let userScore = 0;
  
  function userCalc() {
    let q2Score = $("select#select-lunch").val();
    alert(q2Score);
    let userScore = userScore + parseInt(q2Score);
    alert("new userscore is " + userScore);
  }

  // UI Logic 

  $("button#btn-go").click(function() {
    $("div.intro").hide();
    $("div.questions").show();
    $("button#btn-submit").show();
  });

  $("button#btn-submit").click(function() {
    $("div.questions").toggle();
    $("div.waiting").show();
    
    
    
    setTimeout(function() {
      $("div.waiting").toggle();

      userCalc();

      if (($.parseInt("select#select-lunch")) >= 5) {
        $("div#ans-3").show();
      } else if (userScore === 4 || userScore === 5) {
        $("div#ans-2").show();  
      } else {
        $("div#ans-1").show();
      }

      $("button#btn-reset").show();

      $("span.user-name").text($("input#form-name").val());

    }, 3000);

  });

  $("button#btn-reset").click(function() {
    location.reload();
  });

});