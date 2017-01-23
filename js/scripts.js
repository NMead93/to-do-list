// Business Logic
var counter= 0;




function ToDo(item,urgency,time,where) {
  this.item = item;
  this.urgency = urgency;
  this.time = time;
  this.where = where;

}




// User Logic

$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();

    var result = new ToDo($("#item").val(), $("#urgency").val(), $("#time").val(), $("#where").val());

    counter++;

    $(".output").append("<ul class=" + counter + "></ul>")
    $("." + counter).append("<li class='test' id='title'>" + result.item + "</li>")
    $("." + counter).append("<li class='test'>" + result.urgency + "</li>")
    $("." + counter).append("<li class='test'>" + result.time + "</li>")
    $("." + counter).append("<li class='test'>" + result.where + "</li>")

    $("ul").click(function() {
      $(this).remove();
    });
  });




});
