const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const skier = {
  img1: new Image(),
  img2: new Image(),
  x: 250,
  y: 200,
  width: 80,
  height: 80,
  currentImg: 1,
};
skier.img1.src = "snimki/ozzy_right.png";
skier.img2.src = "snimki/ozzy_left.png";

const flags = [];
let score = 0;
let missed = 0;

function createFlag() {
  const flag = {
    img: new Image(),
    x: Math.random() * 250 + 75,
    y: canvas.height,
    width: 50,
    height: 50,
  };
  flag.img.src = "snimki/bat.png";
  flags.push(flag);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    skier.currentImg === 1 ? skier.img1 : skier.img2,
    skier.x,
    skier.y,
    skier.width,
    skier.height
  );

  for (let i = flags.length - 1; i >= 0; i--) {
    flags[i].y -= 5;
    ctx.drawImage(
      flags[i].img,
      flags[i].x,
      flags[i].y,
      flags[i].width,
      flags[i].height
    );

    if (flags[i].y + flags[i].height < 0) {
      flags.splice(i, 1);
      missed++;
      document.getElementById("missed").textContent = missed;
      if (missed >= 3) {
        alert("Играта приключи! Точки: " + score);
        document.location.reload();
      }
    } else if (
      flags[i].x < skier.x + skier.width &&
      flags[i].x + flags[i].width > skier.x &&
      flags[i].y < skier.y + skier.height &&
      flags[i].y + flags[i].height > skier.y
    ) {
      flags.splice(i, 1);
      score++;
      document.getElementById("score").textContent = score;
    }
  }
}

function moveSkier(event) {
  if (event.key === "ArrowLeft" && skier.x > 75) {
    skier.x -= 50;
  } else if (event.key === "ArrowRight" && skier.x < 425) {
    skier.x += 50;
  }
  skier.currentImg = skier.currentImg === 1 ? 2 : 1;
}

setInterval(updateGame, 50);
setInterval(createFlag, 1000);
document.addEventListener("keydown", moveSkier);
