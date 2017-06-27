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
