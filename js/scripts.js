$(function() {
  $("#transport-form").submit(function(event) {
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workResponses = $(this).val();
      $("#work-responses").append(workResponses + "<br>");
    });

    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funResponses = $(this).val();
      $("#fun-responses").append(funResponses + "<br>");
    });

    $("#work-responses").fadeIn(500);
    $("#fun-responses").fadeIn(500);
    $("#transport-form").hide();
    event.preventDefault();
  });
});
