

$(document).ready(function () {
  $("form#some-form").submit(function (event) {
    const someInput = $("input#some-input").val();
    alert(someInput)
    event.preventDefault();
  });
});



