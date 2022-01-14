$(document).ready(function() {
  $("button#btn-go").click(function() {
    console.log("load and button is working");
    $("div.intro").hide();
    $("div.questions").show();
    $("button#btn-submit").show();
  });

  $("button#btn-reset").click(function() {
    location.reload();
  });
});