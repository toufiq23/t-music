const kick1 = new Tone.Player("./sounds/kicks/1.wav").toDestination();
const kick2 = new Tone.Player("./sounds/kicks/2.wav").toDestination();
const kick3 = new Tone.Player("./sounds/kicks/3.wav").toDestination();
const kick4 = new Tone.Player("./sounds/kicks/4.wav").toDestination();

const clap1 = new Tone.Player("./sounds/claps/1.wav").toDestination();
const clap2 = new Tone.Player("./sounds/claps/2.wav").toDestination();
const clap3 = new Tone.Player("./sounds/claps/3.wav").toDestination();
const clap4 = new Tone.Player("./sounds/claps/4.wav").toDestination();

const snare1 = new Tone.Player("./sounds/snares/1.wav").toDestination();
const snare2 = new Tone.Player("./sounds/snares/2.wav").toDestination();
const snare3 = new Tone.Player("./sounds/snares/3.wav").toDestination();
const snare4 = new Tone.Player("./sounds/snares/4.wav").toDestination();

const hiHat1 = new Tone.Player("./sounds/hi_hats/1.wav").toDestination();
const hiHat2 = new Tone.Player("./sounds/hi_hats/2.wav").toDestination();
const hiHat3 = new Tone.Player("./sounds/hi_hats/3.wav").toDestination();
const hiHat4 = new Tone.Player("./sounds/hi_hats/4.wav").toDestination();

const loop1 = new Tone.Player("./sounds/samples/1.wav").toDestination();
const loop2 = new Tone.Player("./sounds/samples/2.wav").toDestination();

const kickElement1 = document.getElementById("kick1");
const kickElement2 = document.getElementById("kick2");
const kickElement3 = document.getElementById("kick3");
const kickElement4 = document.getElementById("kick4");

const snareElement1 = document.getElementById("snare1");
const snareElement2 = document.getElementById("snare2");
const snareElement3 = document.getElementById("snare3");
const snareElement4 = document.getElementById("snare4");

const clapElement1 = document.getElementById("clap1");
const clapElement2 = document.getElementById("clap2");
const clapElement3 = document.getElementById("clap3");
const clapElement4 = document.getElementById("clap4");

const hiHatElement1 = document.getElementById("hi-hat1");
const hiHatElement2 = document.getElementById("hi-hat2");
const hiHatElement3 = document.getElementById("hi-hat3");
const hiHatElement4 = document.getElementById("hi-hat4");

kickElement1.onclick = function() {
  kick1.start();
};
kickElement1.onmouseover= function(){
  kickElement1.classList.add("tototot");
  kickElement1.style.backgroundColor = "red";
};

// 1 => Digit1     |  A / Q => KeyQ    |  Q / A => KeyA   |  W / Z  => KeyZ
// 2 => Digit2     |  Z / W => KeyW    |  S     => KeyS   |  X      => KeyX
// 3 => Digit3     |  E     => KeyE    |  D     => KeyD   |  C      => KeyC
// 4 => Digit4     |  R     => KeyR    |  F     => KeyF   |  V      => KeyV

window.onkeydown = function(e) {
  switch (e.code) {
    case "Digit1":
      kick1.start();
      kickElement1.classList.add("active");
      break;
    case "Digit2":
      snare1.start();
      snareElement1.classList.add("active");
      break;
    case "Digit3":
      clap1.start();
      clapElement1.classList.add("active");
      break;
    case "Digit4":
      hiHat1.start();
      hiHatElement1.classList.add("active");
      break;
    case "KeyQ":
      kick3.start();
      kickElement1.classList.add("active");
      break;
    case "KeyW":
      clap3.start();
      clapElement3.classList.add("active");
      break;
    case "KeyE":
      snare2.start();
      snareElement2.classList.add("active");
      break;
    case "KeyR":
      clap4.start();
      clapElement4.classList.add("active");
      break;
    case "KeyA":
      loop1.start();
      loopElement1.classList.add("active");
      break;
    case "KeyS":
      snare3.start();
      snareElement3.classList.add("active");
      break;
    case "KeyD":
      snare4.start();
      snareElement4.classList.add("active");
      break;
    case "KeyF":
      kick4.start();
      kickElement4.classList.add("active");
      break;
    case "KeyZ":
      kick2.start();
      kickElement2.classList.add("active");
      break;
    case "KeyX":
      hiHat2.start();
      hiHatElement2.classList.add("active");
      break;
  }
};

window.onkeyup = function(e) {
  switch (e.code) {
    case "Digit1":
     kick1.start();
     kickElement1.classList.remove("active");
      break;
    case "Digit2":
      snare1.start();
      snareElement1.classList.remove("active");
      break;
    case "Digit3":
      clap1.start();
      clapElement1.classList.remove("active");
      break;
    case "Digit4":
      hiHat1.start();
      hiHatElement1.classList.remove("active");
      break;
    case "KeyQ":
      kick3.start();
      kickElement1.classList.remove("active");
      break;
    case "KeyW":
      clap3.start();
      clapElement3.classList.remove("active");
      break;
    case "KeyE":
      snare2.start();
      snareElement2.classList.remove("active");
      break;
    case "KeyR":
      clap4.start();
      clapElement4.classList.remove("active");
      break;
    case "KeyA":
      loop1.start();
      loopElement1.classList.remove("active");
      break;
    case "KeyS":
      snare3.start();
      snareElement3.classList.remove("active");
      break;
    case "KeyD":
      snare4.start();
      snareElement4.classList.remove("active");
      break;
    case "KeyF":
      kick4.start();
      kickElement4.classList.remove("active");
      break;
    case "KeyZ":
      kick2.start();
      kickElement2.classList.remove("active");
      break;
    case "KeyX":
      hiHat2.start();
      hiHatElement2.classList.remove("active");
      break;
  }
};




