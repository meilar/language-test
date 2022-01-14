$(document).ready(function() {
  $("button#btn-go").click(function() {
    console.log("load and button is working");
    $("div.intro").hide();
    $("div.questions").show();

  });

});