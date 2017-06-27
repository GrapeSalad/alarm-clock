(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AlarmClock(time) {
  this.setTime = time;
}

AlarmClock.prototype.alarmClock = function(timesUp) {
  var alarmClock = false;
  console.log(moment(this.time).format("HH:mm"));
  console.log(timesUp);
  // console.log(moment(this.time).isSame(timesUp));
  if ((moment(this.time).format("HH:mm")) === timesUp) {
    alarmClock = true;
  }
  // return alarm = moment(this.time).format("HH:mm").isSame(timesUp);
  return alarmClock;
}



exports.alarmClockModule = AlarmClock;

},{}],2:[function(require,module,exports){
function Sounds() {
  var sound = document.getElementById("audio");
  sound.play();
  console.log("sounds");
}


exports.soundModule = Sounds;

},{}],3:[function(require,module,exports){
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

},{"./../js/alarmClock.js":1,"./../js/sound.js":2}]},{},[3]);
