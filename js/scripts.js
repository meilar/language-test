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

      const userEnthusiam = parseInt($("#q6-range").val());

      if (userEnthusiam === 1) {
        $(".ans-final-1").text("I'm sorry to hear that you are not excited about your career transition. If I was staring down the barrel of an entire career spent using ");
        $(".ans-final-2").text(", I wouldn't be excited either. Good luck!");
      } else if (userEnthusiam === 2) {
        $(".ans-final-1").text("I'm glad to hear that you are somewhat excited. Did you see that your best match was ");
        $(".ans-final-2").text("? It might be time to lower those expectations. Good luck!");
      } else {
        $(".ans-final-1").text("It's fantastic that you are so excited about your career transition. I expect that after working with ");
        $(".ans-final-2").text(" that will go away pretty quickly. Good luck!");
      }

    const lunch = parseInt($("#select-lunch").val());  

    if (lunch === 3) {
      $("span.lang-ins").text("Deadfish");
      $("div#ans-3").show();
    } else if (lunch === 2) {
      $("span.lang-ins").text("LOLCODE");  
      $("div#ans-2").show();
    } else {
      $("span.lang-ins").text("Airline Food");
      $("div#ans-1").show();
    }
  


    const userColor = $("#q4-color").val();

    $("span.lang-name").css("color", userColor);
      


    $("button#btn-reset").show();

    $("span.user-name").text($("input#form-name").val());

    }, 3000);

  });

  $("button#btn-reset").click(function() {
    location.reload();
  });

});