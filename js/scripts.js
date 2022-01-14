$(document).ready(function() {
  
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

    const lunch = parseInt($("#select-lunch").val());  

    if (lunch === 3) {
      $("div#ans-3").show();
    } else if (lunch === 2) {
      $("div#ans-2").show();  
    } else {
      $("div#ans-1").show();
    }
  
    const userColor = $("#q4-color").val();

    $(".lang-name").css("color", userColor);
      


    $("button#btn-reset").show();

    $("span.user-name").text($("input#form-name").val());

    }, 3000);

  });

  $("button#btn-reset").click(function() {
    location.reload();
  });

});