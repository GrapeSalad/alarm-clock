function Sounds() {
  var sound = document.getElementById("audio");
  sound.play();
  console.log("sounds");
}


exports.soundModule = Sounds;
