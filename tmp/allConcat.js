var AlarmClock = require('./../js/alarmClock.js').alarmClockModule;
var Sounds = require('./../js/sound.js').soundModule;

function date_time() {
  $("#time").html(moment().format('H:mm:ss'));
}
setInterval(date_time, 1000);

$(document).ready(function(){
  $('#output').hide();
  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    var timesUp = $('#alarm').val();
    var newAlarmClock = new AlarmClock();
    var myVar = setInterval(myTimer, 1000);
      function myTimer() {
        // console.log(newAlarm.alarmClock(timesUp));
      if (newAlarmClock.alarmClock(timesUp)===true) {
        $('#output').show();
        clearInterval(myVar);
        $('body').addClass("red");
        Sounds();
      }
    }
  });
});
