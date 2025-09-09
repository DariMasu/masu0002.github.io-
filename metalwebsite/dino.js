const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", pan);
var note = document.getElementById("note");
var audio = document.getElementById("audio");

function pan() {
  note.classList.add("fun");
  audio.play();
}

var guitar = document.getElementById("guitar");

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jump();
  }
});

function jump() {
  if (guitar.classList != "animate") {
    guitar.classList.add("animate");
  }
  setTimeout(function () {
    guitar.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var guitarTop = parseInt(
    window.getComputedStyle(guitar).getPropertyValue("top")
  );
  var noteLeft = parseInt(
    window.getComputedStyle(note).getPropertyValue("left")
  );
  if (noteLeft < 195 && noteLeft > 0 && guitarTop >= 240) {
    note.classList.remove("fun");
    audio.pause();
    alert("You Lose!");
    audio.currentTime = 0;
  }
}, 10);
