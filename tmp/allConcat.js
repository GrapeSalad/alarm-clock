$(document).ready(function(){
  var now = moment().format("HH:mmA");
  $('#time').append('<p>The time is ' + now + ' now is the time.</p>');
  $("#alarm-set").submit(function(event){
    event.preventDefault();
    var alarm = $("#alarm").val();
    console.log("alarm is set for:" + alarm);
    var alarmCountdownTime = moment().subtract(moment(alarm.toString(), "HH:mmA"),moment(now.toString(), "HH:mmA"));
    console.log(moment(alarm.toString(), "HH:mmA"));
    console.log("time till alarm: " + moment(alarmCountdownTime).format("HH:mmA"));
  });
});
