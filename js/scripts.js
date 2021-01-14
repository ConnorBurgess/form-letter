$(document).ready(function () {
  $("form#some-form").submit(function (event) {
    const someInput = $("input#some-input").val();
    $("#letterBody").hide();
    $("#letterBody").fadeIn(2000);
    $(".displayInput").text(someInput);

    event.preventDefault();
  });
});





