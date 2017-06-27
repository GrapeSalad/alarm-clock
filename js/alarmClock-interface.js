$(document).ready(function(){
  var now = moment().format("dddd, hh:mmA");
  $('#time').append('<p>The time is ' + now + ' now is the time.</p>');
  $("#alarm-set").submit(function(event){
    event.preventDefault();
    var alarm = $("#alarm").val();
    console.log("alarm is set for:" + alarm);
  });
});
