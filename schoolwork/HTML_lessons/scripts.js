var whitekeys = document.getElementsByClassName("white");
for (var i = 0; i < whitekeys.length; i++) {
  whitekeys[i].addEventListener('click', playWhiteNote);
}

function playWhiteNote() {
  console.log('You pressed the white one');

  var note = this.classList[0];
  console.log(note);
  // is you pressed A

  var audio = document.getElementById('sounds-' + note); //get the exact note

  audio.play();
}

var blackkeys = document.getElementsByClassName("black");
for (var i = 0; i < blackkeys.length; i++) {
  blackkeys[i].addEventListener('click', playBlackNote);
}

function playBlackNote() {
  console.log('You pressed the black one');

  var note = this.classList[0];
  console.log(note);
  // is you pressed As

  var audio = document.getElementById('sounds-' + note); //get the exact note

  audio.play();
}
var power = document.getElementById('butt');
for (var i = 0; i < power.length; i++) {
  power[i].addEventListener('click', powerOn);
}

function powerOn() {
  console.log('You pressed the power button');
}
