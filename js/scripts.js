// Business Logic

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


    $("#output").append("<a href='#'><li id='title'>" + result.item + "</li>")
    $("#output").append("<li>" + result.urgency + "</li>")
    $("#output").append("<li>" + result.time + "</li>")
    $("#output").append("<li>" + result.where + "</li></a>")

  });

});
